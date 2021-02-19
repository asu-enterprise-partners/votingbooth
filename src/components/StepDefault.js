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
    padding: `${theme.spacing.unit * 1}px 0 ${theme.spacing.unit * 6}px`,
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
      <Typography style={{fontSize:"5.5vmin"}} color="textPrimary">
        <b>Vote for the cause you're <br></br> passionate about!</b>
      </Typography>
      <Typography style={{paddingTop: "3%", fontSize:"3.5vmin"}} color="textPrimary">
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
                <Typography variant="h5"><b>Protecting the planet</b></Typography>
             </VerticalButton>
             :
              <VerticalButton value={"areaofgreatestneed"} onClick={this.areaofgreatestneedChoice}>
                <Typography variant="h5"><b>Protecting the planet</b></Typography>
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
                <Typography variant="h5"><b>Conducting research for the public good</b></Typography>
             </VerticalButton>
             :
              <VerticalButton  value="k12support" onClick={this.k12supportChoice}>
                <Typography variant="h5"><b>Conducting research for the public good</b></Typography>
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
                <Typography variant="h5"><b>Advancing student access</b></Typography>
             </VerticalButton>
             :
              <VerticalButton  value="communityemergencysupport" onClick={this.communityemergencysupportChoice}>
                <Typography variant="h5"><b>Advancing student access</b></Typography>
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
              <Typography variant="h5"><b>Serving our community</b></Typography>
           </VerticalButton>
           :
            <VerticalButton  value="individualemergencysupport" onClick={this.individualemergencysupportChoice} >
              <Typography variant="h5"><b>Serving our community</b></Typography>
            </VerticalButton>
        }
        </Grid>
        </div>
        <div style={{width:"75%", marginLeft: "10px", marginRight:"10px", paddingBottom:"2%"}}>
        <Grid style={{marginBottom:"2%"}}>
        {
          (this.props.clickedvote === "researchsupport")
          ?
           <VerticalButton style={{border:"solid 10px #5c6670"}} value="researchsupport" onClick={this.researchsupportChoice}  >
              <Typography variant="h5"><b>Creating equity in higher education</b></Typography>
           </VerticalButton>
           :
            <VerticalButton  value="researchsupport" onClick={this.researchsupportChoice} >
              <Typography variant="h5"><b>Creating equity in higher education</b></Typography>
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
