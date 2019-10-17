import { display, fontSize, width } from "@material-ui/system";
import { green, purple } from "@material-ui/core/colors";

const styles = theme => ({
  root: {
    flexGrow: 1,
    fontSize: 500
  },
  menuButton: {
    marginRight: theme.spacing(40),
    justifyContent: "flex-end",
    backgroundColor: "green"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  navigationtoolbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexwrap: "wrap"
  },
  Menubaricon: {
    justifyContent: "flex-end",
    backgroundColor: "green"
  },
  title: {
    flexGrow: 1,
    fontSize: 500
  },
  menubaricon1: {
    backgroundColor: "green"
  }
});

export default styles;
