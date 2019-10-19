import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ItemCard from "../ItemCard/ItemCard";
import styles from "./styles";

const ItemsGrid = ({ items }) => {
  return (
    <div>
      <Grid>
        <ItemCard />
      </Grid>
    </div>
  );
};

export default withStyles(styles)(ItemsGrid);
