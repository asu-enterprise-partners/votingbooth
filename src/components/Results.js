import React, { Component } from 'react';
import { styled } from '@material-ui/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';

import { css } from '@emotion/core'

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
  recapSection: {
    borderColor: '#8c1d40',
    borderStyle: 'dotted',
    borderWidth: '1px',
    padding: '10px'
  },
  veCard: {
    backgroundColor: '#ffc627',
  },
  fundName: {
    fontWeight: 900
  },
  subFundName: {
    fontWeight: 900
  },
  moreInfoLink: {
    fontWeight: 900,
    color: 'black'
  }
});

const ASUButton = styled(Button)({
  background: 'black',
  border: 0,
  borderRadius: 10,
  color: '#ffc627',
  height: 48,
  padding: '0 30px',
  marginRight: '10px',
  "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#353535"
  }
});

const ASUButtonEdit = styled(Button)({
  background: 'black',
  border: 0,
  borderRadius: 10,
  color: '#ffc627',
  height: 24,
  padding: '0 20px',
  marginRight: '10px',
  "&:hover": {
      //you want this to be the same as the backgroundColor above
      backgroundColor: "#353535"
  }
});

// const ASUButtonSmall = styled(Button)({
//   background: 'black',
//   border: 0,
//   borderRadius: 10,
//   color: '#ffc627',
//   height: 24,
//   padding: '0 30px',
//   "&:hover": {
//       backgroundColor: "#353535"
//   }
// });

class Results extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    firstStep = (e) => {
        e.preventDefault();
        this.props.firstStep();
    }

    secondStep = (e) => {
        e.preventDefault();
        this.props.secondStep();
    }

    startOver = (e) => {
        e.preventDefault();
        this.props.startOver();
    }

    render(){

      const { classes } = this.props;

      const affiliatedwithasu = this.props.isAffiliatedWithASU;
      const anundergradstudent = this.props.isAnUndergradStudent;
      const agraduatestudent = this.props.isAGraduateStudent;
      const faculty = this.props.isFaculty;
      const universitystaff = this.props.isUniversityStaff;
      const community = this.props.isCommunity;
      const anyone = this.props.isAnyone;

      const companyvaluation = this.props.theCompanyValuation;

      const interestedinfundingtosupport = this.props.theInterestedInFundingToSupport;
      const manufacturinghardware = this.props.isManufacturingHardware;
      const socialsports = this.props.isSocialSports;
      const health = this.props.isHealth;
      const veterans = this.props.isVeterans;
      const media = this.props.isMedia;
      const generaltechnology = this.props.isGeneralTechnology;
      const edtech = this.props.idEdTech;
      const internetofthings = this.props.isInternetOfThings;
      const other = this.props.isOther;

      const ourResults = this.props.ourResults;

        return(

          <React.Fragment>

              <Typography variant="h6" gutterBottom className={classes.recapSection}>
                I am:
                <ul>
                  {affiliatedwithasu ? <li>affiliated with ASU</li> : ''}
                  {anundergradstudent ? <li>an undergrad student</li> : ''}
                  {agraduatestudent ? <li>a graduate student</li> : ''}
                  {faculty ? <li>a faculty member</li> : ''}
                  {universitystaff ? <li>university staff</li> : ''}
                  {community ? <li>community</li> : ''}
                  {anyone ? <li>anyone</li> : ''}
                  {companyvaluation ? <li>the owner of a company valued between {companyvaluation}</li> : ''}
                </ul>
                {/*<ASUButtonEdit onClick={this.firstStep}>
                  Edit
                </ASUButtonEdit>*/}
              </Typography>

              <Typography variant="h6" gutterBottom className={classes.recapSection}>
                I am interested in funding to support:

                <ul>
                  {(function() {
                          switch(interestedinfundingtosupport) {
                            case 'ideationtoprototyping':
                              return <li>Ideation to Prototyping</li>;
                            case 'ideationtobusinessformation':
                              return <li>Ideation to Business Formation</li>;
                            case 'prototypetobusinessformation':
                              return <li>Prototype to Business Formation</li>;
                            case 'prototypetocustomeracquisition':
                              return <li>Prototype to Customer Acquisition</li>;
                            case 'customeracquisitionandemerginggrowth':
                              return <li>Customer Acquisition & Emerging Growth</li>;
                            default:
                              return null;
                          }
                        })()}
                </ul>
                {/*<ASUButtonEdit onClick={this.secondStep}>
                  Edit
                </ASUButtonEdit>*/}
              </Typography>

              <Typography variant="h6" gutterBottom className={classes.recapSection}>
                In the areas of:
                <ul>
                  {manufacturinghardware ? <li>Manufacturing / Hardware</li> : ''}
                  {socialsports ? <li>Social / Sports</li> : ''}
                  {health ? <li>Health</li> : ''}
                  {veterans ? <li>Veterans</li> : ''}
                  {media ? <li>Media</li> : ''}
                  {generaltechnology ? <li>General Technology</li> : ''}
                  {edtech ? <li>EdTech</li> : ''}
                  {internetofthings ? <li>Internet of Things</li> : ''}
                  {other ? <li>Other</li> : ''}
                </ul>
                {/*<ASUButtonEdit onClick={this.secondStep}>
                  Edit
                </ASUButtonEdit>*/}
              </Typography>

            <hr />

            {ourResults.length > 0 ? <Typography variant="h6" gutterBottom>Here are the {ourResults.length} ways the ASU Venture Ecosystem can help:</Typography> : 'No results found. Please try again.'}
            <ASUButton onClick={this.startOver}>
              Start Over
            </ASUButton>

            <div className={classNames(classes.layout, classes.cardGrid)}>

              <Grid container spacing={24}>
                {ourResults.map((fund, id) => (
                  <Grid item key={id} xs={6}>
                    <Card className={classNames(classes.card, classes.veCard)}>
                      <CardContent className={classes.cardContent}
                        css={css`
                          border-radius: 30px;
                        `}
                        >
                        <Typography gutterBottom variant="h5" component="h2" className={classes.fundName}>
                          {fund['Venture Ecosystem']}
                        </Typography>
                        <Typography>
                          {fund.Description}
                        </Typography>
                        <Typography className={classes.subFundName}>
                          Program Type:
                        </Typography>
                        <Typography>
                          {fund['Program Type']}
                        </Typography>
                        <Typography className={classes.subFundName}>
                          Funding Available:
                        </Typography>
                        <Typography>
                          {fund.Min} - {fund.Max}
                        </Typography>
                        <Typography className={classes.subFundName}>
                          Funding Stage:
                        </Typography>
                        <Typography>
                          {fund['Funding Stage']}
                        </Typography>
                        <Typography className={classes.subFundName}>
                          Support Type:
                        </Typography>
                        <Typography>
                          {fund['Support Type']}
                        </Typography>
                      </CardContent>
                      <CardActions className={classes.moreInfoLink}>
                          <Link href={fund.URL} className={classes.moreInfoLink} target="_blank">
                            More info ...
                          </Link>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>

            </div>

            <Grid item>
              <ASUButton onClick={this.back}>
                Print
              </ASUButton>
              <ASUButton onClick={this.back}>
                Email
              </ASUButton>
              <ASUButton onClick={this.startOver}>
                Start Over
              </ASUButton>
            </Grid>

          </React.Fragment>

        )
    }
}

Results.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Results);
