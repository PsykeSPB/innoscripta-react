import React from "react";
import { connect } from "react-redux";
import DeliveryForm from "./DeliveryForm";

class ConnectedDeliveryForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = payload => {
    this.props.setOrder(payload);
    this.props.onSubmit();
  };

  render() {
    return (
      <DeliveryForm
        address={this.props.order.address}
        phone={this.props.order.phone}
        comment={this.props.order.comment}
        onCancel={this.props.onCancel}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  order: state.order,
});

const mapDispatchToProps = dispatch => ({
  setOrder: ({ address, phone, comment }) => {
    dispatch({
      type: "SET_ORDER",
      address: address,
      phone: phone,
      comment: comment,
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedDeliveryForm);
