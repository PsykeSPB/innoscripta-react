import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import OrderCard from "../components/OrderCard";
import Cart from "../components/Cart";

const useStyles = makeStyles(theme => ({
  menu: {
    display: "flex",
  },
  drawer: {
    width: 320,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 320,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Menu() {
  const styles = useStyles();

  return (
    <div className={styles.menu}>
      <div className={styles.content}>
        <OrderCard
          id={12352}
          imgSrc="https://cdn3.iconfinder.com/data/icons/fastfood-13/64/Pizza-fastfood-food-cheese_-512.png"
          heading="Pizza 1"
          price="5.25"
          description="Tasty pizza!"
        />
        <OrderCard
          id={896481}
          imgSrc="https://cdn3.iconfinder.com/data/icons/fastfood-13/64/Pizza-fastfood-food-cheese_-512.png"
          heading="Pizza 2"
          price="7.14"
          description="Another Tasty pizza!"
        />
      </div>
      <Drawer
        className={styles.drawer}
        classes={{ paper: styles.drawerPaper }}
        anchor="right"
        variant="permanent"
      >
        <Cart />
      </Drawer>
    </div>
  );
}
