import React, { Component } from "react";
import Counter from "./Counter";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: {},
      quickViewProdcut: {},
      isAdded: false
    };
    this.child = React.createRef();
  }
  calDiscount(price, discount){
    var price = Number(price);
    var discount = Number(discount) / 100;
    var totalValue = price - (price * discount)

    return totalValue.toFixed(2);
  }
  addToCart(image, name, price, id, quantity, discount, type) {
    this.setState(
      {
        selectedProduct: {
          image: image,
          name: name,
          price: price,
          id: id,
          discount:discount,
          type:type,
          quantity: quantity
        }
      },
      function() {
        this.props.addToCart(this.state.selectedProduct);
      }
    );
    this.setState(
      {
        isAdded: true
      },
      function() {
        setTimeout(() => {
          this.setState({
            isAdded: false,
            selectedProduct: {}
          });
        }, 3500);
      }
    );
    this.child.current.resetQuantity();
  }
  render() {
    let image = this.props.image;
    let name = this.props.name;
    let oriPrice = this.props.price;
    let id = this.props.id;
    let quantity = this.props.productQuantity;
    let discount = this.props.type == 'fiction' ? this.props.discount + 15 : this.props.discount;
    const discountPrice = this.calDiscount(this.props.price, discount);
    let type = this.props.type;
    let price = discountPrice;
    return (
      <div className="product">
        <div className="product-image">
          <img
            src={image}
            alt={this.props.name}
          />
        </div>
        <h4 className="product-name">{this.props.name}</h4>
        <p className="product-price discount">{this.props.price}</p>
        <p className="product-name">Discount : {this.props.discount}% {this.props.type == 'fiction' ? '+ 15%' : ''}</p>
        <p className="product-price">{discountPrice}</p>
        <Counter
          productQuantity={quantity}
          updateQuantity={this.props.updateQuantity}
          resetQuantity={this.resetQuantity}
          ref={this.child}
        />
        <div className="product-action">
          <button
            className={!this.state.isAdded ? "" : "added"}
            type="button"
            onClick={this.addToCart.bind(
              this,
              image,
              name,
              price,
              id,
              quantity,
              discount,
              type
            )}
          >
            {!this.state.isAdded ? "ADD TO CART" : "ADDED"}
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
