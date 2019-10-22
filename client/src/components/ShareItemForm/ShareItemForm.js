import React, { Component, Fragment } from "react";
import Button from "@material-ui/core/Button";
import { mergeClasses } from "@material-ui/styles";
import { CardActions } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FormControl } from "@material-ui/core";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import { Form, Field } from "react-final-form";
import { Input, InputLabel } from "@material-ui/core";
import { FormLabel } from "@material-ui/core";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import GolfCourseIcon from "@material-ui/icons/GolfCourse";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import GavelIcon from "@material-ui/icons/Gavel";

class ShareForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, tags } = this.props;

    return (
      <div className={classes.shareformholder}>
        <Form
          onSubmit={() => {}}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <h1 className={classes.shareformheading}>
                Share. Borrow. <br /> Prosper.
              </h1>

              <div>
                <TextField
                  name="bio"
                  className={classes.shareformnameyouritem}
                  label="Name your item"
                  render={({ input, meta }) => <textarea {...input} />}
                />
              </div>
              <TextField
                name="bio"
                className={classes.shareformnameyouritem}
                label="Describe your item"
                render={({ input, meta }) => <textarea {...input} />}
              />
              <p>Add Tags:</p>
              <div>
                <FormControl className={classes.shareformtags}>
                  <label>
                    <Field
                      name="sauces"
                      component="input"
                      type="checkbox"
                      value="Photography"
                    />
                    Photography
                    <CameraAltIcon />
                  </label>
                </FormControl>

                <FormControl className={classes.shareformtags}>
                  <label>
                    <Field
                      name="sauces"
                      component="input"
                      type="checkbox"
                      value="Photography"
                    />
                    Flying
                    <AirplanemodeActiveIcon />
                  </label>
                </FormControl>

                <FormControl className={classes.shareformtags}>
                  <label>
                    <Field
                      name="sauces"
                      component="input"
                      type="checkbox"
                      value="Photography"
                    />
                    Golfing
                    <GolfCourseIcon />
                  </label>
                </FormControl>

                <FormControl className={classes.shareformtags}>
                  <label>
                    <Field
                      name="sauces"
                      component="input"
                      type="checkbox"
                      value="Photography"
                    />
                    Driving
                    <DriveEtaIcon />
                  </label>
                </FormControl>

                <FormControl className={classes.shareformtags}>
                  <label>
                    <Field
                      name="sauces"
                      component="input"
                      type="checkbox"
                      value="Photography"
                    />
                    Woodworking
                    <GavelIcon />
                  </label>
                </FormControl>
              </div>

              <Button
                variant="contained"
                type="submit"
                className={classes.sharebutton}
              >
                Share
              </Button>
            </form>
          )}
        />
      </div>
    );
  }
}

export default withStyles(styles)(ShareForm);
