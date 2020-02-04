import React, { Component } from 'react';
import { styled } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import NatureIcon from '@material-ui/icons/Nature';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    margin: 0,
    padding: '25px',
  },
  closeButton: {
    position: 'absolute',
    right: '25px',
    top: '25px',
    color: theme.palette.grey[500],
  },
});
const ContentButton = styled(Button)({
  background: '#F1F1F1',
  border: 'solid 10px #ffffff',
  borderRadius: '20px',
  height: '200px',
  width: '200px',
  padding: '50px 80px',
  "&:hover": {
    backgroundColor: "#ACACAC"
  },
  fontSize: '110%',
});

const SubmitButton = styled(Button)({
  background: '#8c1d40',
  color: '#ffffff',
  border: '0',
  borderRadius: '40px',
  height: 48,
  padding: '0 10%',
  "&:hover": {
    backgroundColor: "#353535"
  },
});

class StepDefault extends Component {
  choiceOfUser = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }
  render(){
    return(
    <React.Fragment>
    <div >
    <Grid container spacing ={8} justify = "center">
      <Grid item xs={4} align = "center" >
        <ContentButton onClick={this.choiceOfUser}  >
        <Typography variant="h6" gutterBottom  >
          <b>Environment</b>
        </Typography>
        </ContentButton>
      </Grid>
      <Grid item xs={4} align = "center">
        <ContentButton onClick={this.choiceOfUser}>
        <Typography variant="h6" gutterBottom  >
          <b>Arts & Culture</b>
        </Typography>
        </ContentButton>
      </Grid>
      <Grid item xs={4} align = "center">
        <ContentButton onClick={this.choiceOfUser}>
        <Typography variant="h6" gutterBottom  >
          <b>Health</b>
        </Typography>
        </ContentButton>
      </Grid>
    </Grid>
    <Grid container spacing ={8} justify = "center">
      <Grid item xs={4} align = "center">
        <ContentButton onClick={this.choiceOfUser}>
        <Typography variant="h6" gutterBottom  >
          <b>Education</b>
        </Typography>
        </ContentButton>
      </Grid>
      <Grid item xs={4} align = "center">
        <ContentButton onClick={this.choiceOfUser}>
        <Typography variant="h6" gutterBottom  >
          <b>Colleges & Programs</b>
        </Typography>
        </ContentButton>
      </Grid>
    </Grid>
    <Grid p={1} align = "center">
    <SubmitButton>
    <Typography variant="h6">
      <b>Submit</b>
    </Typography>
    </SubmitButton>
    </Grid>
    </div>
    </React.Fragment>
    )
  }
}

StepDefault.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepDefault);
