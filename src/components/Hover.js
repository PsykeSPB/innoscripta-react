import React from "react";
import { withStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";

class Hover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false,
    };
  }

  toggleHover() {
    this.setState({
      isHover: !this.state.isHover,
    });
  }

  render() {
    const styles = this.props.classes;
    return (
      <Box
        className={styles.wrapper}
        onMouseEnter={this.toggleHover.bind(this)}
        onMouseLeave={this.toggleHover.bind(this)}
      >
        <Box className={styles.content}>{this.props.children}</Box>
        {this.state.isHover ? (
          <Box className={`${styles.overlay} ${styles[this.props.position]}`}>
            {this.props.overlay}
          </Box>
        ) : null}
      </Box>
    );
  }
}

export default withStyles(theme => ({
  wrapper: {
    width: "100%",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    zIndex: 2,
  },
  top: {
    top: 0,
    left: "50%",
    transform: "translate(-50%, -100%)",
  },
  bottom: {
    bottom: 0,
    left: "50%",
    transform: "translate(-50%, 100%)",
  },
  center: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  left: {
    top: "50%",
    left: 0,
    transform: "translate(-100%, -50%)",
  },
  right: {
    top: "50%",
    right: 0,
    transform: "translate(100%, -50%)",
  },
  overlay: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
}))(Hover);
