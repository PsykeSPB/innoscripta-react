import React from "react";
import { withStyles, ButtonGroup, Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import CloseIcon from "@material-ui/icons/Close";

class QuantityControll extends React.Component {
  render() {
    const styles = this.props.classes;
    return (
      <ButtonGroup
        orientation="vertical"
        color="primary"
        size="small"
        className={styles.wrapper}
      >
        <Button>
          <AddIcon onClick={this.props.onAdd}></AddIcon>
        </Button>
        <Button disabled>{this.props.value}</Button>
        {this.props.value > 1 ? (
          <Button>
            <RemoveIcon onClick={this.props.onReduce}></RemoveIcon>
          </Button>
        ) : (
          <Button color="secondary">
            <CloseIcon onClick={this.props.onRemove}></CloseIcon>
          </Button>
        )}
      </ButtonGroup>
    );
  }
}

export default withStyles(theme => ({
  wrapper: {
    background: "rgba(255,255,255,1)",
  },
}))(QuantityControll);
