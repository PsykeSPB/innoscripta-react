import React from "react";
import Axios from "../plugins/axios";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CircularProgress from "@material-ui/core/CircularProgress";
import OrderCard from "../components/OrderCard";
import OrderDataWrapper from "../components/OrderDataWrapper";
import OrderMini from "../components/OrderMini";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      items: [],
    };
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    const styles = this.props.classes;
    const loading = (
      <div className={styles.loadingWrapper}>
        <CircularProgress color="primary" />
      </div>
    );
    const list = this.state.items.map(
      ({ id, name, description, img_url, price }) => {
        return (
          <OrderCard
            key={id}
            id={id}
            heading={name}
            description={description}
            imgSrc={img_url}
            price={price}
          />
        );
      }
    );

    return (
      <div className={styles.menu}>
        <div className={styles.content}>
          {this.state.isLoading ? loading : list}
        </div>
        <Drawer
          className={styles.drawer}
          classes={{ paper: styles.drawerPaper }}
          anchor="right"
          variant="permanent"
        >
          <OrderDataWrapper>
            <OrderMini />
          </OrderDataWrapper>
        </Drawer>
      </div>
    );
  }

  fetch() {
    this.setState({ isLoading: true });
    Axios.get("/products")
      .then(({ data }) => {
        this.setState({ items: data.data });
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }
}

export default withStyles(theme => ({
  menu: {
    display: "flex",
  },
  drawer: {
    width: "25vw",
    minWidth: 320,
    flexShrink: 0,
  },
  drawerPaper: {
    width: "25vw",
    minWidth: 320,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  loadingWrapper: {
    display: "flex",
    width: "100%",
    height: "90vh",
    alignItems: "center",
    justifyContent: "center",
  },
}))(Menu);
