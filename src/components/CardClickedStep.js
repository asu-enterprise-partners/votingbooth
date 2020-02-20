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
                ? <img style={{height:"auto", width:"75%"}} src="https://www.asufoundation.org/dw/image/v2/BDKW_PRD/on/demandware.static/-/Sites-storefront-catalog-m-en/default/dw3821f6b9/images/hi-res/Liberal-Arts-Sciences-CLAS/ASU_transborder-sudies-fund-cultural-social-political-crossed-borders.jpg?sw=376&sh=202"/>
                : (this.props.clickedvote === "artsculture")
                  ? <img style={{height:"auto", width:"75%"}} src="https://www.asufoundation.org/dw/image/v2/BDKW_PRD/on/demandware.static/-/Sites-storefront-catalog-m-en/default/dwe3308e90/images/hi-res/Sustainability/sustainability-internship.jpg?sw=376&sh=202"/>
                  : (this.props.clickedvote === "health")
                    ? <img style={{height:"auto", width:"75%"}} src="https://www.asufoundation.org/dw/image/v2/BDKW_PRD/on/demandware.static/-/Sites-storefront-catalog-m-en/default/dwb6a5070a/images/hi-res/Biodesign/biodesign-Innovations-Medicine.jpg?sw=376&sh=202"/>
                    : (this.props.clickedvote === "education")
                      ? <img style={{height:"auto", width:"75%"}} src="https://www.asufoundation.org/dw/image/v2/BDKW_PRD/on/demandware.static/-/Sites-storefront-catalog-m-en/default/dw8244ac90/images/hi-res/Liberal-Arts-Sciences-CLAS/canine-cognition-research-dog-asu.jpg?sw=376&sh=202"/>
                      : (this.props.clickedvote === "collegesprograms")
                        ? <img style={{height:"auto", width:"75%"}} src="https://www.asufoundation.org/dw/image/v2/BDKW_PRD/on/demandware.static/-/Sites-storefront-catalog-m-en/default/dwe3460327/images/hi-res/Athletics/athletics-female-student-athletes.jpg?sw=376&sh=202"/>
                        : null
              }
              </Typography>
        </Grid>
        <Grid>
          <Typography style={{fontSize:"2.6vmin"}} color="black" component="p">
              {
                (this.props.clickedvote === "environment")
                ? <p>Your donation helps the Biodesign Institute push the frontiers of cancer research, making strides like never before. Because of you, we can invest in research to further understand and combat cancer. You’re also providing researchers with a risk-tolerant source of funding. This is where your philanthropy is increasingly powerful and catalytic. Through your generosity, Biodesign research teams are empowered to tackle grand challenges like never before.</p>
                : (this.props.clickedvote === "artsculture")
                  ? <p>Your donation helps the Biodesign Institute push the frontiers of cancer research, making strides like never before. Because of you, we can invest in research to further understand and combat cancer. You’re also providing researchers with a risk-tolerant source of funding. This is where your philanthropy is increasingly powerful and catalytic. Through your generosity, Biodesign research teams are empowered to tackle grand challenges like never before.</p>
                  : (this.props.clickedvote === "health")
                    ? <p>Your donation helps the Biodesign Institute push the frontiers of cancer research, making strides like never before. Because of you, we can invest in research to further understand and combat cancer. You’re also providing researchers with a risk-tolerant source of funding. This is where your philanthropy is increasingly powerful and catalytic. Through your generosity, Biodesign research teams are empowered to tackle grand challenges like never before.</p>
                    : (this.props.clickedvote === "education")
                      ? <p>Your donation helps the Biodesign Institute push the frontiers of cancer research, making strides like never before. Because of you, we can invest in research to further understand and combat cancer. You’re also providing researchers with a risk-tolerant source of funding. This is where your philanthropy is increasingly powerful and catalytic. Through your generosity, Biodesign research teams are empowered to tackle grand challenges like never before.</p>
                      : (this.props.clickedvote === "collegesprograms")
                        ? <p>Your donation helps the Biodesign Institute push the frontiers of cancer research, making strides like never before. Because of you, we can invest in research to further understand and combat cancer. You’re also providing researchers with a risk-tolerant source of funding. This is where your philanthropy is increasingly powerful and catalytic. Through your generosity, Biodesign research teams are empowered to tackle grand challenges like never before.</p>
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
