import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Icon from "@material-ui/core/Icon";
import { Link, withRouter } from "react-router-dom";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import { LOGOUT_MUTATION, VIEWER_QUERY } from "../../apollo/queries";
import { Mutation } from "react-apollo";

const ITEM_HEIGHT = 48;

const refetchQueries = [{ query: VIEWER_QUERY }];

const MenuBarIcon = props => {
  const { classes } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Mutation mutation={LOGOUT_MUTATION} refetchQueries={refetchQueries}>
      {(logout, { loading }) => (
        <React.Fragment>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: 200
              }
            }}
          >
            <Link to="/profile">
              <MenuItem onClick={handleClose}>
                <Icon className={classes.iconMenuBar}>fingerprint</Icon> YOUR
                PROFILE
              </MenuItem>
            </Link>
            <Link to="/welcome">
              <MenuItem
                onClick={async () => {
                  try {
                    await logout();
                  } catch (e) {
                    throw e;
                  }
                }}
              >
                <Icon className={classes.iconMenuBar}>power_settings_new</Icon>{" "}
                LOGOUT
              </MenuItem>
            </Link>
          </Menu>
        </React.Fragment>
      )}
    </Mutation>
  );
};

export default withRouter(withStyles(styles)(MenuBarIcon));
