import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Step } from 'react-albus';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({

});

class Step1 extends Component {
  render() {
    const { classes } = this.props;
    return (
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

            {this.props.isOwnerOfCompany ? (

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
    )
  }
}

export default withStyles(styles)(Step1);
