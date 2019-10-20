import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { NavLink } from "react-router-dom";

const ITEM_HEIGHT = 48;

export default function Menubaricon() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
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
        <NavLink to="/profile">
          <MenuItem onClick={handleClose}>
            <FingerprintIcon aria-label="add" size="large" />
            Your Profile
          </MenuItem>
        </NavLink>

        <NavLink to="/welcome">
          <MenuItem onClick={handleClose}>
            <PowerSettingsNewIcon aria-label="add" size="large" />
            Sign Out
          </MenuItem>
        </NavLink>
      </Menu>
    </div>
  );
}
