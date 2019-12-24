import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
  },
  img: {
    width: 180,
    maxHeight: 180,
  },
}));

const useStylesMini = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
  },
  imgWrapper: {
    display: "none",
  },
  descWrapper: {
    display: "none",
  },
}));

export default function ProductCard(props) {
  const styles = props.minified ? useStylesMini() : useStyles();
  return (
    <Paper className={styles.paper} elevation={props.minified ? 0 : 1}>
      <Grid container spacing={2} alignItems="stretch">
        <Grid item className={styles.imgWrapper}>
          <img className={styles.img} src={props.imgSrc} />
        </Grid>
        <Grid item xs container direction="column">
          <Grid item container>
            <Grid item xs>
              <Typography
                variant={props.minified ? "subtitle2" : "h6"}
                component="div"
              >
                {props.heading}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant={props.minified ? "subtitle2" : "h6"}
                component="div"
              >
                €{props.price}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs className={styles.descWrapper}>
            <Typography variant="body1">{props.description}</Typography>
          </Grid>
          <Grid item container justify="flex-end">
            {props.children}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
