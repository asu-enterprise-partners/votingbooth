import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
  mainUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  mainContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 2}px 0 ${theme.spacing.unit * 6}px`,
  },
});

class StepTwo extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){

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

        return(

          <React.Fragment>

              <Typography variant="h6" gutterBottom>
                I am:
                <ul>
                  {affiliatedwithasu ? <li>affiliated with ASU</li> : ''}
                  {anundergradstudent ? <li>an undergrad student</li> : ''}
                  {agraduatestudent ? <li>a graduate student</li> : ''}
                  {faculty ? <li>a faculty member</li> : ''}
                  {universitystaff ? <li>university staff</li> : ''}
                  {isOwnerOfCompany ? <li>the owner of a company valued between {companyvaluation}</li> : ''}
                </ul>
              </Typography>

              <Grid item>
                <Button variant="contained" color="secondary" onClick={this.back}>
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
                value={interestedinfundingtosupport}
                onChange={this.props.handleChangeRadioFundingSupport}
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
                  checked={manufacturinghardware}
                  onChange={this.props.handleChangeAreas('manufacturinghardware')}
                  value="manufacturinghardware"
                />
              }
              label="Manufacturing / Hardware"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={socialsports}
                  onChange={this.props.handleChangeAreas('socialsports')}
                  value="socialsports"
                />
              }
              label="Social / Sports"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={health}
                  onChange={this.props.handleChangeAreas('health')}
                  value="health"
                />
              }
              label="Health"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={veterans}
                  onChange={this.props.handleChangeAreas('veterans')}
                  value="veterans"
                />
              }
              label="Veterans"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={media}
                  onChange={this.props.handleChangeAffiliation('media')}
                  value="media"
                />
              }
              label="Media"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={generaltechnology}
                  onChange={this.props.handleChangeAreas('generaltechnology')}
                  value="generaltechnology"
                />
              }
              label="General Technology"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={edtech}
                  onChange={this.props.handleChangeAreas('edtech')}
                  value="edtech"
                />
              }
              label="EdTech"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={internetofthings}
                  onChange={this.props.handleChangeAreas('internetofthings')}
                  value="internetofthings"
                />
              }
              label="Internet of Things"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={other}
                  onChange={this.props.handleChangeAreas('other')}
                  value="other"
                />
              }
              label="Other"
            />

            </FormGroup>

            <Grid item>
              <Button variant="contained" color="secondary" onClick={this.back}>
                Previous
              </Button>
              <Button variant="contained" color="primary" onClick={this.saveAndContinue}>
                Show Results
              </Button>
            </Grid>

          </React.Fragment>

        )

    }

}

StepTwo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepTwo);
