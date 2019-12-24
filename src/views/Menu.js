import React from "react";
import Axios from "../plugins/axios";
import { withStyles } from "@material-ui/core/styles";
import { Drawer, CircularProgress, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import OrderCard from "../components/OrderCard";
import ConnectedOrderPreview from "../components/ConnectedOrderPreview";

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
          <div className={styles.listItem} key={id}>
            <OrderCard
              id={id}
              heading={name}
              description={description}
              imgSrc={img_url}
              price={price}
            />
          </div>
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
          <div className={styles.toolbar}></div>
          <ConnectedOrderPreview heading="Your cart:" minified>
            <Button
              component={Link}
              to="/checkout"
              color="primary"
              variant="contained"
            >
              Continue
            </Button>
          </ConnectedOrderPreview>
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
  toolbar: theme.mixins.toolbar,
  drawer: {
    width: "30vw",
    minWidth: 380,
    flexShrink: 0,
  },
  drawerPaper: {
    width: "30vw",
    minWidth: 380,
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
  listItem: {
    marginBottom: theme.spacing(2),
  },
}))(Menu);
