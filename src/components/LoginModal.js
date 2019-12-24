import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Backdrop, Fade, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    position: "relative",
    outline: "none",
  },
  img: {
    position: "absolute",
    outline: "none",
    top: -53,
    right: -25,
    width: 120,
    transform: "rotate(10Deg)",
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} color="inherit">
        Login
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Sorry</h2>
            <p id="transition-modal-description">
              New Year is coming fast and we've got a lot to do, thats <br />
              why account service is currently unavailable. <br /> <br />
              However, if you are looking for the list of orders,
              <br /> we have got a{" "}
              <a
                href={`${process.env.REACT_APP_API_URL}/orders`}
                target="_blanck"
              >
                little present
              </a>{" "}
              for you. <br />
              <br />
              Happy New Year and Merry Christmas!
            </p>
            <img
              className={classes.img}
              src="http://www.pngall.com/wp-content/uploads/2016/05/Christmas-Hat-Download-PNG.png"
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
