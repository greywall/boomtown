import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ItemCard from "../ItemCard/ItemCard";
import styles from "./styles";

const ShareItemPreview = ({ classes }) => {
  return (
    <div className={classes.shareitemprev}>
      <ItemCard />
    </div>
  );
};

export default withStyles(styles)(ShareItemPreview);
