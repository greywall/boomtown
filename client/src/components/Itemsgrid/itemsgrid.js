import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ItemCard from "../ItemCard/ItemCard";
import styles from "./styles";
import { mergeClasses } from "@material-ui/styles";

const ItemsGrid = ({ classes, items }) => {
  return (
    <div>
      <Grid>
        <ItemCard className={classes.itemgridholder} />
      </Grid>
    </div>
  );
};

export default withStyles(styles)(ItemsGrid);
