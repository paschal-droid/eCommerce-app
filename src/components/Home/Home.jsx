import React,{memo} from "react";
import "./home.css";
import useStyles from "./HomeStyles";
import { Grid, Typography, Button } from "@material-ui/core";
import * as FiIcons from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Catalog from "./Catalog";
import Design from "./Design";
import Brand from "./Brand";
import Features from "./Features";

const Home = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <>
      <div className={`section-padding container ${classes.container}`}>
        <Grid container className={classes.containerHead}>
          <Grid item xs={12} sm={12} md={8} lg={6}>
            <Typography
              className={`gradient-text ${classes.gridHeader}`}
              variant="h3"
            >
              Find your New Favourite Collection At The New Year's sales of 2022{" "}
            </Typography>
            <Button
              className={classes.gridButton}
              onClick={() => navigate("/products")}
            >
              Buy Now{" "}
              <FiIcons.FiShoppingBag
                style={{ marginLeft: "5px", fontSize: "16px" }}
              />
            </Button>
          </Grid>
        </Grid>
      </div>
      <Catalog />
      <Design />
      <Brand />
      <Features />
    </>
  );
};

export default memo(Home);
