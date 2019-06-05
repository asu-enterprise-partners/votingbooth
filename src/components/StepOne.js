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

class StepOne extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){

        const isOwnerOfCompany = this.props.isOwnerOfCompany;
        const affiliatedwithasu = this.props.isAffiliatedWithASU;
        const anundergradstudent = this.props.isAnUndergradStudent;
        const agraduatestudent = this.props.isAGraduateStudent;
        const faculty = this.props.isFaculty;
        const universitystaff = this.props.isUniversityStaff;
        const companyvaluation = this.props.theCompanyValuation;

        return(

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
                  checked={affiliatedwithasu}
                  onChange={this.props.handleChangeAffiliation('affiliatedwithasu')}
                  value="affiliatedwithasu"
                />
              }
              label="Affiliated with ASU"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={anundergradstudent}
                  onChange={this.props.handleChangeAffiliation('anundergradstudent')}
                  value="anundergradstudent"
                />
              }
              label="An Undergrad Student"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={agraduatestudent}
                  onChange={this.props.handleChangeAffiliation('agraduatestudent')}
                  value="agraduatestudent"
                />
              }
              label="A Graduate Student"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={faculty}
                  onChange={this.props.handleChangeAffiliation('faculty')}
                  value="faculty"
                />
              }
              label="Faculty"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={universitystaff}
                  onChange={this.props.handleChangeAffiliation('universitystaff')}
                  value="universitystaff"
                />
              }
              label="University Staff"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={isOwnerOfCompany}
                  onChange={this.props.handleChangeAffiliation('ownerofcompany')}
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
                    value={companyvaluation}
                    onChange={this.props.handleChangeRadioCompanyValuation}
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
              <Button variant="contained" color="primary" onClick={this.saveAndContinue}>
                Next
              </Button>
            </Grid>

          </React.Fragment>

        )
    }
}

StepOne.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepOne);
