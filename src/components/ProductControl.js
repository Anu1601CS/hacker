import React from "react";
import { Segment } from "semantic-ui-react";

const ProductControl = ({ id, quantity, onRemoveCart, onAddCart }) => {
  return (
    <div>
      <div className="removeCart" onClick={() => onRemoveCart(id)}>-</div>
      <Segment compact className="count ui-helper-center">
        <div className="project-card ui-helper-center" >{quantity}</div>
      </Segment>
      <div className="addCart" onClick={() => onAddCart(id)}>+</div>
    </div>
  );
};

export default ProductControl;
