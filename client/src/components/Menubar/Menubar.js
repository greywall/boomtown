import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { NavLink } from "react-router-dom";
import logo from "../../images/boomtown.svg";
// import Icon from "@material-ui/core/Icon";
import Menubaricon from "../Menubaricon";
import Fab from "@material-ui/core/Fab";
import AddCircleIcon from "@material-ui/icons/AddCircle";

const Menubar = ({ classes }) => {
  return (
    <AppBar position="static">
      <Toolbar className="tool-bar" className={classes.toolbar}>
        <div>
          <NavLink exact className="nav-link" to="/" activeClassName="selected">
            <img
              src={logo}
              className={classes.applogo}
              alt="logo"
              height="30px"
              weight="20px"
            />
          </NavLink>
        </div>

        <div className={classes.navigationtoolbar}>
          <Fab
            className={classes.navigationtoolbarbutton}
            color="primary"
            variant="extended"
          >
            <AddCircleIcon
              className={classes.navigationtooladdicon}
              aria-label="add"
              size="large"
            />
            SHARE SOMETHING
          </Fab>

          <Menubaricon className="menubaricon1"></Menubaricon>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Menubar);
