import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';

const styles = {
  flex: {
    flex: 1,
  },
};

const AppHeader = ({ classes }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" color="inherit" textAlign="center">
        Is it International Talk Like a Pirate Day?
      </Typography>
      <div className={classes.flex} />
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(AppHeader);
