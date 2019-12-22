import React from "react";
import { connect } from "react-redux";
import Axios from "../plugins/axios";

class OrderDataWrapper extends React.Component {
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

  componentDidUpdate(prevProps) {
    if (prevProps.cart !== this.props.cart) {
      this.fetch();
    }
  }

  render() {
    return (
      <div>
        {React.Children.map(this.props.children, child =>
          React.cloneElement(child, {
            ...child.props,
            isLoading: this.state.isLoading,
            products: this.state.order.products,
            services: this.state.order.services,
            totalCost: this.state.order.total_cost,
          })
        )}
      </div>
    );
  }

  fetch() {
    this.setState({ isLoading: true });
    Axios.post("/order-service", {
      cart: this.props.cart,
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
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(OrderDataWrapper);
