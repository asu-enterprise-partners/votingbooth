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
    setTimeout(() => {this.props.nextStep()}, 5000)
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
      (this.props.clickedvote === "areaofgreatestneed") //green
      ? <img style={{width:"100%"}}src="https://image.s11.sfmc-content.com/lib/fe3415717564047b721c74/m/1/084de0c1-e016-416e-823a-8a004e01478b.gif" alt="areaofgreatestneed" />
      : (this.props.clickedvote === "k12support") //blue
      ? <img style={{width:"100%"}} src="https://image.s11.sfmc-content.com/lib/fe3415717564047b721c74/m/1/e4a65925-8d49-41f0-b2fb-f08dfb706fcb.gif" alt="k12support" />
      : (this.props.clickedvote === "communityemergencysupport") //orange
      ? <img style={{width:"100%"}} src="https://image.s11.sfmc-content.com/lib/fe3415717564047b721c74/m/1/a3848dfd-6263-4d92-92ad-4b0dd4c55c57.gif" alt="communityemergencysupport" />
      : (this.props.clickedvote === "individualemergencysupport") //maroon
      ? <img style={{width:"100%"}} src="https://image.s11.sfmc-content.com/lib/fe3415717564047b721c74/m/1/c3a68a98-c6f8-4f0e-84af-96cd38bad4ea.gif" alt="individualemergencysupport" />
      : (this.props.clickedvote === "researchsupport") //grey
      ? <img style={{width:"100%"}} src="https://image.s11.sfmc-content.com/lib/fe3415717564047b721c74/m/1/434976e0-59e3-469b-b1a6-267b23fad3fd.gif" alt="researchsupport" />
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
