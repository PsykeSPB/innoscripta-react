import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

class DeliveryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      address: "",
      comment: "",
      errors: {
        phone: undefined,
        address: undefined,
      },
    };
  }

  handlePhone = e => {
    const { value } = e.target;
    if (/^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g.test(value)) {
      this.setState({
        phone: value.replace(/[^\d\+]/g, ""),
        errors: {
          phone: undefined,
        },
      });
    } else {
      this.setState({
        phone: "",
        errors: {
          ...this.state.errors,
          phone: "Invalid phone number",
        },
      });
    }
  };

  handleAddress = e => {
    const { value } = e.target;
    if (/^[a-z0-9\'\.\-\s\,]{8,30}$/i.test(value)) {
      this.setState({
        address: value,
        errors: {
          address: undefined,
        },
      });
    } else {
      this.setState({
        address: "",
        errors: {
          ...this.state.errors,
          address: "Invalid address",
        },
      });
    }
  };

  handleComment = e => {
    const { value } = e.target;
    this.setState({
      comment: value,
    });
  };

  isSubmitDisabled = () => this.state.address === "" || this.state.phone === "";

  render() {
    const styles = this.props.classes;
    return (
      <Grid container className={styles.root} justify="center">
        <Paper className={styles.paper}>
          <Grid container direction="column">
            <Grid item className={styles.heading}>
              <Typography variant="h5" component="div">
                Delivery info
              </Typography>
              <Typography variant="subtitle1" component="div">
                Please, fill in the delivery info for your order.
              </Typography>
            </Grid>
            <Grid item className={styles.item}>
              <TextField
                error={this.state.errors.phone !== undefined}
                required
                label="Phone number"
                type="phone"
                variant="outlined"
                helperText={
                  this.state.errors.phone ? this.state.errors.phone : ""
                }
                defaultValue={this.props.phone}
                onBlur={this.handlePhone}
                fullWidth
              ></TextField>
            </Grid>
            <Grid item className={styles.item}>
              <TextField
                error={this.state.errors.address !== undefined}
                required
                label="Address"
                variant="outlined"
                helperText={
                  this.state.errors.address ? this.state.errors.address : ""
                }
                defaultValue={this.props.address}
                onBlur={this.handleAddress}
                fullWidth
              ></TextField>
            </Grid>
            <Grid item className={styles.item}>
              <TextField
                label="Comment"
                multiline
                rows="4"
                variant="outlined"
                defaultValue={this.props.comment}
                onBlur={this.handleComment}
                fullWidth
              />
            </Grid>
            <Grid item container justify="flex-end" className={styles.item}>
              <Grid item className={styles.action}>
                <Button onClick={this.props.onCancel} variant="contained">
                  Cancel
                </Button>
              </Grid>
              <Grid item className={styles.action}>
                <Button
                  onClick={() => this.props.onSubmit(this.state)}
                  disabled={this.isSubmitDisabled()}
                  color="primary"
                  variant="contained"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(theme => ({
  root: {
    width: "100%",
  },
  paper: {
    padding: theme.spacing(3),
    width: "100%",
    maxWidth: 420,
  },
  heading: {
    paddingBottom: theme.spacing(2),
    borderBottom: "1px solid rgba(0,0,0,0.4)",
  },
  item: {
    paddingTop: theme.spacing(2),
  },
  action: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
}))(DeliveryForm);
