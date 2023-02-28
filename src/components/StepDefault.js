import React, { Component } from 'react';
import { styled } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import firebase from './../Firebase.js'

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
  defaultContent: {
    padding: `${theme.spacing(1)}px 0 ${theme.spacing(6)}px`,
  },
});

const VerticalButton = styled(Button)({
    background: "#F1F1F1",
    padding: "2%",
    paddingBottom: "",
    border: 'solid 10px #ffffff',
    position: 'relative',
    width: '100%',
    height: 'auto',
    "&:hover": {
      backgroundColor: "#ACACAC"
    },
});

class StepDefault extends Component {

  submitResults = (e) => {

    e.preventDefault()
    this.props.skipStep()
    console.log('you voted for:');
    console.log(this.props.clickedvote);
    console.log('now increment the value');

    const db = firebase.firestore();

    const increment = firebase.firestore.FieldValue.increment(1);

    const voteIncrementRef = db.collection('causes').doc(this.props.clickedvote);

    voteIncrementRef.update({ votes: increment });

  }

  choiceOfUser = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  areaofgreatestneedChoice = (e) => {
    e.preventDefault()
    this.props.areaofgreatestneedChoice()
    this.props.nextStep()
  }

  k12supportChoice = (e) => {
    e.preventDefault()
    this.props.k12supportChoice()
    this.props.nextStep()
  }

  communityemergencysupportChoice = (e) => {
    e.preventDefault()
    this.props.communityemergencysupportChoice()
    this.props.nextStep()
  }

  individualemergencysupportChoice = (e) => {
    e.preventDefault()
    this.props.individualemergencysupportChoice()
    this.props.nextStep()
  }

  researchsupportChoice = (e) => {
    e.preventDefault()
    this.props.researchsupportChoice()
    this.props.nextStep()
  }

  render(){

      const { classes } = this.props;

    return(
    <React.Fragment>
    <div className={classes.defaultContent} style={{textAlign:"center", width:"100%"}}>
      <Typography style={{fontSize:"4.5rem"}} color="textPrimary">
        <b>Your vote matters!</b>
      </Typography>
      <Typography style={{paddingTop: "3%", fontSize:"1.5rem"}} color="textPrimary">
        Participate in Sun Devil Giving Day by VOTING for the program you care about the most at Arizona State University.
        Your vote makes a difference: Faithful ASU donor Desert Financial Credit Union will give $1 per vote up to $5,000 in honor of Sun Devil Giving Day.
        <b>Vote any time between March 10-16</b>.
      </Typography>      
      <Typography style={{paddingTop: "3%", fontSize:"2.5rem"}} color="textPrimary">
        <b>Click these buttons below to learn more</b>
      </Typography>
    </div>
    <div style={{alignItems:"center"}}>
      <Grid container direction="column" justify="flex-start" alignItems="center" spacing={3}>

        <div style={{width:"75%", marginLeft: "10px", marginRight:"10px", paddingBottom:"2%"}}>
        <Grid style={{marginBottom:"2%"}}>
        {
            (this.props.clickedvote === "areaofgreatestneed")
            ?

             <VerticalButton style={{border:"solid 10px #78be20"}} value={"areaofgreatestneed"} onClick={this.areaofgreatestneedChoice}>
                <Typography variant="h5"><b>ASU Counseling Services</b></Typography>
             </VerticalButton>
             :
              <VerticalButton value={"areaofgreatestneed"} onClick={this.areaofgreatestneedChoice}>
                <Typography variant="h5"><b>ASU Counseling Services</b></Typography>
              </VerticalButton>
        }
        </Grid>
        </div>
        <div style={{width:"75%", marginLeft: "10px", marginRight:"10px", paddingBottom:"2%"}}>
        <Grid style={{marginBottom:"2%"}}>
          {
            (this.props.clickedvote === "k12support")
            ?
             <VerticalButton style={{border:"solid 10px #00a3e0"}} value="k12support" onClick={this.k12supportChoice}>
                <Typography variant="h5"><b>Pitchfork Pantry</b></Typography>
             </VerticalButton>
             :
              <VerticalButton  value="k12support" onClick={this.k12supportChoice}>
                <Typography variant="h5"><b>Pitchfork Pantry</b></Typography>
              </VerticalButton>
          }
        </Grid>
        </div>
        <div style={{width:"75%", marginLeft: "10px", marginRight:"10px", paddingBottom:"2%"}}>
        <Grid style={{marginBottom:"2%"}}>
          {
            (this.props.clickedvote === "communityemergencysupport")
            ?
             <VerticalButton style={{border:"solid 10px #ff7f32"}} value="communityemergencysupport" onClick={this.communityemergencysupportChoice}>
                <Typography variant="h5"><b>Student Crisis Fund</b></Typography>
             </VerticalButton>
             :
              <VerticalButton  value="communityemergencysupport" onClick={this.communityemergencysupportChoice}>
                <Typography variant="h5"><b>Student Crisis Fund</b></Typography>
              </VerticalButton>
          }
        </Grid>
        </div>
        <div style={{width:"75%", marginLeft: "10px", marginRight:"10px", paddingBottom:"2%"}}>
        <Grid style={{marginBottom:"2%"}}>
        {
          (this.props.clickedvote === "individualemergencysupport")
          ?
           <VerticalButton style={{border:"solid 10px #8c1d40"}} value="individualemergencysupport" onClick={this.individualemergencysupportChoice} >
              <Typography variant="h5"><b>Project Humanities</b></Typography>
           </VerticalButton>
           :
            <VerticalButton  value="individualemergencysupport" onClick={this.individualemergencysupportChoice} >
              <Typography variant="h5"><b>Project Humanities</b></Typography>
            </VerticalButton>
        }
        </Grid>
        </div>
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
