import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  highlight: {
    color: "#008c00",
    fontWeight: "bold",
  },
}));

export default function SuccessModal(props) {
  const classes = useStyles();

  return (
    <Modal
      className={classes.modal}
      open={props.open}
      onClose={props.onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <div className={classes.paper}>
          <h2>Order confirmed!</h2>
          <p>
            Your order number is:{" "}
            <span className={classes.highlight}>{props.id}</span>. Your pizza is
            in the oven!
          </p>
        </div>
      </Fade>
    </Modal>
  );
}
