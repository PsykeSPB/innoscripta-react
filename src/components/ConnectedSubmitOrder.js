import React from "react";
import Axios from "../plugins/axios";
import { connect } from "react-redux";
import SubmitOrder from "./SubmitOrder";

class ConnectedSubmitOrder extends React.Component {
  handleSubmit = () => {
    Axios.put("/order-service", {
      cart: this.props.cart,
      ...this.props.order,
    })
      .then(({ data }) => {
        this.props.onSuccess(data);
      })
      .catch(err => {
        this.props.onError(err);
      });
  };

  render() {
    return <SubmitOrder onSubmit={this.handleSubmit} />;
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  order: state.order,
});

export default connect(mapStateToProps)(ConnectedSubmitOrder);
