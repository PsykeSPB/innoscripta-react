import React from "react";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { grey } from "@material-ui/core/colors";

class OrderMini extends React.Component {
  render() {
    const styles = this.props.classes;
    const renderProd = prod => {
      return (
        <Grid item container key={prod.id} className={styles.prod}>
          <Grid item xs>
            <Typography variant="body1">{prod.name}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" className={styles.prodQuant}>
              {prod.quantity}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              className={`${styles.prodCost} ${styles.bold}`}
            >
              €{(prod.quantity * prod.price).toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
      );
    };
    const renderServ = serv => {
      return (
        <Grid item container key={serv.id} className={styles.prod}>
          <Grid item xs>
            <Typography variant="body1">{serv.name}</Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              className={`${styles.prodCost} ${styles.bold}`}
            >
              €{serv.price}
            </Typography>
          </Grid>
        </Grid>
      );
    };

    return (
      <div>
        {this.props.isLoading ? <LinearProgress /> : null}
        <div className={styles.content}>
          <Typography variant="h6" component="div">
            Your order:
          </Typography>
          <div className={styles.orderBody}>
            <Grid container direction="column">
              {this.props.products.map(renderProd)}
            </Grid>
            <Grid container direction="column">
              {this.props.services.map(renderServ)}
            </Grid>
          </div>
          <Grid container direction="column" alignItems="flex-end">
            <Grid item>
              <Typography variant="body1" className={styles.bold}>
                €{(+this.props.totalCost.EUR).toFixed(2)}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" className={styles.bold}>
                ${(+this.props.totalCost.USD).toFixed(2)}
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(theme => ({
  content: {
    padding: theme.spacing(3),
  },
  orderBody: {
    borderTop: "solid 1px rgba(0,0,0,0.3)",
    borderBottom: "solid 1px rgba(0,0,0,0.3)",
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  prod: {
    paddingTop: theme.spacing(1),
  },
  prodQuant: {
    paddingLeft: theme.spacing(1),
    color: grey[500],
  },
  prodCost: {
    paddingLeft: theme.spacing(2),
    textAlign: "right",
    minWidth: 76.78,
  },
  bold: {
    fontWeight: "bold",
  },
}))(OrderMini);
