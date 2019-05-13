import React from "react";
import { connect } from "react-redux";
import { selectItem, deleteItem } from "../actions";
const Menu = props => {
  console.log(props.cart);
  const displayMenu = () => {
    return props.menu.map(option => {
      return (
        <div key={option.meal} style={{ marginTop: "3%" }}>
          <button
            className="btn-primary form-control"
            onClick={() => props.selectItem(option)}
          >
            {option.meal}
          </button>
          <button
            onClick={() => props.deleteItem(option)}
            className="btn-danger"
          >
            Remove
          </button>
        </div>
      );
    });
  };
  return <div>{displayMenu()}</div>;
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
    menu: state.FoodList
  };
};
export default connect(
  mapStateToProps,
  { selectItem, deleteItem }
)(Menu);
