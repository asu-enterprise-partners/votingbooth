import React, { Component } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

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
});

class Results extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){

      const { classes } = this.props;

      const isOwnerOfCompany = this.props.isOwnerOfCompany;
      const affiliatedwithasu = this.props.isAffiliatedWithASU;
      const anundergradstudent = this.props.isAnUndergradStudent;
      const agraduatestudent = this.props.isAGraduateStudent;
      const faculty = this.props.isFaculty;
      const universitystaff = this.props.isUniversityStaff;
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

              <Typography variant="h6" gutterBottom>
                I am:
                <Button variant="contained" color="secondary" onClick={this.back}>
                  Edit
                </Button>
                <ul>
                  {affiliatedwithasu ? <li>affiliated with ASU</li> : ''}
                  {anundergradstudent ? <li>an undergrad student</li> : ''}
                  {agraduatestudent ? <li>a graduate student</li> : ''}
                  {faculty ? <li>a faculty member</li> : ''}
                  {universitystaff ? <li>university staff</li> : ''}
                  {isOwnerOfCompany ? <li>the owner of a company valued between {companyvaluation}</li> : ''}
                </ul>
              </Typography>

              <Typography variant="h6" gutterBottom>
                I am interested in funding to support:
                <Button variant="contained" color="secondary" onClick={this.back}>
                  Edit
                </Button>
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
              </Typography>

              <Typography variant="h6" gutterBottom>
                In the areas of:
                <Button variant="contained" color="secondary" onClick={this.back}>
                  Edit
                </Button>
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
              </Typography>

            <Button variant="contained" color="secondary" onClick={this.back}>
              Print
            </Button>
            <Button variant="contained" color="secondary" onClick={this.back}>
              Email Results
            </Button>

            <Typography variant="h6" gutterBottom>
              Here are all the ways the ASU Venture Ecosystem can help:
            </Typography>

            <div className={classNames(classes.layout, classes.cardGrid)}>

              <Grid container spacing={32}>
                {ourResults.map((fund, id) => (
                  <Grid item key={id} sm={6} md={4} lg={3}>
                    <Card className={classes.card}>
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {fund['Venture Ecosystem']}
                        </Typography>
                        <Typography>
                          {fund.Description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary" href={fund.URL} target="_blank">
                          More info
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>

            </div>

            <Grid item>
              <Button variant="contained" color="secondary" onClick={this.back}>
                Previous
              </Button>
              <Button variant="contained" color="primary" onClick={this.back}>
                Start Over
              </Button>
            </Grid>

          </React.Fragment>

        )
    }
}

Results.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Results);
