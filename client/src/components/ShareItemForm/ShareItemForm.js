import React, { Component, Fragment } from "react";
import { Typography, Input, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { Form, Field, FormSpy } from "react-final-form";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";
import { Mutation } from "react-apollo";
import { ADD_ITEM_MUTATION } from "../../apollo/queries";
import {
  AcUnit as AcUnitIcon,
  AccountBalance as AccountBalanceIcon,
  AccountBalanceWallet as AccountBalanceWalletIcon,
  Adb as AdbIcon,
  AirportShuttle as AirportShuttleIcon,
  Album as AlbumIcon
} from "@material-ui/icons";
import PropTypes from "prop-types";

class ShareForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disableButton: true
    };
  }
  onSubmit = values => {};
  validate = ({ title, description, tags }) => {
    if (title && description && tags) {
      this.setState({ disableButton: false });
      return;
    }
    this.setState({ disableButton: true });
  };

  applyTags = (tags, allTags) => {
    return tags.map(tag => {
      const updatedTag = { title: tag };
      allTags.filter(t => {
        if (t.title === tag) {
          updatedTag.id = t.id;
        }
      });
      return updatedTag;
    });
  };

  dispatchUpdate = (values, allTags, updatePreview) => {
    updatePreview({
      ...values,
      tags: this.applyTags(values.tags || [], allTags)
    });
  };

  saveItems = async (values, allTags, addItem) => {
    try {
      await addItem({
        variables: {
          title: values.title,
          description: values.description,
          tags: this.applyTags(values.tags || [], allTags),
          imageurl: values.imageurl
        }
      });
    } catch (e) {
      throw e;
    }
  };

  render() {
    const { classes, tags } = this.props;

    return (
      <ItemPreviewContext.Consumer>
        {({ updatePreview, resetPreview }) => {
          return (
            <Fragment>
              <Typography
                gutterBottom
                variant="h3"
                component="h2"
                color="textPrimary"
                className={classes.shareTitleQuote}
              >
                Share. Borrow. Prosper.
              </Typography>
              <Mutation mutation={ADD_ITEM_MUTATION}>
                {addItem => (
                  <Form
                    onSubmit={values => {
                      this.saveItems(values, tags, addItem);
                      console.log(this.values);
                    }}
                    validate={this.validate}
                    render={({ handleSubmit, form }) => (
                      <form
                        onSubmit={event => {
                          handleSubmit(event);
                          form.reset();
                          resetPreview();
                          console.log(addItem);
                          console.log(handleSubmit);
                          console.log(this.validate);
                          console.log(this.values);
                          console.log(tags);
                        }}
                      >
                        <FormSpy
                          subscription={{ values: true }}
                          onChange={({ values }) => {
                            if (values) {
                              this.dispatchUpdate(values, tags, updatePreview);
                            }
                            return "";
                          }}
                        />

                        <Field
                          name="title"
                          render={({ input, meta }) => (
                            <Input
                              required
                              className={classes.ShareItemFormContents}
                              type="text"
                              fullWidth
                              placeholder="Name your Item"
                              inputProps={{
                                "aria-label": "Item name"
                              }}
                              {...input}
                              value={input.value}
                            />
                          )}
                        />

                        <Field
                          name="description"
                          render={({ input, meta }) => (
                            <Input
                              required
                              className={classes.ShareItemFormContents}
                              type="text"
                              fullWidth
                              placeholder="Describe your Item"
                              inputProps={{
                                "aria-label": "Item description"
                              }}
                              {...input}
                              value={input.value}
                            />
                          )}
                        />

                        <Field
                          name="imageurl"
                          render={({ input, meta }) => (
                            <Input
                              required
                              className={classes.ShareItemFormContents}
                              type="text"
                              fullWidth
                              placeholder="Url of your Item"
                              inputProps={{
                                "aria-label": "Item url"
                              }}
                              {...input}
                              value={input.value}
                            />
                          )}
                        />

                        <div className={classes.ShareItemFormContents}>
                          <Typography
                            gutterBottom
                            variant="body1"
                            component="p"
                            color="textPrimary"
                          >
                            Add Tags:
                          </Typography>
                          {tags.map((tag, index) => (
                            <label key={index}>
                              <Field
                                name="tags"
                                component="input"
                                type="checkbox"
                                value={tag.title}
                              />{" "}
                              {tag.title} &nbsp;
                              {
                                ({ index } =
                                  index === 0 ? (
                                    <AcUnitIcon />
                                  ) : index === 1 ? (
                                    <AccountBalanceIcon />
                                  ) : index === 2 ? (
                                    <AccountBalanceWalletIcon />
                                  ) : index === 3 ? (
                                    <AdbIcon />
                                  ) : index === 4 ? (
                                    <AirportShuttleIcon />
                                  ) : (
                                    <AlbumIcon />
                                  ))
                              }
                            </label>
                          ))}
                        </div>
                        <Button
                          variant="contained"
                          color="secondary"
                          disabled={this.state.disableButton}
                          type="submit"
                        >
                          Share
                        </Button>
                      </form>
                    )}
                  />
                )}
              </Mutation>
            </Fragment>
          );
        }}
      </ItemPreviewContext.Consumer>
    );
  }
}

ShareForm.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default withStyles(styles)(ShareForm);
