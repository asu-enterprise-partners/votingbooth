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

  areaofgreatestneedChoice = (e) => {
    e.preventDefault()
    this.props.areaofgreatestneedChoice()
    this.props.nextStep()
  }

  k12supportChoice = (e) => {
    e.preventDefault()
    this.props.k12supportChoice()
    this.props.nextStep()
  }

  communityemergencysupportChoice = (e) => {
    e.preventDefault()
    this.props.communityemergencysupportChoice()
    this.props.nextStep()
  }

  individualemergencysupportChoice = (e) => {
    e.preventDefault()
    this.props.individualemergencysupportChoice()
    this.props.nextStep()
  }

  researchsupportChoice = (e) => {
    e.preventDefault()
    this.props.researchsupportChoice()
    this.props.nextStep()
  }

  render(){
    return(
    <React.Fragment>
    <div style={{textAlign:"center"}}>
    {
      (this.props.clickedvote === "areaofgreatestneed")
      ? <img style={{width:"75%"}}src="http://image.e.asu.edu/lib/fe9f13727565047b75/m/1/35862765-f941-407b-ba01-b2d2905136ae.gif" alt="areaofgreatestneed" />
      : (this.props.clickedvote === "k12support")
      ? <img style={{width:"75%"}} src="http://image.e.asu.edu/lib/fe9f13727565047b75/m/1/3a14ce79-1d23-4f5f-a79a-7a36859d1790.gif" alt="k12support" />
      : (this.props.clickedvote === "communityemergencysupport")
      ? <img style={{width:"75%"}} src="http://image.e.asu.edu/lib/fe9f13727565047b75/m/1/7534830c-6b07-4e45-8858-c9c3bcc8b54f.gif" alt="communityemergencysupport" />
      : (this.props.clickedvote === "individualemergencysupport")
      ? <img style={{width:"75%"}} src="http://image.e.asu.edu/lib/fe9f13727565047b75/m/1/76fc1630-c4d6-49e2-ba73-c8ef5ecd3120.gif" alt="individualemergencysupport" />
      : (this.props.clickedvote === "researchsupport")
      ? <img style={{width:"75%"}} src="http://image.e.asu.edu/lib/fe9f13727565047b75/m/1/512244bd-6d35-458c-98a8-d69f06f6e5bf.gif" alt="researchsupport" />
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
