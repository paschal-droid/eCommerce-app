import {Typography, Grid, Button } from "@material-ui/core"
import {catalogs} from "./imports"
import useStyles from "./HomeStyles.js"
import * as FiIcons from "react-icons/fi"

const Catalog = () => {
    const classes = useStyles();
    return (
      <div className={`section-margin ${classes.outfitGrid}`}>
        <Typography
          variant="h5"
          className="gradient-text"
          style={{ fontWeight: "700" }}
          gutterBottom
        >
          Top Products for you!
        </Typography>
        <div className={classes.toolbar} />
        <Grid container spacing={3}>
          {catalogs.map((item, i) => (
            <Grid
              className={classes.catalogContainer}
              key={i}
              item
              lg={3}
              md={4}
              sm={6}
              xs={12}
            >
              <div className={classes.catalogImageContainer}>
                <img
                  className={classes.catalogImage}
                  src={item.image}
                  alt="product images"
                />
              </div>
              <Typography
                className={classes.productTitle}
                variant="body1"
                gutterBottom
              >
                {item.name}
              </Typography>
              <Typography
                className={classes.productCaption}
                variant="caption"
                gutterBottom
              >
                {item.desc}
              </Typography>
              <br></br>
              <Button className={classes.productButton}>
                View Categories{" "}
                <FiIcons.FiArrowRightCircle
                  style={{ marginLeft: "10px" }}
                  fontSize={20}
                />
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  };

export default Catalog