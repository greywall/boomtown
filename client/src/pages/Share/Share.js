import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ShareItemPreview from "../../components/ShareItemPreview";
import ShareItemForm from "../../components/ShareItemForm";

const Share = ({ classes, tags }) => {
  return (
    <div>
      <div>
        <ShareItemPreview className={classes.itempreview} tags={tags} />
      </div>

      <div>
        <ShareItemForm className={classes.itemform} tags={tags} />
      </div>
    </div>
  );
};

export default withStyles(styles)(Share);
