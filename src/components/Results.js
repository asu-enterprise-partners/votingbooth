import React, { Component } from 'react';
import { styled } from '@material-ui/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';

import { css } from '@emotion/core'

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
  recapSection: {
    borderColor: '#8c1d40',
    borderStyle: 'dotted',
    borderWidth: '1px',
    padding: '10px'
  },
  veCard: {
    backgroundColor: '#ffc627',
  },
  fundName: {
    fontWeight: 900
  },
  subFundName: {
    fontWeight: 900
  },
  moreInfoLink: {
    fontWeight: 900,
    color: 'black'
  }
});

const ASUButton = styled(Button)({
  background: 'black',
  border: 0,
  borderRadius: 10,
  color: '#ffc627',
  height: 48,
  padding: '0 30px',
  marginRight: '10px',
  "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#353535"
  }
});

const ASUButtonEdit = styled(Button)({
  background: 'black',
  border: 0,
  borderRadius: 10,
  color: '#ffc627',
  height: 24,
  padding: '0 20px',
  marginRight: '10px',
  "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#353535"
  }
});

// const ASUButtonSmall = styled(Button)({
//   background: 'black',
//   border: 0,
//   borderRadius: 10,
//   color: '#ffc627',
//   height: 24,
//   padding: '0 30px',
//   "&:hover": {
//       backgroundColor: "#353535"
//   }
// });

class Results extends Component{
    render(){

        return(
          <React.Fragment>



          </React.Fragment>

        )
    }
}

Results.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Results);
