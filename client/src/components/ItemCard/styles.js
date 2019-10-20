import { fontSize, flexbox, textAlign } from "@material-ui/system";

const styles = theme => ({
  buttonborrow: {
    background: "none",
    boxShadow: "none",
    border: "1px solid #525252",
    fontSize: "15px"
  },
  cardbutton: {
    paddingLeft: "18px"
  },
  cardcontentdiv: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  userinfo: {
    paddingLeft: "20px"
  },
  cardimage: {
    height: "50vw"
  },
  personicon: {
    height: "50px",
    width: "50px"
  },
  carddetails: {
    padding: "20px"
  },
  carddetail: {
    marginBottom: "10px"
  },
  cardtitle: {
    fontSize: "30px"
  }
});

export default styles;
