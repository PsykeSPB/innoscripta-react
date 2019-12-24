import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, Paper, Grid, LinearProgress } from "@material-ui/core";
import ProductCard from "./ProductCard";
import Hover from "./Hover";
import QuantityControll from "./QuantityControll";

class OrderPreview extends React.Component {
  render() {
    const styles = this.props.classes;

    const renderProductItem = prod => (
      <ProductCard
        key={prod.id}
        heading={prod.name}
        description={prod.description}
        price={(prod.price * prod.quantity).toFixed(2)}
        imgSrc={prod.img_url}
        minified={this.props.minified}
      >
        <Grid container wrap="nowrap">
          <Grid item xs className={styles.alignLeft}>
            €{(+prod.price).toFixed(2)} x
          </Grid>
          <Grid item>
            <Hover
              position="center"
              overlay={
                <QuantityControll
                  value={prod.quantity}
                  onAdd={() => this.props.addProduct(prod.id)}
                  onReduce={() => this.props.reduceProduct(prod.id)}
                  onRemove={() => this.props.removeProduct(prod.id)}
                />
              }
            >
              {prod.quantity}
            </Hover>
          </Grid>
        </Grid>
      </ProductCard>
    );

    const renderServiceItem = serv => (
      <ProductCard
        key={serv.id}
        heading={serv.name}
        description={serv.description}
        price={serv.price}
        imgSrc={serv.img_url}
      />
    );

    const renderProducts = this.props.products.map(renderProductItem);
    const renderServices = this.props.services.map(renderServiceItem);
    const renderTotals = (
      <Grid
        item
        container
        direction="column"
        alignItems="flex-end"
        className={styles.totals}
      >
        <Grid item>
          <Typography variant="h6" component="div">
            €{(+this.props.totalCost.EUR).toFixed(2)}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" component="div">
            ${(+this.props.totalCost.USD).toFixed(2)}
          </Typography>
        </Grid>
      </Grid>
    );

    return (
      <Grid container justify="center" className={styles.root}>
        <Paper className={styles.paper} elevation={this.props.minified ? 0 : 1}>
          <Grid container direction="column">
            <Grid item className={styles.heading}>
              <Typography variant="h6" component="div">
                {this.props.heading}
              </Typography>
            </Grid>
            {this.props.isLoading ? <LinearProgress /> : null}
            {renderProducts}
            {renderServices}
            {renderTotals}
            <Grid item container justify="flex-end" className={styles.action}>
              {this.props.children}
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
    maxWidth: 840,
  },
  heading: {
    paddingBottom: theme.spacing(2),
    borderBottom: "1px solid rgba(0,0,0,0.4)",
  },
  item: {},
  totals: {
    paddingTop: theme.spacing(2),
    borderTop: "1px solid rgba(0,0,0,0.4)",
  },
  action: {
    paddingTop: theme.spacing(2),
  },
  alignLeft: {
    textAlign: "right",
    paddingRight: theme.spacing(1),
  },
}))(OrderPreview);
