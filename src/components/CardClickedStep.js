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
              (this.props.clickedvote === "environment")
              ? <b>Environment</b>
              : (this.props.clickedvote === "artsculture")
                ? <b>Arts &amp; Community</b>
                : (this.props.clickedvote === "health")
                  ? <b>Health & Welfare</b>
                  : (this.props.clickedvote === "education")
                    ? <b>Education &amp; Scholarship</b>
                    : (this.props.clickedvote === "collegesprograms")
                      ? <b>Colleges &amp; Programs</b>
                      : null
            }
        </Typography>
        </Grid>
        <Grid>
          <Typography style={{marginBottom:"20px", marginTop:"20px"}} variant="h4" color="textSecondary" component="p">
              {
                (this.props.clickedvote === "environment")
                ? <img style={{height:"auto", width:"75%"}} src="https://www.asufoundation.org/dw/image/v2/BDKW_PRD/on/demandware.static/-/Sites-storefront-catalog-m-en/default/dwe3308e90/images/hi-res/Sustainability/sustainability-internship.jpg?sw=800&sh=424" alt="environment"/>
                : (this.props.clickedvote === "artsculture")
                  ? <img style={{height:"auto", width:"75%"}} src="https://www.asufoundation.org/dw/image/v2/BDKW_PRD/on/demandware.static/-/Sites-storefront-catalog-m-en/default/dw7f8ba8ac/images/hi-res/Design-Arts-Herberger-Institute/herberger-technology-students-fund.jpg?sw=800&sh=424" alt="artsculture"/>
                  : (this.props.clickedvote === "health")
                    ? <img style={{height:"auto", width:"75%"}} src="https://www.asufoundation.org/dw/image/v2/BDKW_PRD/on/demandware.static/-/Sites-storefront-catalog-m-en/default/dwd130ebe6/images/hi-res/Biodesign/biodesign-Cancer-Research.jpg?sw=800&sh=424" alt="health"/>
                    : (this.props.clickedvote === "education")
                      ? <img style={{height:"auto", width:"75%"}} src="https://www.asufoundation.org/dw/image/v2/BDKW_PRD/on/demandware.static/-/Sites-storefront-catalog-m-en/default/dwc95a126f/images/hi-res/Honors-Barrett/Barrett_honors_college_learning_opportunities.jpg?sw=800&sh=424" alt="education"/>
                      : (this.props.clickedvote === "collegesprograms")
                        ? <img style={{height:"auto", width:"75%"}} src="https://www.asufoundation.org/dw/image/v2/BDKW_PRD/on/demandware.static/-/Sites-storefront-catalog-m-en/default/dw93d8835e/images/hi-res/Public-Service-Community-Solutions-Watts/watts-scholarship-student-fund.jpg?sw=800&sh=424" alt="collegesprograms"/>
                        : null
              }
              </Typography>
        </Grid>
        <Grid>
          <Typography style={{fontSize:"3vmin"}} color="black" component="p">
              {
                (this.props.clickedvote === "environment")
                ? <p>Climate change. Natural resources. Food production. Biodiversity. Our planet is plagued by sustainability issues. ASU is taking action and fighting for our environment through many programs and initiatives that are making a difference. <a style={{textDecoration:"", color:"#000000"}} target="_blank" rel="noopener noreferrer" href="https://www.asufoundation.org/environment/"> Learn More</a></p>
                : (this.props.clickedvote === "artsculture")
                  ? <p>ASU is committed to helping the arts thrive. Take ASU Gammage’s Cultural Participation program, which provides access to community arts programs, innovative academic tools and world-class artists to people of all ages, economic levels and backgrounds. <a style={{textDecoration:"", color:"#000000"}} target="_blank" rel="noopener noreferrer" href="https://www.asufoundation.org/arts-and-community/"> Learn More</a></p>
                  : (this.props.clickedvote === "health")
                    ? <p>Fighting cancer. Curing disease. Alleviating hunger. Providing access to healthcare and educational programs for the underserved. Promoting healthy communities. Improving the quality of life for all. ASU is making a difference. <a style={{textDecoration:"", color:"#000000"}} target="_blank" rel="noopener noreferrer" href="https://www.asufoundation.org/health-and-welfare/"> Learn More</a></p>
                    : (this.props.clickedvote === "education")
                      ? <p>ASU is increasing access to higher education and opportunity for students from all walks of life and economic backgrounds. Many initiatives and scholarships are in place to advance this mission and help students thrive at ASU and beyond. <a style={{textDecoration:"", color:"#000000"}} target="_blank" rel="noopener noreferrer" href="https://www.asufoundation.org/education-and-scholarship/"> Learn More</a></p>
                      : (this.props.clickedvote === "collegesprograms")
                        ? <p>ASU is home to Sun Devil Athletics, the ASU Alumni Association, ASU Family and Arizona PBS, in addition to an assortment of schools and colleges, programs and centers that bring people together from all walks of life in pursuit of meaningful work. <a style={{textDecoration:"", color:"#000000"}} target="_blank" rel="noopener noreferrer" href="https://www.asufoundation.org/colleges-and-programs/">Learn More</a></p>
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
