import React from "react";
import styles from "./styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import logo from "../../images/boomtown.svg";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Icon from "@material-ui/core/Icon";
import add_circle from "@material-ui/core/Icon";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menubaricon from "../Menubaricon";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const Menubar = ({ classes }) => {
  return (
    <AppBar position="static">
      <Toolbar className="tool-bar">
        <NavLink exact className="nav-link" to="/" activeClassName="selected">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            height="30px"
            weight="20px"
          />
        </NavLink>

        <Fab variant="extended">
          <AddIcon />
          SHARE SOMETHING
        </Fab>

        <Menubaricon className="menubaricon1"></Menubaricon>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Menubar);

{
  /* <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar> */
}
