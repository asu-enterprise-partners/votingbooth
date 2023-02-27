import React, { Component } from 'react';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import firebase from './../Firebase.js'

const styles = theme => ({
  root: {
    margin: 0,
    padding: '25px',
  },
  iconButton: {
    color: "#000000",
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


class CardClickedStep extends Component{

  submitResults = (e) => {

    e.preventDefault()
    this.props.nextStep()
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

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  }

  render(){
    return(


      <React.Fragment>
      <div style={{ display:'flex', justifyContent:'center' }}>
      <Grid direction="column" style={{textAlign:"center"}}>
      <IconButton onClick={this.back}><ArrowBackIcon style={{fontSize:50, fill:"black", margin:"10px"}}/></IconButton>
      <Grid>
        <Typography style={{fontSize:"2.5rem", color:"#000000", alignItems:"center"}} color="textSecondary" gutterBottom>
            {
              (this.props.clickedvote === "areaofgreatestneed")
              ? <b>ASU Counseling Services</b>
              : (this.props.clickedvote === "k12support")
                ? <b>Pitchfork Pantry</b>
                : (this.props.clickedvote === "communityemergencysupport")
                  ? <b>Student Crisis Fund</b>
                  : (this.props.clickedvote === "individualemergencysupport")
                    ? <b>Project Humanities</b>
                    : null
            }
        </Typography>
        </Grid>
        <Grid>
          <Typography style={{fontSize:"1.5rem"}} color="black" component="p">
              {
                (this.props.clickedvote === "areaofgreatestneed")
                ? <React.Fragment>
                  <p>
                    ASU Counseling Services provides support for students at all four campuses and allows Sun Devils
                    anywhere in the world, at any time of day or night, to reach someone through Open Call and Open Chat.
                    In addition to clinical services, Counseling Services runs peer-led discussion and support groups where
                    students support and connect with each other and conducts preventative and educational interventions
                    for staff and students through training seminars and outreach programs. All services are confidential
                    and free of charge for ASU students. Your support helps us to continue to offer these services and create
                    more opportunities for our students to receive the support they need.
                  </p> 
                  {/* <p><strong><a style={{textDecoration:"", color:"#000000"}} target="_blank" rel="noopener noreferrer" href="https://givingday.asu.edu/sdgd-causes/protecting-the-planet/"> Learn More</a></strong></p> */}
                  </React.Fragment>

                : (this.props.clickedvote === "k12support")
                ? <React.Fragment>
                  <p>
                    Pitchfork Pantry is an organization that directly serves Arizona State University students by providing
                    meals and food items, enabling students to combat hunger and food insecurity while working toward a
                    degree. Thanks to generosity, we can purchase a variety of food items to stock the pantry, offer
                    nutritious meals to students and provide education on tackling food insecurity.
                  </p> 
                  {/* <p><strong><a style={{textDecoration:"", color:"#000000"}} target="_blank" rel="noopener noreferrer" href="https://givingday.asu.edu/sdgd-causes/conducting-research-for-the-public-good/"> Learn More</a></strong></p> */}
                  </React.Fragment>

                : (this.props.clickedvote === "communityemergencysupport")
                ? <React.Fragment>
                  <p>
                    Food and housing insecurity. Unanticipated medical expenses. Family emergencies. Fires. Broken-down
                    cars. Theft. Sudden financial stress makes everything else harder. Students who face a financial
                    emergency can turn to the Student Crisis Fund. For many ASU students who have exhausted other
                    financial options, it's the difference between dropping out and staying in school. Support for the Student
                    Crisis Fund helps provide immediate financial assistance to students who are unable to meet essential
                    expenses in times of crisis.
                  </p>
                  {/* <p><strong><a style={{textDecoration:"", color:"#000000"}} target="_blank" rel="noopener noreferrer" href="https://givingday.asu.edu/sdgd-causes/advancing-student-access/"> Learn More</a></strong></p> */}
                  </React.Fragment>

                : (this.props.clickedvote === "individualemergencysupport")
                ? <React.Fragment>
                  <p>
                    Project Humanities facilitates conversations across diverse communities to build understanding through
                    talking, listening and connecting. Project Humanities gives students the ability to respond to the
                    perennial question: Are we losing our humanity? Because of the generosity of donors, Project
                    Humanities can make a difference in the lives of others through lectures, panels, workshops, film
                    screenings, symposia, student contests, performances, Hacks for Humanity and our homeless outreach
                    called Service Saturdays. During Service Saturdays, volunteers distribute shoes, clothing and toiletries to
                    unhoused community members. Our goal is to extend humanity through service to individuals most
                    denied fundamental dignity through respect, kindness, compassion and empathy.
                  </p>
                  {/* <p><strong><a style={{textDecoration:"", color:"#000000"}} target="_blank" rel="noopener noreferrer" href="https://givingday.asu.edu/sdgd-causes/serving-our-community/"> Learn More</a></strong></p> */}
                  </React.Fragment>
                : null
              }
              </Typography>
          </Grid>
        <Grid>
          <div style={{marginTop:"20px", textAlign: "center"}}>
          {
            (this.props.clickedvote === false)
            ?  null
            : <SubmitButton onClick={this.submitResults}>
              <Typography variant="h5">
                <b>Submit Your Vote</b>
              </Typography>
            </SubmitButton>
          }
          </div>
        </Grid>
      </Grid>
      </div>
      </React.Fragment>
    )
  }
}

CardClickedStep.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(CardClickedStep);
