import React from 'react';
import './App.css';

import { Wizard, Steps, Step } from 'react-albus';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';

import Nav from './components/Nav.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

const styles = theme => ({
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  mainUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  mainContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 2}px 0 ${theme.spacing.unit * 6}px`,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    // [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
    //   width: 1100,
    //   marginLeft: 'auto',
    //   marginRight: 'auto',
    // },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  checked: {},
});

const ourData = require('./Venture_Ecosystem_Data.json');
console.log(ourData);

class App extends React.Component {

  state = {
    affiliatedwithasu: false,
    anundergradstudent: false,
    agraduatestudent: false,
    faculty: false,
    universitystaff: false,

    ownerofcompany: false,
    companyvaluation: false,

    interestedinfundingtosupport: false,
    manufacturinghardware: false,
    socialsports: false,
    health: false,
    veterans: false,
    media: false,
    generaltechnology: false,
    edtech: false,
    internetofthings: false,
    other: false,

    results: ourData,
  };

  handleChangeAffiliation = name => event => {
    this.setState({ [name]: event.target.checked });
    console.log(name);
    // if (this.state.affiliatedwithasu === true) {
    //   const parsedData = ourData.filter(fund => fund.Founders === 'ASU-Affiliated');
    //   console.log(parsedData);
    //   this.setState({
    //     results: parsedData
    //   })
    // } else if (name === 'anundergradstudent') {
    //   const parsedData = ourData.filter(fund => fund.Founders === 'Available to Anyone');
    //   console.log(parsedData);
    //   this.setState({
    //     results: parsedData
    //   })
    // } else {
    //   this.setState({
    //     results: ourData
    //   })
    // }
  };

  handleChangeRadioCompanyValuation = event => {
    this.setState({ companyvaluation: event.target.value });
  };

  handleChangeRadioFundingSupport = event => {
    this.setState({ interestedinfundingtosupport: event.target.value });
  };

  handleChangeAreas = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  componentDidMount() {
    console.log('can do something when main component is mounted here');
  }

  handleBlakkow () {
    console.log('yoooo blakkow');
  };

  render() {

    const { classes } = this.props;

    const isAffiliatedWithASU = this.state.affiliatedwithasu;
    const isAnUndergradStudent = this.state.anundergradstudent;
    const isAGraduateStudent = this.state.agraduatestudent;
    const isFaculty = this.state.faculty;
    const isUniversityStaff = this.state.universitystaff;

    const isOwnerOfCompany = this.state.ownerofcompany;
    const theCompanyValuation = this.state.companyvaluation;

    const theInterestedInFundingToSupport = this.state.interestedinfundingtosupport;

    const isManufacturingHardware = this.state.manufacturinghardware;
    const isSocialSports = this.state.socialsports;
    const isHealth = this.state.health;
    const isVeterans = this.state.veterans;
    const isMedia = this.state.media;
    const isGeneralTechnology = this.state.generaltechnology;
    const idEdTech = this.state.edtech;
    const isInternetOfThings = this.state.internetofthings;
    const isOther = this.state.other;

    const ourResults = this.state.results;

  return (

    <React.Fragment>
      <CssBaseline />

      <Nav/>

      <main>

        <Header/>

        <div className={classes.mainUnit}>
          <div className={classes.mainContent}>

        <Wizard>
          <Steps>

            <Step
            id="first"
            render={({ next }) => (
              <React.Fragment>

                <Typography variant="h4" gutterBottom>
                  To see available funding tracks, first tell us about yourself ...
                </Typography>

                <Typography variant="h6" gutterBottom>
                  I am:
                </Typography>

                <Typography variant="caption" gutterBottom>
                  (Select all that apply)
                </Typography>

                <FormGroup row>

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.affiliatedwithasu}
                      onChange={this.handleChangeAffiliation('affiliatedwithasu')}
                      value="affiliatedwithasu"
                    />
                  }
                  label="Affiliated with ASU"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.anundergradstudent}
                      onChange={this.handleChangeAffiliation('anundergradstudent')}
                      value="anundergradstudent"
                    />
                  }
                  label="An Undergrad Student"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.agraduatestudent}
                      onChange={this.handleChangeAffiliation('agraduatestudent')}
                      value="agraduatestudent"
                    />
                  }
                  label="A Graduate Student"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.faculty}
                      onChange={this.handleChangeAffiliation('faculty')}
                      value="faculty"
                    />
                  }
                  label="Faculty"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.universitystaff}
                      onChange={this.handleChangeAffiliation('universitystaff')}
                      value="universitystaff"
                    />
                  }
                  label="University Staff"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.ownerofcompany}
                      onChange={this.handleChangeAffiliation('ownerofcompany')}
                      value="ownerofcompany"
                    />
                  }
                  label="An Owner of a Company"
                />

                </FormGroup>

                  {isOwnerOfCompany ? (

                  <div>
                    <Typography variant="h6" gutterBottom>
                      Congratulations on owning a company.<br />What is its current valuation?
                    </Typography>

                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label="position"
                        name="position"
                        value={this.state.companyvaluation}
                        onChange={this.handleChangeRadioCompanyValuation}
                        row
                      >
                        <FormControlLabel
                          value="$0-500K"
                          control={<Radio color="secondary" />}
                          label="$0-500K"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="$500K-1mil"
                          control={<Radio color="secondary" />}
                          label="$500K-1mil"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="$1-3mil"
                          control={<Radio color="secondary" />}
                          label="$1-3mil"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="$3-15mil"
                          control={<Radio color="secondary" />}
                          label="$3-15mil"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="$15-75mil"
                          control={<Radio color="secondary" />}
                          label="$15-75mil"
                          labelPlacement="end"
                        />
                        <FormControlLabel
                          value="$75-500mil"
                          control={<Radio color="secondary" />}
                          label="$75-500mil"
                          labelPlacement="end"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>

                  ) : (
                    <div></div>
                  )}

                <Grid item>
                  <Button variant="contained" color="primary" onClick={next}>
                    Next
                  </Button>
                </Grid>

              </React.Fragment>
            )}
            />

            <Step
              id="second"
              render={({ next, previous }) => (
                <React.Fragment>

                    <Typography variant="h6" gutterBottom>
                      I am:
                      <ul>
                        {isAffiliatedWithASU ? <li>affiliated with ASU</li> : ''}
                        {isAnUndergradStudent ? <li>an undergrad student</li> : ''}
                        {isAGraduateStudent ? <li>a graduate student</li> : ''}
                        {isFaculty ? <li>a faculty member</li> : ''}
                        {isUniversityStaff ? <li>university staff</li> : ''}
                        {isOwnerOfCompany ? <li>the owner of a company valued between {theCompanyValuation}</li> : ''}
                      </ul>
                    </Typography>

                    <Grid item>
                      <Button variant="contained" color="secondary" onClick={previous}>
                        Edit
                      </Button>
                    </Grid>

                  <Typography variant="h6" gutterBottom>
                    I'm interested in funding to support:
                  </Typography>

                  <Typography variant="caption" gutterBottom>
                    (Select one)
                  </Typography>

                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="position"
                      name="position"
                      value={this.state.interestedinfundingtosupport}
                      onChange={this.handleChangeRadioFundingSupport}
                      row
                    >
                      <FormControlLabel
                        value="ideationtoprototyping"
                        control={<Radio color="secondary" />}
                        label="Ideation to Prototyping"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="ideationtobusinessformation"
                        control={<Radio color="secondary" />}
                        label="Ideation to Business Formation"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="prototypetobusinessformation"
                        control={<Radio color="secondary" />}
                        label="Prototype to Business Formation"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="prototypetocustomeracquisition"
                        control={<Radio color="secondary" />}
                        label="Prototype to Customer Acquisition"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="customeracquisitionandemerginggrowth"
                        control={<Radio color="secondary" />}
                        label="Customer Acquisition &amp; Emerging Growth"
                        labelPlacement="end"
                      />
                    </RadioGroup>
                  </FormControl>

                  <Typography variant="h6" gutterBottom>
                    ... in the areas of:
                  </Typography>

                  <Typography variant="caption" gutterBottom>
                    (Select all that apply)
                  </Typography>

                  <FormGroup row>

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.manufacturinghardware}
                        onChange={this.handleChangeAreas('manufacturinghardware')}
                        value="manufacturinghardware"
                      />
                    }
                    label="Manufacturing / Hardware"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.socialsports}
                        onChange={this.handleChangeAreas('socialsports')}
                        value="socialsports"
                      />
                    }
                    label="Social / Sports"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.health}
                        onChange={this.handleChangeAreas('health')}
                        value="health"
                      />
                    }
                    label="Health"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.veterans}
                        onChange={this.handleChangeAreas('veterans')}
                        value="veterans"
                      />
                    }
                    label="Veterans"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.media}
                        onChange={this.handleChangeAffiliation('media')}
                        value="media"
                      />
                    }
                    label="Media"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.generaltechnology}
                        onChange={this.handleChangeAreas('generaltechnology')}
                        value="generaltechnology"
                      />
                    }
                    label="General Technology"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.edtech}
                        onChange={this.handleChangeAreas('edtech')}
                        value="edtech"
                      />
                    }
                    label="EdTech"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.internetofthings}
                        onChange={this.handleChangeAreas('internetofthings')}
                        value="internetofthings"
                      />
                    }
                    label="Internet of Things"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.other}
                        onChange={this.handleChangeAreas('other')}
                        value="other"
                      />
                    }
                    label="Other"
                  />

                  </FormGroup>

                  <Grid item>
                    <Button variant="contained" color="secondary" onClick={previous}>
                      Previous
                    </Button>
                    <Button variant="contained" color="primary" onClick={next}>
                      Next parse results
                    </Button>
                  </Grid>

                </React.Fragment>
              )}
            />

            <Step
              id="summary"
              render={({ previous }) => (
                <React.Fragment>

                    <Typography variant="h6" gutterBottom>
                      I am (edit button needed):
                      <ul>
                        {isAffiliatedWithASU ? <li>affiliated with ASU</li> : ''}
                        {isAnUndergradStudent ? <li>an undergrad student</li> : ''}
                        {isAGraduateStudent ? <li>a graduate student</li> : ''}
                        {isFaculty ? <li>a faculty member</li> : ''}
                        {isUniversityStaff ? <li>university staff</li> : ''}
                        {isOwnerOfCompany ? <li>the owner of a company valued between {theCompanyValuation}</li> : ''}
                      </ul>
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                      I am interested in funding to support (edit button needed):
                      <ul>
                        {(function() {
                                switch(theInterestedInFundingToSupport) {
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
                      In the areas of (edit button needed):
                      <ul>
                        {isManufacturingHardware ? <li>Manufacturing / Hardware</li> : ''}
                        {isSocialSports ? <li>Social / Sports</li> : ''}
                        {isHealth ? <li>Health</li> : ''}
                        {isVeterans ? <li>Veterans</li> : ''}
                        {isMedia ? <li>Media</li> : ''}
                        {isGeneralTechnology ? <li>General Technology</li> : ''}
                        {idEdTech ? <li>EdTech</li> : ''}
                        {isInternetOfThings ? <li>Internet of Things</li> : ''}
                        {isOther ? <li>Other</li> : ''}
                      </ul>
                    </Typography>

                  <p>print option</p>
                  <p>email input and send option</p>

                  <Typography variant="h6" gutterBottom>
                    Here are all the ways the ASU Venture Ecosystem can help:
                  </Typography>

                  <div className={classNames(classes.layout, classes.cardGrid)}>

                    <Grid container spacing={32}>
                      {ourResults.map((fund, index) => (
                        <Grid item key={index} sm={6} md={4} lg={3}>
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
                    <Button variant="contained" color="secondary" onClick={previous}>
                      Previous
                    </Button>
                    <Button variant="contained" color="primary">
                      Start Over
                    </Button>
                  </Grid>

                </React.Fragment>
              )}
            />

          </Steps>
        </Wizard>

        </div>
      </div>

      </main>

      <Footer/>

    </React.Fragment>

  );
};

}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
