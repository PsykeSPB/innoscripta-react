import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeliveryForm from "../components/DeliveryForm";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
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

  render() {
    const renderCartConfirm = <div>Cart confirmation</div>;
    const renderDeliveryForm = <DeliveryForm></DeliveryForm>;
    const renderSubmitForm = <div>Submit order Form</div>;

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
            <StepLabel>Confirm your cart</StepLabel>
          </Step>
          <Step>
            <StepLabel>Add delivery info</StepLabel>
          </Step>
          <Step>
            <StepLabel>Confirm order</StepLabel>
          </Step>
        </Stepper>
        {renderBody(this.state.activeStep)}
      </div>
    );
  }
}

export default Checkout;
