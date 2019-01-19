import React from "react";
import { connect } from "react-redux";
import Container from "./Container";
import "../styles/styles.scss";

const App = ({ cardsCount, state, total, discount, typeDiscount }) => {
  localStorage.setItem("cart", JSON.stringify(state));
  return (
    <div id="root">
      <div className="main-container">
        <header>
          <div className="container">
            <h3 className="logo">Front End Engineering Test  (Shopping Cart)</h3>
          </div>
        </header>
        {state.map(quan => {
          (total = total + quan.price * quan.quantity),
            (discount =
              discount + (quan.discount / 100) * (quan.price * quan.quantity));
          if (quan.type == "fiction")
            typeDiscount =
              typeDiscount + (15 / 100) * (quan.price * quan.quantity);
        })}
        <div className="shopping-container">
          <div className="item-container">
            <span>
              <i style={{ fontSize: "24px" }} className="fa">
                &#xf104;
              </i>
              <h1 className="inner-container-title">Order Summary </h1>
            </span>
            <div className="inner-container">
              <table className="item-table-list" cellSpacing="0">
                <thead>
                  <tr>
                    <th>
                      <strong>Items({cardsCount})</strong>
                    </th>
                    <th>
                      <strong>Qty</strong>
                    </th>
                    <th>
                      <strong>Price</strong>
                    </th>
                  </tr>
                </thead>
                {state.length ? (
                  <Container />
                ) : (
                  <tbody>
                    <tr>
                      <td className="restore-td">
                      <br></br>
                        <a
                          className="reload-items"
                          href="./"
                        >
                          Restore
                        </a>
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
          </div>

          <div className="cart-container">
            <table className="cart-table" cellSpacing="0">
              <tbody>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Items ({cardsCount}) </strong>
                  </td>
                  <td>:</td>
                  <td>
                    <strong>&#36;{total}</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Discount</strong>
                  </td>
                  <td>:</td>
                  <td>
                    <strong>-&#36;{discount}</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Type discount</strong>
                  </td>
                  <td>:</td>
                  <td>
                    <strong>&#36;{typeDiscount}</strong>
                  </td>
                </tr>
                <tr>
                  <td>Order Total</td>
                  <td>:</td>
                  <td>&#36;{total - discount - typeDiscount}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    total: 0,
    discount: 0,
    typeDiscount: 0,
    cardsCount: state.length,
    state: state
  };
};

export default connect(mapStateToProps)(App);
