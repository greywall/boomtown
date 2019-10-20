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
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const ItemCard = ({ classes, item }) => {
  return (
    <div>
      <Card className={classes.cardholder}>
        <CardActionArea>
          <CardMedia
            src="http://place-puppy.com/500x280"
            className={classes.cardimage}
            image="http://place-puppy.com/500x280"
            title="Cute Puppy"
          />

          <CardContent>
            <div className={classes.cardcontentdiv}>
              <Avatar
                className={classes.personicon}
                alt="Puppy Name"
                src="http://place-puppy.com/500x280"
              />
              <Typography className={classes.userinfo}>
                <Box>Jerry Jefferson</Box>
                <Box color="lightgrey">25 years ago</Box>
              </Typography>
            </div>

            <div className={classes.carddetails}>
              <Typography>
                <Box
                  className={classes.carddetail}
                  className={classes.cardtitle}
                >
                  The Name of the card
                </Box>
                <Box color="lightgrey" className={classes.carddetail}>
                  This is where the tags go This is where the tags go This is
                  where the tags go This is where the tags go This is where the
                  tags go This is where the tags go
                </Box>
                <Box className={classes.carddetail}>Item Description</Box>
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>

        <CardActions className={classes.cardbutton}>
          <Button variant="contained" className={classes.buttonborrow}>
            Borrow
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default withStyles(styles)(ItemCard);
