import React, { Component } from 'react';
import { styled } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import growthIcon from '../icons/growth.png';
import artIcon from '../icons/art.png';
import healthIcon from '../icons/medicine.png';
import educationIcon from '../icons/diploma.png';
import collegeIcon from '../icons/school.png';

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


const ContentButton = styled(Button)({
  background: '#F1F1F1',
  paddingBottom: 'inherit',
  border: 'solid 10px #ffffff',
  position: 'relative',
  borderRadius: '20px',
  width: '100%',
  height: 'auto',
  "&:hover": {
    backgroundColor: "#ACACAC"
  },
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

  environmentChoice = (e) => {
    e.preventDefault()
    this.props.environmentChoice()
    this.props.nextStep()
  }

  artscultureChoice = (e) => {
    e.preventDefault()
    this.props.artscultureChoice()
    this.props.nextStep()
  }

  healthChoice = (e) => {
    e.preventDefault()
    this.props.healthChoice()
    this.props.nextStep()
  }

  educationChoice = (e) => {
    e.preventDefault()
    this.props.educationChoice()
    this.props.nextStep()
  }

  collegeChoice = (e) => {
    e.preventDefault()
    this.props.collegeChoice()
    this.props.nextStep()
  }

  render(){

      const { classes } = this.props;

    return(
    <React.Fragment>
    <div className={classes.defaultContent} style={{textAlign:"center", width:"100%"}}>
      <Typography style={{fontSize:"3.0vmin"}} color="textPrimary">
        <b>Vote for the cause you're passionate about!</b>
      </Typography>
      <Typography style={{fontSize:"2.0vmin"}} color="textPrimary">
        <b>Click these buttons below to learn more</b>
      </Typography>
    </div>
    <div style={{alignItems:"center"}}>
      <Grid container direction="column" justify="flex-start" alignItems="center" spacing={3}>
        <div style={{width:"75%", marginLeft: "10px", marginRight:"10px", paddingBottom:"2%"}}>
        {
            (this.props.clickedvote === "environment")
            ?

             <VerticalButton style={{border:"solid 10px #78be20"}} value={"environment"} onClick={this.environmentChoice}>
                <Typography style={{fontSize:"1.2rem"}}><b>Environment</b></Typography>
             </VerticalButton>
             :
              <VerticalButton style={{fontSize:"1.2rem"}} value={"environment"} onClick={this.environmentChoice}>
                <Typography style={{fontSize:"1.2rem"}}><b>Environment</b></Typography>
              </VerticalButton>
        }
        </div>
        <div style={{width:"75%", marginLeft: "10px", marginRight:"10px", paddingBottom:"2%"}}>
        <Grid style={{marginBottom:"2%"}}>
          {
            (this.props.clickedvote === "artsculture")
            ?
             <VerticalButton style={{border:"solid 10px #00a3e0"}} value="artsculture" onClick={this.artscultureChoice}>
                <Typography style={{fontSize:"1.2rem"}}><b>Arts & Community</b></Typography>
             </VerticalButton>
             :
              <VerticalButton  value="artsculture" onClick={this.artscultureChoice}>
                <Typography style={{fontSize:"1.2rem"}}><b>Arts & Community</b></Typography>
              </VerticalButton>
          }
        </Grid>
        </div>
        <div style={{width:"75%", marginLeft: "10px", marginRight:"10px", paddingBottom:"2%"}}>
        <Grid style={{marginBottom:"2%"}}>
          {
            (this.props.clickedvote === "health")
            ?
             <VerticalButton style={{border:"solid 10px #ff7f32"}} value="health" onClick={this.healthChoice}>
                <Typography style={{fontSize:"1.2rem"}}><b>Health & Welfare</b></Typography>
             </VerticalButton>
             :
              <VerticalButton  value="health" onClick={this.healthChoice}>
                <Typography style={{fontSize:"1.2rem"}}><b>Health & Welfare</b></Typography>
              </VerticalButton>
          }
        </Grid>
        </div>
        <div style={{width:"75%", marginLeft: "10px", marginRight:"10px", paddingBottom:"2%"}}>
        <Grid style={{marginBottom:"2%"}}>
        {
          (this.props.clickedvote === "education")
          ?
           <VerticalButton style={{border:"solid 10px #8c1d40"}} value="education" onClick={this.educationChoice} >
              <Typography style={{fontSize:"1.2rem"}}><b>Education & Scholarship</b></Typography>
           </VerticalButton>
           :
            <VerticalButton  value="education" onClick={this.educationChoice} >
              <Typography style={{fontSize:"1.2rem"}}><b>Education & Scholarship</b></Typography>
            </VerticalButton>
        }
        </Grid>
        </div>
        <div style={{width:"75%", marginLeft: "10px", marginRight:"10px", paddingBottom:"2%"}}>
        <Grid style={{marginBottom:"2%"}}>
        {
          (this.props.clickedvote === "collegesprograms")
          ?
           <VerticalButton style={{border:"solid 10px #5c6670"}} value="collegesprograms" onClick={this.collegeChoice}  >
              <Typography style={{fontSize:"1.2rem"}}><b>Colleges & Programs</b></Typography>
           </VerticalButton>
           :
            <VerticalButton  value="collegesprograms" onClick={this.collegeChoice} >
              <Typography style={{fontSize:"1.2rem"}}><b>Colleges & Programs</b></Typography>
            </VerticalButton>
        }
        </Grid>
      </div>
      </Grid>
      </div>
      </React.Fragment>
      // <div style={{marginTop:"20px", textAlign: "center"}}>
      // {
      //   (this.props.clickedvote === false)
      //   ?  null
      //   : <SubmitButton onClick={this.submitResults}>
      //     <Typography>
      //       <b>Submit Your Vote</b>
      //     </Typography>
      //   </SubmitButton>
      // }
      // </div>

    )
  }
}

StepDefault.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepDefault);
