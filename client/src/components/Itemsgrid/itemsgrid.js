import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ItemCard from "../ItemCard/ItemCard";
import styles from "./styles";

const ItemsGrid = ({ classes, items }) => {
  return (
    <Grid container className={classes.itemsgridholder}>
      {items.map(item => (
        <Grid item xs={4} key={item.id}>
          <ItemCard className={classes.itemgridholder} item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default withStyles(styles)(ItemsGrid);
