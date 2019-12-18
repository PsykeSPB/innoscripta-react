import React from "react";
import { connect } from "react-redux";
import ProductCard from "./ProductCard";
import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

function OrderCard(props) {
  const handleClick = e => {
    props.addToCart(props.id);
  };

  return (
    <ProductCard
      imgSrc={props.imgSrc}
      heading={props.heading}
      description={props.description}
      price={props.price}
    >
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddShoppingCartIcon />}
        onClick={handleClick}
      >
        Add to cart
      </Button>
    </ProductCard>
  );
}

const mapDispatchToProps = dispatch => ({
  addToCart: id => {
    dispatch({ type: "ADD_TO_CART", id: id, quantity: 1 });
  },
});

export default connect(state => ({}), mapDispatchToProps)(OrderCard);
