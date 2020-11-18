import React from "react";
import Header from "../components/Header";
import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 400,
    textAlign: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,
  },
});

const HomePage = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className="card-container">
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Welcome <br />
              to
              <br /> Dashboard
            </Typography>
            <Typography variant="h5" component="h2"></Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
