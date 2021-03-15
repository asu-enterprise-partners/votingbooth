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
              ? <b>Protecting the planet</b>
              : (this.props.clickedvote === "k12support")
                ? <b>Conducting research for the public good</b>
                : (this.props.clickedvote === "communityemergencysupport")
                  ? <b>Advancing student access</b>
                  : (this.props.clickedvote === "individualemergencysupport")
                    ? <b>Serving our community</b>
                    : (this.props.clickedvote === "researchsupport")
                      ? <b>Creating equity in higher education</b>
                      : null
            }
        </Typography>
        </Grid>
        <Grid>
          <Typography style={{fontSize:"1.5rem"}} color="black" component="p">
              {
                (this.props.clickedvote === "areaofgreatestneed")
                ? <React.Fragment><p>ASU is tackling environmental challenges through impactful initiatives and real-world solutions dedicated to sustaining the integrity of our planet and its life-supporting systems.</p> <p><strong><a style={{textDecoration:"", color:"#000000"}} target="_blank" rel="noopener noreferrer" href="https://givingday.asu.edu/sdgd-causes/protecting-the-planet/"> Learn More</a></strong></p></React.Fragment>

                : (this.props.clickedvote === "k12support")
                ? <React.Fragment><p>ASU is committed to use-inspired research that positively impacts lives. Whether it’s generating crucial vaccines or economic development initiatives, ASU is working to promote human well-being and solve complex, shifting challenges for the public good.</p> <p><strong><a style={{textDecoration:"", color:"#000000"}} target="_blank" rel="noopener noreferrer" href="https://givingday.asu.edu/sdgd-causes/conducting-research-for-the-public-good/"> Learn More</a></strong></p></React.Fragment>

                : (this.props.clickedvote === "communityemergencysupport")
                ? <React.Fragment><p>Everyone deserves access to higher education. First-generation students comprise nearly 40 percent of the student body at ASU, where students from all economic backgrounds are empowered to imagine new possibilities.</p> <p><strong><a style={{textDecoration:"", color:"#000000"}} target="_blank" rel="noopener noreferrer" href="https://givingday.asu.edu/sdgd-causes/advancing-student-access/"> Learn More</a></strong></p></React.Fragment>

                : (this.props.clickedvote === "individualemergencysupport")
                ? <React.Fragment><p>ASU assumes a fundamental responsibility for the economic, social, cultural and overall health of the communities we serve — through service initiatives, partnerships and programs that support those in need, and use-inspired research that fuels meaningful change.</p> <p><strong><a style={{textDecoration:"", color:"#000000"}} target="_blank" rel="noopener noreferrer" href="https://givingday.asu.edu/sdgd-causes/serving-our-community/"> Learn More</a></strong></p></React.Fragment>

                : (this.props.clickedvote === "researchsupport")
                ? <React.Fragment><p>ASU strives to be an accessible university to all students capable of pursuing a university degree, regardless of race. Through impactful programs and partnerships, we are building an inclusive community where everyone feels welcome and supported.</p> <p><strong><a style={{textDecoration:"", color:"#000000"}} target="_blank" rel="noopener noreferrer" href="https://givingday.asu.edu/sdgd-causes/creating-equity-in-higher-education/"> Learn More</a></strong></p></React.Fragment>

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
