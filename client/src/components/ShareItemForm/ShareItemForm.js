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
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";

const shareFormStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};

class ShareForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  state = {
    username: ""
  };

  updateInput(e) {
    e.persist();

    const value = e.target.value;
    this.setState({ username: value });
    console.log("password: ", this.refs.password.value);
  }

  render() {
    const { classes, tags } = this.props;
    console.log(tags);
    return (
      <div>
        <h1>Share. Borrow. Prosper.</h1>
        <form style={shareFormStyle}>
          <div>
            <TextField
              id="itemtitle"
              onChange={e => this.updateInput(e)}
              name="Item Name"
              type="text"
              placeholder="Name your item"
              // value={this.state.username}
            />
          </div>

          <div>
            <TextField
              onChange={e => this.updateInput(e)}
              name="Item Description"
              type="text"
              placeholder="Describe your item"
              // value={this.state.username}
            />
          </div>
          <p>Add Tags:</p>

          <div>
            <TextField
              onChange={e => this.updateInput(e)}
              name="Item Description"
              type="text"
              placeholder="Describe your item"
              value={this.state.username}
            />

            <div>
              {tags.map(tag => {
                return (
                  <FormControlLabel
                    control={
                      <Checkbox
                        icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                        checkedIcon={<CheckBoxIcon fontSize="small" />}
                        value="checkedI"
                      />
                    }
                    label="Custom size"
                  />
                );
              })}
            </div>
          </div>
          <CardActions>
            <Button variant="contained" type="submit">
              Share
            </Button>
          </CardActions>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(ShareForm);
