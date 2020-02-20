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
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  questionBackground: {
    backgroundColor: '#ececec'
  },
  closeButton: {
    position: 'absolute',
    color: theme.palette.grey[500]
  },

});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const ASUButton = styled(Button)({
  background: 'black',
  border: 0,
  borderRadius: 10,
  color: '#ffc627',
  height: 48,
  padding: '0 30px',
  "&:hover": {
    backgroundColor: "#353535"
  }
});

// const ASUCheckbox = styled(Checkbox)({
//   color: "grey",
//   '&$checked': {
//     background: "#555555",
//   },
// });

class StepOne extends Component{

  saveAndContinue = (e) => {
    e.preventDefault()
    this.props.nextStep()
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

    return(

      <React.Fragment>

      <Typography variant="h5" gutterBottom>
      To see available funding tracks, first tell us about yourself ...
      </Typography>

      <Typography variant="h6" gutterBottom className={classes.questionBackground}>
      I am:
      </Typography>

      <Typography variant="caption" gutterBottom>
      (Select all that apply)
      </Typography>

      <FormGroup>

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
        checked={community}
        onChange={this.props.handleChangeAffiliation('community')}
        value="community"
        />
      }
      label="Community"
      />

      <FormControlLabel
      control={
        <Checkbox
        checked={anyone}
        onChange={this.props.handleChangeAffiliation('anyone')}
        value="anyone"
        />
      }
      label="Anyone"
      />

      </FormGroup>

      <div>
      <Typography variant="h6" gutterBottom className={classes.questionBackground}>
      What is your company's current valuation?
      </Typography>

      <FormControl component="fieldset">
      <RadioGroup
      aria-label="position"
      name="position"
      value={companyvaluation}
      onChange={this.props.handleChangeRadioCompanyValuation}
      row={false}
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

      <Grid item>
      <ASUButton onClick={this.saveAndContinue}>
      Next
      </ASUButton>
      </Grid>

      </React.Fragment>

    )
  }
}

StepOne.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepOne);
