import React from 'react';
import './App.css';
import { Wizard, Steps, Step } from 'react-albus';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';


const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
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
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
  checked: {},
});

const cards = [1, 2];

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
  };

  handleChangeAffiliation = name => event => {
    this.setState({ [name]: event.target.checked });
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

  render() {
    const { classes } = this.props;

    const isAffiliatedWithASU = this.state.affiliatedwithasu;
    const isAnUndergradStudent = this.state.anundergradstudent;
    const isAGraduateStudent = this.state.agraduatestudent;
    const isFaculty = this.state.faculty;
    const isUniversityStaff = this.state.universitystaff;
    const isOwnerOfCompany = this.state.ownerofcompany;
    const theCompanyValuation = this.state.companyvaluation;
    const isInterestedinFunding = this.state.interestedinfundingtosupport;
    const isManufacturingHardware = this.state.manufacturinghardware;
    const isSocialSports = this.state.socialsports;
    const isHealth = this.state.health;
    const isVeterans = this.state.veterans;
    const isMedia = this.state.media;
    const isGeneralTechnology = this.state.generaltechnology;
    const isEdTech = this.state.edtech;
    const isInternetofThings = this.state.internetofthings;
    const isOther = this.state.other;

  return (

    <React.Fragment>
      <CssBaseline />

      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            ASU Venture Ecosystem
          </Typography>
        </Toolbar>
      </AppBar>

      <main>

        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>

            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              ASU Venture Ecosystem
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" gutterBottom>
              Description of project goes here.
            </Typography>

          </div>
        </div>

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
                        value={this.state.value}
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
                          control={<Radio color="primary" />}
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
                      Next
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
                <Typography variant="h6" gutterBottom>I'm interested in funding to support {isInterestedinFunding }</Typography>
                <Typography variant="h6" gutterBottom>
                In the areas of:
                  <ul>
                  {isSocialSports ? <li>social sports</li> : ' ' }
                  {isHealth ? <li>health</li> : ' ' }
                  {isVeterans ? <li>veterans</li> : ' ' }
                  {isMedia ? <li>media</li> : ' ' }
                  {isGeneralTechnology ? <li>general technology</li> : ' ' }
                  {isEdTech ? <li>edtech</li> : ' ' }
                  {isInternetofThings ? <li>Internet of Things</li> : ' ' }
                  {isOther ? <li>other</li> : ' ' }
                  </ul>
                </Typography>

                  <Grid item>
                    <Button variant="contained" color="secondary" onClick={previous}>
                      Edit
                    </Button>
                  </Grid>
                  <p>print option</p>
                  <p>email input and send option</p>
                  <h2>Here are all the ways the ASU Venture Ecosystem can help:</h2>
                  <p>results go here</p>

                  <div className={classNames(classes.layout, classes.cardGrid)}>

                    <Grid container spacing={40}>
                      {cards.map(card => (
                        <Grid item key={card} sm={6} md={4} lg={3}>
                          <Card className={classes.card}>
                            <CardMedia
                              className={classes.cardMedia}
                              image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                              title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                              <Typography gutterBottom variant="h5" component="h2">
                                Fund Title
                              </Typography>
                              <Typography>
                                Fund details.
                              </Typography>
                            </CardContent>
                            <CardActions>
                              <Button size="small" color="primary">
                                More info ...
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

      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          ASU Venture Ecosystem
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Description of project goes here.
        </Typography>
      </footer>

    </React.Fragment>

  );
};

}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
