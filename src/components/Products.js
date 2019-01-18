import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  constructor() {
    super();
  }
  render() {
    let productsData;
    productsData = this.props.productsList
      .map(product => {
        return (
          <Product
            key={product.id}
            price={product.price}
            name={product.name}
            image={product.img_url}
            id={product.id}
            discount={product.discount}
            type={product.type}
            addToCart={this.props.addToCart}
            productQuantity={this.props.productQuantity}
            updateQuantity={this.props.updateQuantity}
            openModal={this.props.openModal}
          />
        );
      });

    let view;
      view = (
        <div className="products"
          className="products"
        >
          {productsData}
        </div>
      );
    return <div className="products-wrapper">{view}</div>;
  }
}

export default Products;
