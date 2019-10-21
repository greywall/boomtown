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
import Link from "@material-ui/core/Link";
import PropTypes from "prop-types";

const ItemCard = ({ classes, item }) => {
  return (
    <Card className={classes.cardholder}>
      <CardActionArea>
        <Link to="http://www.google.com">
          <CardMedia
            className={classes.cardimage}
            image="http://place-puppy.com/500x280"
            title="puppy place"
          />
        </Link>
        <CardContent>
          <div className={classes.cardcontentdiv}>
            <Avatar
              className={classes.personicon}
              alt="Puppy Name"
              src="http://place-puppy.com/500x280"
            />
            <Typography className={classes.userinfo}>
              <Box>{item.itemowner.fullname}</Box>
              <Box color="lightgrey">25 years ago</Box>
            </Typography>
          </div>

          <div className={classes.carddetails}>
            <Typography>
              <Box className={classes.carddetail}>{item.title}</Box>

              {item.tags.map(tag => (
                <Box
                  color="lightgrey"
                  className={classes.carddetail}
                  key={tag.id}
                >
                  {tag.title}
                </Box>
              ))}

              <Box className={classes.carddetail}>{item.description}</Box>
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
  );
};

ItemCard.defaultProps = {
  item: {
    imageurl: "http://place-puppy.com/500x280",
    itemowner: {
      fullname: "Name here"
    },
    date: "date here",
    title: "Item Title",
    tags: [
      { id: 0, title: "Tags 1" },
      { id: 1, title: "Tags 2" },
      { id: 2, title: "Tags 3" },
      { id: 3, title: "Tags 4" }
    ],
    description: "Description goes here"
  }
};

export default withStyles(styles)(ItemCard);
