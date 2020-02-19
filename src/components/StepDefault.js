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
});

const ContentButton = styled(Button)({
  background: '#F1F1F1',
  border: 'solid 10px #ffffff',
  position: 'relative',
  borderRadius: '20px',
  width: '100%',
  maxWidth: '300px',
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

    return(
    <React.Fragment>
    <div>
    <Grid container spacing={8} style={{padding:'5%'}} alignItems = "center" justify = "center">
      <Grid item xs={4} style={{padding:'20px', marginBottom:'1%'}} align = "center">
      {
        (this.props.clickedvote === "environment")
        ?
            <ContentButton style={{border:"solid 10px #78be20"}} value={"environment"} onClick={this.environmentChoice} >
            <Grid direction="column">
              <Grid justify = "flex-end">
                <Typography style={{fontSize:"3vmin"}} >
                info
                </Typography>
              </Grid>
              <Grid alignItems = "center">
                <img alt="alt tag description goes here" style={{height:"auto", width:"100%", maxWidth:"64px", padding:"5px"}} src={growthIcon}/>
              </Grid>
              <Grid alignItems = "center">
                <Typography style={{fontSize:"1.6vmin", lineHeight:"1.6vmin"}} >
                  <b>Environment</b>
                  </Typography>
              </Grid>
            </Grid>
            </ContentButton>
        :
        <ContentButton value={"environment"} onClick={this.environmentChoice} >
        <Grid direction="column">
        <Grid justify = "flex-end">
          <Typography style={{fontSize:"3vmin"}} >
          info
          </Typography>
        </Grid>
          <Grid alignItems = "center">
            <img alt="alt tag description goes here" style={{height:"auto", width:"100%", maxWidth:"64px", padding:"5px"}} src={growthIcon}/>
          </Grid>
          <Grid alignItems = "center">
            <Typography style={{fontSize:"1.6vmin", lineHeight:"1.6vmin"}}  >
              <b>Environment</b>
              </Typography>
          </Grid>
        </Grid>
        </ContentButton>
      }
      </Grid>
      <Grid item xs={4} style={{padding:'20px', marginBottom:'1%'}}  align = "center">
      {
        (this.props.clickedvote === "artsculture")
        ?
            <ContentButton style={{border:"solid 10px #00a3e0"}} value="artsculture" onClick={this.artscultureChoice} >

            <Grid direction="column">
            <Grid justify = "flex-end">
              <Typography style={{fontSize:"3vmin"}} >
              info
              </Typography>
            </Grid>
              <Grid alignItems = "center">
                <img alt="alt tag description goes here" style={{height:"auto", width:"100%", maxWidth:"64px", padding:"5px"}} src={artIcon}/>
              </Grid>
              <Grid alignItems = "center">
                <Typography style={{fontSize:"1.6vmin", lineHeight:"1.6vmin"}}  >
                  <b>Arts & Culture</b>
                  </Typography>
              </Grid>
            </Grid>
            </ContentButton>
        :
        <ContentButton value="artsculture" onClick={this.artscultureChoice} >

        <Grid direction="column">
        <Grid justify = "flex-end">
          <Typography style={{fontSize:"3vmin"}} >
          info
          </Typography>
        </Grid>
          <Grid alignItems = "center">
            <img alt="alt tag description goes here" style={{height:"auto", width:"100%", maxWidth:"64px", padding:"5px"}} src={artIcon}/>
          </Grid>
          <Grid alignItems = "center">
            <Typography style={{fontSize:"1.6vmin", lineHeight:"1.6vmin"}}  >
              <b>Arts & Culture</b>
              </Typography>
          </Grid>
        </Grid>
        </ContentButton>
      }
      </Grid>
    <Grid item xs={4} style={{padding:'20px', marginBottom:'1%'}}  align = "center">
      {
        (this.props.clickedvote === "health")
        ?
            <ContentButton style={{border:"solid 10px #ff7f32"}} value="health" onClick={this.healthChoice} >
            <Grid direction="column">
            <Grid justify = "flex-end">
              <Typography style={{fontSize:"3vmin"}} >
              info
              </Typography>
            </Grid>
              <Grid alignItems = "center">
                <img alt="alt tag description goes here" style={{height:"auto", width:"100%", maxWidth:"64px", padding:"5px"}} src={healthIcon}/>
              </Grid>
              <Grid alignItems = "center">
                <Typography variant="body1" style={{fontSize:"1.6vmin", lineHeight:"1.6vmin"}}  >
                  <b>Health</b>
                  </Typography>
              </Grid>
            </Grid>
            </ContentButton>
        :
        <ContentButton value="health" onClick={this.healthChoice} >
        <Grid direction="column">
        <Grid justify = "flex-end">
          <Typography style={{fontSize:"3vmin"}} >
          info
          </Typography>
        </Grid>
          <Grid alignItems = "center">
            <img alt="alt tag description goes here" style={{height:"auto", width:"100%", maxWidth:"64px", padding:"5px"}} src={healthIcon}/>
          </Grid>
          <Grid alignItems = "center">
            <Typography variant="body1" style={{fontSize:"1.6vmin", lineHeight:"1.6vmin"}}  >
              <b>Health</b>
              </Typography>
          </Grid>
        </Grid>
        </ContentButton>
      }
      </Grid>
    </Grid>

    <Grid container spacing ={8} justify = "center">
      <Grid item xs={4} style={{padding:'20px', marginBottom:'1%'}}  align = "center">
      {
        (this.props.clickedvote === "education")
        ?
            <ContentButton style={{border:"solid 10px #8c1d40"}} value="education" onClick={this.educationChoice} >
            <Grid direction="column">
            <Grid justify = "flex-end">
              <Typography style={{fontSize:"3vmin"}} >
              info
              </Typography>
            </Grid>
              <Grid alignItems = "center">
                <img alt="alt tag description goes here" style={{height:"auto", width:"100%", maxWidth:"64px", padding:"5px"}} src={educationIcon}/>
              </Grid>
              <Grid alignItems = "center">
                <Typography variant="body1" style={{fontSize:"1.6vmin", lineHeight:"1.6vmin", paddingBottom:"10%"}}  >
                  <b>Education</b>
                  </Typography>
              </Grid>
            </Grid>
            </ContentButton>
        :
        <ContentButton value="education" onClick={this.educationChoice} >
        <Grid direction="column">
        <Grid justify = "flex-end">
          <Typography style={{fontSize:"3vmin"}} >
          info
          </Typography>
        </Grid>
          <Grid alignItems = "center">
            <img alt="alt tag description goes here" style={{height:"auto", width:"100%", maxWidth:"64px", padding:"5px"}} src={educationIcon}/>
          </Grid>
          <Grid alignItems = "center">
            <Typography variant="body1" style={{fontSize:"1.6vmin", lineHeight:"1.6vmin", paddingBottom:"10%"}}  >
              <b>Education</b>
              </Typography>
          </Grid>
        </Grid>
        </ContentButton>
      }
      </Grid>
      <Grid item xs={4} style={{padding:'20px', marginBottom:'1%'}} align = "center">
      {
        (this.props.clickedvote === "collegesprograms")
        ?
            <ContentButton style={{border:"solid 10px #000000"}} value="collegesprograms" onClick={this.collegeChoice} >
            <Grid direction="column">
            <Grid justify = "flex-end">
              <Typography style={{fontSize:"3vmin"}} >
              info
              </Typography>
            </Grid>
              <Grid alignItems = "center">
                <img alt="alt tag description goes here" style={{height:"auto", width:"100%", maxWidth:"64px", padding:"5px"}} src={collegeIcon}/>
              </Grid>
              <Grid alignItems = "center">
                <Typography variant="body1" style={{fontSize:"1.6vmin", lineHeight:"1.6vmin"} }  >
                  <b>Colleges & Programs</b>
                  </Typography>
              </Grid>
            </Grid>
            </ContentButton>
        :
        <ContentButton value="collegesprograms" onClick={this.collegeChoice} >
        <Grid direction="column">
        <Grid justify = "flex-end">
          <Typography style={{fontSize:"3vmin"}} >
          info
          </Typography>
        </Grid>
          <Grid alignItems = "center">
            <img alt="alt tag description goes here" style={{height:"auto", width:"100%", maxWidth:"64px", padding:"5px"}} src={collegeIcon}/>
          </Grid>
          <Grid alignItems = "center">
            <Typography style={{fontSize:"1.6vmin", lineHeight:"1.6vmin"}}  >
              <b>Colleges & Programs</b>
              </Typography>
          </Grid>
        </Grid>
        </ContentButton>
      }
      </Grid>
    </Grid>

    <div style={{marginTop:"20px", textAlign: "center"}}>
    {
      (this.props.clickedvote === false)
      ?  null
      : <SubmitButton onClick={this.submitResults}>
        <Typography variant="h6" >
          <b>Submit Your Vote</b>
        </Typography>
      </SubmitButton>
    }
    </div>
    </div>
    </React.Fragment>
    )
  }
}

StepDefault.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepDefault);
