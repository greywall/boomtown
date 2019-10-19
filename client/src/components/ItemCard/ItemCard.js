import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const ItemCard = ({ classes, item }) => {
  return (
    <div>
      <Card>this is a card</Card>
    </div>
  );
};

export default withStyles(styles)(ItemCard);
