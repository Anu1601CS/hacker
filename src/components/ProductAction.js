import React from "react";
import { Segment } from "semantic-ui-react";

const ProductAction = ({ id, name, img_url, onRemoveClick, onshowToast }) => {
  return (
    <Segment compact>
      <div className="item-description">
        <img src={img_url} style={{ height: "35px" }} alt="item" />
        {name}
      </div>
      <div
        className="item-delete"
        onClick={() => {
          onRemoveClick(id);
          onshowToast(id);
        }}
      >
        X
      </div>
    </Segment>
  );
};

export default ProductAction;
