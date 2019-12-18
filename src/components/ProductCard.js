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

export default function ProductCard(props) {
  const cls = useStyles();
  return (
    <Paper className={cls.paper}>
      <Grid container spacing={2} alignItems="stretch">
        <Grid item>
          <img className={cls.img} src={props.imgSrc} />
        </Grid>
        <Grid item xs container direction="column">
          <Grid item container>
            <Grid item xs>
              <Typography variant="h6" component="div">
                {props.heading}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" component="div">
                ${props.price}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs>
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
