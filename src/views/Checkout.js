import React from "react";
import { Stepper, Step, StepLabel, Button, Box } from "@material-ui/core";
import ConnectedOrderPreview from "../components/ConnectedOrderPreview";
import ConnectedDeliveryForm from "../components/ConnectedDeliveryForm";
import ConnectedSubmitOrder from "../components/ConnectedSubmitOrder";
import SuccessModal from "../components/SuccessModal";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      isSuccess: false,
      orderId: "",
    };
  }

  handleNext = () => {
    if (this.state.activeStep < 2) {
      this.setState({ activeStep: this.state.activeStep + 1 });
    }
  };

  handelReturn = () => {
    if (this.state.activeStep > 0) {
      this.setState({ activeStep: this.state.activeStep - 1 });
    }
  };

  handleSuccess = payload => {
    this.setState({
      isSuccess: true,
      orderId: payload.id,
    });
  };

  handleError = payload => {
    console.error(payload);
  };

  render() {
    const renderCartConfirm = (
      <ConnectedOrderPreview heading="Confirm your cart">
        <Button color="primary" onClick={this.handleNext} variant="contained">
          Next
        </Button>
      </ConnectedOrderPreview>
    );
    const renderDeliveryForm = (
      <ConnectedDeliveryForm
        onCancel={this.handelReturn}
        onSubmit={this.handleNext}
      />
    );
    const renderSubmitForm = (
      <ConnectedOrderPreview heading="Submit your order">
        <Button onClick={this.handelReturn} variant="contained">
          Return
        </Button>
        <Box ml={2}>
          <ConnectedSubmitOrder
            onSuccess={this.handleSuccess}
            onError={this.handleError}
          />
        </Box>
      </ConnectedOrderPreview>
    );

    const renderBody = i => {
      switch (i) {
        case 0:
          return renderCartConfirm;
        case 1:
          return renderDeliveryForm;
        case 2:
          return renderSubmitForm;
      }
    };

    return (
      <div>
        <Stepper activeStep={this.state.activeStep} alternativeLabel>
          <Step>
            <StepLabel>Confirm cart</StepLabel>
          </Step>
          <Step>
            <StepLabel>Add delivery info</StepLabel>
          </Step>
          <Step>
            <StepLabel>Submit order</StepLabel>
          </Step>
        </Stepper>
        <Box m={3}>{renderBody(this.state.activeStep)}</Box>
        <SuccessModal
          open={this.state.isSuccess}
          id={this.state.orderId}
          onClose={() => null}
        />
      </div>
    );
  }
}

export default Checkout;
