import React from "react";
import { connect } from "react-redux";

function Cart(props) {
  return <div>{JSON.stringify(props.items)}</div>;
}

const mapStateToProps = state => {
  return {
    items: state.cart,
  };
};

export default connect(mapStateToProps)(Cart);
