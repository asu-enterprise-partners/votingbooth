import React, { Component } from 'react';
import { styled } from '@material-ui/styles';
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
    questionBackground: {
      backgroundColor: '#ececec'
    },
    recapSection: {
      borderColor: '#8c1d40',
      borderStyle: 'dotted',
      borderWidth: '1px',
      padding: '10px'      
    },
});

const ASUButton = styled(Button)({
  background: 'black',
  border: 0,
  borderRadius: 10,
  color: '#ffc627',
  height: 48,
  padding: '0 30px',
  marginRight: '10px',
  marginBottom: '10px',
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

class StepTwo extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
        this.props.parseResults();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
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
                <ASUButtonEdit onClick={this.back}>
                  Edit
                </ASUButtonEdit>
              </Typography>

            <Typography variant="h6" gutterBottom className={classes.questionBackground}>
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
                row={false}
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
                <FormControlLabel
                  value="expansion"
                  control={<Radio color="secondary" />}
                  label="Expansion"
                  labelPlacement="end"
                />
              </RadioGroup>
            </FormControl>

            <Typography variant="h6" gutterBottom className={classes.questionBackground}>
              ... in the areas of:
            </Typography>

            <Typography variant="caption" gutterBottom>
              (Select all that apply)
            </Typography>

            <FormGroup>

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
              <ASUButton onClick={this.back}>
                Previous
              </ASUButton>
              <ASUButton onClick={this.saveAndContinue}>
                Show Results
              </ASUButton>
            </Grid>

          </React.Fragment>

        )

    }

}

StepTwo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepTwo);
