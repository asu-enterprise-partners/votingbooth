import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    margin: 0,
    padding: '25px',
  },
  closeButton: {
    position: 'absolute',
    right: '25px',
    top: '25px',
    color: theme.palette.grey[500],
  },
});

class GraphicDisplayStep extends Component {

  timeOut(){
    setTimeout(() => {this.props.nextStep()}, 8000)
  }

  submitResults = (e) => {
    e.preventDefault()
    this.props.skipStep()
  }

  choiceOfUser = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  environmentChoice = (e) => {
    e.preventDefault()
    this.props.environmentChoice()
    this.props.nextStep()
  }

  artscultureChoice = (e) => {
    e.preventDefault()
    this.props.artscultureChoice()
    this.props.nextStep()
  }

  healthChoice = (e) => {
    e.preventDefault()
    this.props.healthChoice()
    this.props.nextStep()
  }

  educationChoice = (e) => {
    e.preventDefault()
    this.props.educationChoice()
    this.props.nextStep()
  }

  collegeChoice = (e) => {
    e.preventDefault()
    this.props.collegeChoice()
    this.props.nextStep()
  }

  render(){
    return(
    <React.Fragment>
    <div style={{textAlign:"center"}}>
    {
      (this.props.clickedvote === "environment")
      ? <img style={{width:"75%"}}src="http://image.e.asu.edu/lib/fe9f13727565047b75/m/1/35862765-f941-407b-ba01-b2d2905136ae.gif" alt="environment gif" />
      : (this.props.clickedvote === "artsculture")
        ? <img style={{width:"75%"}} src="http://image.e.asu.edu/lib/fe9f13727565047b75/m/1/3a14ce79-1d23-4f5f-a79a-7a36859d1790.gif" alt="artscommunity gift" />
        : (this.props.clickedvote === "health")
          ? <img style={{width:"75%"}} src="http://image.e.asu.edu/lib/fe9f13727565047b75/m/1/7534830c-6b07-4e45-8858-c9c3bcc8b54f.gif" alt="health gif" />
          : (this.props.clickedvote === "education")
            ? <img style={{width:"75%"}} src="http://image.e.asu.edu/lib/fe9f13727565047b75/m/1/76fc1630-c4d6-49e2-ba73-c8ef5ecd3120.gif" alt="education gif" />
            : (this.props.clickedvote === "collegesprograms")
              ? <img style={{width:"75%"}} src="http://image.e.asu.edu/lib/fe9f13727565047b75/m/1/512244bd-6d35-458c-98a8-d69f06f6e5bf.gif" alt="collegesprograms gif" />
              : null
    }
    </div>
      {this.timeOut()}
    </React.Fragment>
    )
  }
}

GraphicDisplayStep.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GraphicDisplayStep);
