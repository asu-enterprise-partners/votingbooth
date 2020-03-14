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
        <Typography style={{fontSize:"6.0vmin", color:"#000000", alignItems:"center"}} color="textSecondary" gutterBottom>
            {
              (this.props.clickedvote === "areaofgreatestneed")
              ? <b>Area of Greatest Need</b>
              : (this.props.clickedvote === "k12support")
                ? <b>K-12 Support</b>
                : (this.props.clickedvote === "communityemergencysupport")
                  ? <b>Community Emergency Support</b>
                  : (this.props.clickedvote === "individualemergencysupport")
                    ? <b>Individual Emergency Support</b>
                    : (this.props.clickedvote === "researchsupport")
                      ? <b>Research Support</b>
                      : null
            }
        </Typography>
        </Grid>
        <Grid>
          <Typography style={{fontSize:"3vmin"}} color="black" component="p">
              {
                (this.props.clickedvote === "areaofgreatestneed")
                ? <React.Fragment><p>ASU has long been committed to reaching and serving people at scale. This year, on our annual day of giving and in a time of unprecedented crisis, ASU is committed to leveraging that strength to serve as many people as possible as quickly as possible. When you give to our area of greatest need, you enable us to provide meaningful and rapid support to our fellow community members.</p><p>When you support ASU’s area of greatest need, you assist students, faculty and staff with urgent life circumstances. You aid children experiencing learning disruptions and those who lack the online infrastructure for distance learning. You support individuals experiencing economic impacts from work closures. You support scientists conducting vaccine research and educators advancing health and well-being.</p> <p><strong><a style={{textDecoration:"", color:"#000000"}} target="_blank" rel="noopener noreferrer" href="https://www.asufoundation.org/colleges-and-programs/programs-and-centers/asu-area-of-greatest-need-CA112040.html"> Learn More</a></strong></p></React.Fragment>

                : (this.props.clickedvote === "k12support")
                ? <React.Fragment><p>In times of crisis, ASU’s mission to provide accessibility to education is as vital as ever. The university is committed to enabling schools to overcome any obstacle and deliver high-quality education to all who seek it.</p> <p><strong><a style={{textDecoration:"", color:"#000000"}} target="_blank" rel="noopener noreferrer" href="https://www.asufoundation.org/"> Learn More</a></strong></p></React.Fragment>

                : (this.props.clickedvote === "communityemergencysupport")
                ? <React.Fragment><p>ASU is committed to creating a strong, resilient community. With your support, we can meet the immediate and long-term needs of people in our community and work together for a better tomorrow.</p> <p><strong><a style={{textDecoration:"", color:"#000000"}} target="_blank" rel="noopener noreferrer" href="https://www.asufoundation.org/"> Learn More</a></strong></p></React.Fragment>

                : (this.props.clickedvote === "individualemergencysupport")
                ? <React.Fragment><p>ASU is committed to the well-being of every individual. In times of uncertainty, the university is resolute in its mission to provide a wide range of crisis- and emergency-support to help people in need.</p> <p><strong><a style={{textDecoration:"", color:"#000000"}} target="_blank" rel="noopener noreferrer" href="https://www.asufoundation.org/"> Learn More</a></strong></p></React.Fragment>

                : (this.props.clickedvote === "researchsupport")
                ? <React.Fragment><p>With the commitment to our community that drives us every day, ASU researchers are finding solutions to the problems we face. Whether developing crucial vaccines or economic development initiatives, ASU is working to promote human well-being and solve complex challenges.</p> <p><strong><a style={{textDecoration:"", color:"#000000"}} target="_blank" rel="noopener noreferrer" href="https://www.asufoundation.org/"> Learn More</a></strong></p></React.Fragment>

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
