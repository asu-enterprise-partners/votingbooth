import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = theme => ({
  root: {
    margin: 0,
    padding: '25px',
  },
  iconButton: {
    color: "#000000",
  },
});

const useStyles = makeStyles({
  card: {
    maxWidth: "345",
    width: "200px",
    backgroundColor: '#ffffff',
    borderRadius: 40,
  },
  title: {
    fontSize: 30,
    color: '#000000',
  },
});

const SubmitButton = styled(Button)({
  background: '#000000',
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
        <Typography style={{fontSize:"5.0vmin", color:"#000000", alignItems:"center"}} color="textSecondary" gutterBottom>
            {
              (this.props.clickedvote === "environment")
              ? <b>Environment</b>
              : (this.props.clickedvote === "artsculture")
                ? <b>Arts &amp; Culture</b>
                : (this.props.clickedvote === "health")
                  ? <b>Health</b>
                  : (this.props.clickedvote === "education")
                    ? <b>Education</b>
                    : (this.props.clickedvote === "collegesprograms")
                      ? <b>Colleges &amp; Programs</b>
                      : null
            }
        </Typography>
        </Grid>
        <Grid>
          <Typography style={{marginBottom:"20px", marginTop:"20px"}} variant="body2" color="textSecondary" component="p">
              {
                (this.props.clickedvote === "environment")
                ? <img style={{height:"auto", width:"75%"}} src="https://www.asufoundation.org/dw/image/v2/BDKW_PRD/on/demandware.static/-/Sites-storefront-catalog-m-en/default/dwe3308e90/images/hi-res/Sustainability/sustainability-internship.jpg?sw=800&sh=424"/>
                : (this.props.clickedvote === "artsculture")
                  ? <img style={{height:"auto", width:"75%"}} src="https://www.asufoundation.org/dw/image/v2/BDKW_PRD/on/demandware.static/-/Sites-storefront-catalog-m-en/default/dw7f8ba8ac/images/hi-res/Design-Arts-Herberger-Institute/herberger-technology-students-fund.jpg?sw=800&sh=424"/>
                  : (this.props.clickedvote === "health")
                    ? <img style={{height:"auto", width:"75%"}} src="https://www.asufoundation.org/dw/image/v2/BDKW_PRD/on/demandware.static/-/Sites-storefront-catalog-m-en/default/dwd130ebe6/images/hi-res/Biodesign/biodesign-Cancer-Research.jpg?sw=800&sh=424"/>
                    : (this.props.clickedvote === "education")
                      ? <img style={{height:"auto", width:"75%"}} src="https://www.asufoundation.org/dw/image/v2/BDKW_PRD/on/demandware.static/-/Sites-storefront-catalog-m-en/default/dwc95a126f/images/hi-res/Honors-Barrett/Barrett_honors_college_learning_opportunities.jpg?sw=800&sh=424"/>
                      : (this.props.clickedvote === "collegesprograms")
                        ? <img style={{height:"auto", width:"75%"}} src="https://www.asufoundation.org/dw/image/v2/BDKW_PRD/on/demandware.static/-/Sites-storefront-catalog-m-en/default/dw93d8835e/images/hi-res/Public-Service-Community-Solutions-Watts/watts-scholarship-student-fund.jpg?sw=800&sh=424"/>
                        : null
              }
              </Typography>
        </Grid>
        <Grid>
          <Typography style={{fontSize:"2.6vmin"}} color="black" component="p">
              {
                (this.props.clickedvote === "environment")
                ? <p>Climate change. Natural resources. Food production. Biodiversity. Our planet is plagued by sustainability issues. ASU is taking action and fighting for our environment through many programs and initiatives that are making a difference.</p>
                : (this.props.clickedvote === "artsculture")
                  ? <p>ASU is committed to helping the arts thrive. Take ASU Gammage’s Cultural Participation program, which provides access to community arts programs, innovative academic tools and world-class artists to people of all ages, economic levels and backgrounds.</p>
                  : (this.props.clickedvote === "health")
                    ? <p>Fighting cancer. Curing disease. Alleviating hunger. Providing access to healthcare and educational programs for the underserved. Promoting healthy communities. Improving the quality of life for all. ASU is making a difference.</p>
                    : (this.props.clickedvote === "education")
                      ? <p>ASU is increasing access to higher education and opportunity for students from all walks of life and economic backgrounds. Many initiatives and scholarships are in place to advance this mission and help students thrive at ASU and beyond.</p>
                      : (this.props.clickedvote === "collegesprograms")
                        ? <p>ASU is home to Sun Devil Athletics, the ASU Alumni Association, ASU Family and Arizona PBS, in addition to an assortment of schools and colleges, programs and centers that bring people together from all walks of life in pursuit of meaningful work.</p>
                        : null
              }
              </Typography>
          </Grid>
        <Grid>
        <SubmitButton onClick={this.submitResults}>
          <Typography variant="h6" >
              <b><a style={{textDecoration:"none", color:"#ffffff"}} href="https://www.asufoundation.org/">Learn More</a></b>
          </Typography>
        </SubmitButton>
        </Grid>
      </Grid>
      </div>
      </React.Fragment>


      // <div style={{ display:'flex', justifyContent:'center' }}>
      // <Card style={{maxWidth:345, backgroundColor:"#ffffff"}}className={useStyles.card}>
      //   <div style={{ float:'left', margin:'20px' }}><IconButton onClick={this.back}><ArrowBackIcon style={{fontSize:35, fill:"black"}}/></IconButton></div>
      //   <CardActionArea >
      //     <CardContent style={{ display:'flex', justifyContent:'center' }}>
      //     <Typography style={{fontSize:30, color:"#000000"}} color="textSecondary" gutterBottom>
      //     {
      //       (this.props.clickedvote === "environment")
      //       ? <b>Environment</b>
      //       : (this.props.clickedvote === "artsculture")
      //         ? <b>Arts &amp; Culture</b>
      //         : (this.props.clickedvote === "health")
      //           ? <b>Health</b>
      //           : (this.props.clickedvote === "education")
      //             ? <b>Education</b>
      //             : (this.props.clickedvote === "collegesprograms")
      //               ? <b>Colleges &amp; Programs</b>
      //               : null
      //     }
      //     </Typography>
      //     </CardContent>
      //     <CardMedia/>
      //     <CardContent>
      //       <Typography variant="body2" color="textSecondary" component="p">
      //       {
      //         (this.props.clickedvote === "environment")
      //         ? <p>Paragraph about environment.</p>
      //         : (this.props.clickedvote === "artsculture")
      //           ? <p>Paragraph about arts and culture.</p>
      //           : (this.props.clickedvote === "health")
      //             ? <p>Paragraph about health programs.</p>
      //             : (this.props.clickedvote === "education")
      //               ? <p>Paragraph about education.</p>
      //               : (this.props.clickedvote === "collegesprograms")
      //                 ? <p>Paragraph about colleges and programs.</p>
      //                 : null
      //       }
      //       </Typography>
      //     </CardContent>
      //   </CardActionArea>
      // </Card>
      // </div>

    )
  }
}

CardClickedStep.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(CardClickedStep);
