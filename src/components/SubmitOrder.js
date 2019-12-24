import React from "react";
import { Button } from "@material-ui/core";

class SubmitOrder extends React.Component {
  render() {
    return (
      <Button onClick={this.props.onSubmit} variant="contained" color="primary">
        Submit
      </Button>
    );
  }
}

export default SubmitOrder;
