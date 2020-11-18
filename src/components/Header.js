import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <Link className="links" to="/">
              Home
            </Link>
          </IconButton>
          <div className="menu-container">
            <Link to="/students" className="links">
              {" "}
              <Typography variant="p" className={classes.title}>
                Student{" "}
              </Typography>
            </Link>
            <Link to="/teachers" className="links">
              <Typography variant="p" className={classes.title}>
                Teacher
              </Typography>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
