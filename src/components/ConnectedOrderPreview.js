import React from "react";
import { connect } from "react-redux";
import Axios from "../plugins/axios";
import OrderPreview from "./OrderPreview";

class ConnectedOrderPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      order: {
        products: [],
        services: [],
        total_cost: {
          EUR: 0,
          USD: 0,
        },
      },
    };
  }

  componentDidMount() {
    if (Object.keys(this.props.cart).length > 0) {
      this.fetch();
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.cart !== this.props.cart ||
      prevProps.order !== this.props.order
    ) {
      this.fetch();
    }
  }

  render() {
    return (
      <OrderPreview
        isLoading={this.state.isLoading}
        products={this.state.order.products}
        services={this.state.order.services}
        totalCost={this.state.order.total_cost}
        addProduct={this.props.addProduct}
        reduceProduct={this.props.reduceProduct}
        removeProduct={this.props.removeProduct}
        minified={this.props.minified}
        heading={this.props.heading}
      >
        {this.props.children}
      </OrderPreview>
    );
  }

  fetch() {
    this.setState({ isLoading: true });
    Axios.post("/order-service", {
      cart: this.props.cart,
      ...this.props.order,
    })
      .then(({ data }) => {
        this.setState({ order: data });
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  order: state.order,
});

const mapDispatchToProps = dispatch => ({
  addProduct: id => {
    dispatch({ type: "ADD_TO_CART", id: id, quantity: 1 });
  },
  reduceProduct: id => {
    dispatch({ type: "EXTRACT_FROM_CART", id: id, quantity: 1 });
  },
  removeProduct: id => {
    dispatch({ type: "REMOVE_FROM_CART", id: id });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedOrderPreview);
