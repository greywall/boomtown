import React from "react";
import ItemCard from "../ItemCard";
import { ItemPreviewContext } from "../../context/ItemPreviewProvider";

const ShareItemPreview = () => {
  return (
    <ItemPreviewContext.Consumer>
      {({ item, updatePreview, resetPreview }) => {
        // console.log(item);
        return (
          <ItemCard
            itemInfo={item}
            updatePreview={updatePreview}
            resetPreview={resetPreview}
          />
        );
      }}
    </ItemPreviewContext.Consumer>
  );
};

export default ShareItemPreview;
