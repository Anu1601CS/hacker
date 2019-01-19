import React from "react";
import { connect } from "react-redux";
import ProductAction from "./ProductAction";
import ProductControl from "./ProductControl";
import { removeTask, removeCart, addCart } from "../actions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Container = ({ state, remove, removeCart, addCart, showToast }) => {

  return (
    <tbody className="ui-tbody">
      <tr>
        <td>
        <ToastContainer />
          <br />
        </td>
      </tr>
      {state.map(element => (
        <tr key={element.id}>
          <td className="ui-helper-center">
            <ProductAction
              key={element.id}
              {...element}
              onRemoveClick={remove}
              onshowToast={showToast}
            />
          </td>
          <td className="ui-helper-center">
            <ProductControl
              key={element.id}
              {...element}
              onRemoveCart={removeCart}
              onAddCart={addCart}
            />
          </td>
          <td className="ui-helper-center">
            ${element.price * element.quantity}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    state: state,
    showToast: id => {
      {
        const options = {
          position: "top-left",
          autoClose: 2000,
          type:"success",
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        };

        state.map(element => {
          if (element.id == id) toast(`${element.name} Deleted`, options);
        });
      }
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    remove: id => {
      dispatch(removeTask(id));
    },
    removeCart: id => {
      dispatch(removeCart(id));
    },
    addCart: id => {
      dispatch(addCart(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
