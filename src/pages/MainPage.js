import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import {
  withStyles,
  Typography,
} from '@material-ui/core';
import { compose } from 'recompose';
import pirateShip from './pirate.jpg';
import env from "@beam-australia/react-env";

import ErrorSnackbar from '../components/ErrorSnackbar';

console.log(`Environment message: ${env("PIRATE_MESSAGE")}`);

const styles = theme => ({
  list: {
    marginTop: theme.spacing(2),
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  },
});


class MainPage extends Component {
  state = {
    loading: true,
    list: [],
    error: null,
  };

  render() {
    return (
      <Fragment>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
          <div>
            <img style={{width: '500px'}} src={pirateShip} alt="Pirate Ship"/>
            <Typography variant="h1" align='center'>{env("PIRATE_MESSAGE")}</Typography>
          </div>
        </div>
        {this.state.error && (
          <ErrorSnackbar
            onClose={() => this.setState({ error: null })}
            message={this.state.error.message}
          />
        )}
      </Fragment>
    );
  }
}

export default compose(
  withRouter,
  withStyles(styles),
)(MainPage);
