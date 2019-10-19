import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Items from "../../pages/Items/Items";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

const ItemCard = ({ classes, item }) => {
  return (
    <div>
      <Card className={classes.cardholder}>
        <CardActionArea>
          <CardMedia
            src="http://place-puppy.com/300x450"
            className={classes.image}
            image="/static/images/cards/paella.jpg"
            title="Paella dish"
          />

          <CardContent>
            <div>
              <Avatar
                classname={classes.personicon}
                fullname={"Persons Name"}
              />

              <p>This is my person's Name</p>
              <p>This is the created date</p>
            </div>

            <div>
              <h1>The Name of the card</h1>
              <p>This is where the tags go</p>
              <p>Item Description</p>
            </div>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button variant="contained" className={classes.buttonborrow}>
            Borrow
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default withStyles(styles)(ItemCard);
