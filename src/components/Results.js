import React, { Component } from 'react'
import Chart from 'chart.js';
import classes from './BarGraph.module.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/styles';

import firebase from './../Firebase.js'

const SubmitButton = styled(Button)({
  background: '#8c1d40',
  color: '#ffffff',
  border: '0',
  borderRadius: '40px',
  height: 48,
  padding: '0 10%',
  "&:hover": {
    backgroundColor: "#353535"
  },
});

const ShareButton = styled(Button)({
  background: 'none',
  border: '0',
  borderRadius: '40px',
  height: 48,
  padding: '0 10%',
});

export default class Results extends Component {
    chartRef = React.createRef();

    startOverStep = (e) => {
      e.preventDefault();
      this.props.startOver();
    }

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext('2d');
        console.log('pull in the results here and distribute the data');

        const db = firebase.firestore();
        db.collection("causes")
        .get()
        .then(querySnapshot => {
          const voteData = querySnapshot.docs.map(doc => doc.data());
          console.log(voteData); // array of cities objects

          new Chart(myChartRef, {
              type: 'bar',
              data: {
                  //Bring in data
                  labels: ['Environment', 'Arts & Culture', 'Health', 'Education', 'Colleges & Programs'],
                  datasets: [
                      {
                          label: 'Total Votes',
                          data: [voteData[3].votes, voteData[0].votes, voteData[4].votes, voteData[2].votes, voteData[1].votes],
                          backgroundColor: ['rgba(120, 190, 32, 1)', 'rgba(0, 163, 224, 1)', 'rgba(255, 127, 50, 1)', 'rgba(140, 29, 64, 1)', 'rgba(0, 0, 0, 1)']
                      },
                  ]
              },
              options: {
                  responsive: true,
                  //Customize chart options
                  title: {
                      display: true,
                      text: "",
                      fontColor: '#000000',
                  },
                  legend: {
                      display: false
                  },
                  scales: {
                      xAxes: [
                        {
                        ticks: {
                              autoSkip: false,
                              maxRotation: 0,
                              minRotation: 0,
                              fontColor: '#000000',
                          }
                        }
                      ],
                      yAxes: [
                        {
                        gridLines: {
                              display: true
                          },
                        ticks: {
                              fontColor: '#000000',
                              beginAtZero: true
                          }
                        }
                      ]
                }
              }
          });

        });
    }
    render() {
        return (
          <React.Fragment>
          <div style={{textAlign:"center", paddingBottom:"10%"}}>
            <Typography style={{fontSize:"3.0vmin"}} color="textPrimary">
              <b>Thanks for voting!</b>
            </Typography>
            <Typography style={{fontSize:"2.0vmin"}} color="textPrimary">
              <b>Vote again or share with friends</b>
            </Typography>
          </div>

          <div className={classes.graphContainer}>
              <canvas
                  id='myChart'
                  ref={this.chartRef}
              />
          </div>
          <div style={{marginTop:"20px", textAlign: "center"}}>
            <Grid container spacing = {3} justify = "center">
              <Grid item xs={6}>
              <SubmitButton onClick={this.startOverStep}>
                <Typography style={{fontSize:"2.5vmin"}} >
                  <b>Vote Again</b>
                </Typography>
              </SubmitButton>
              </Grid>
            </Grid>
            <Grid container spacing = {3} justify = "center" style={{paddingTop:"5%"}}>
              <Grid item xs={6}>
              <Typography style={{fontSize:"2.5vmin"}} >
                <b>Share This</b>
              </Typography>
              </Grid>
            </Grid>
            <Grid container spacing = {0} justify = "center">
              <Grid>
              <ShareButton href="https://www.facebook.com/sharer/sharer.php?u=asufoundation.org" target="_blank">
                <img style={{height:"auto", width:"60%"}} alt="alt tag description goes here" src="http://image.e.asu.edu/lib/fe9f13727565047b75/m/1/88f28aec-c1f8-4a29-906e-46da08334b36.png"/>
              </ShareButton>
              </Grid>
              <Grid>
              <ShareButton href="https://twitter.com/intent/tweet?url=asufoundation.org&text=Vote%20for%20your%20favorite%20cause%20now!%20%23GivingDay" target="_blank">
                <img style={{height:"auto", width:"60%"}} alt="alt tag description goes here" src="http://image.e.asu.edu/lib/fe9f13727565047b75/m/1/a2b7f299-9aa7-4e99-8b50-1d294c3ce430.png"/>
              </ShareButton>
              </Grid>
            </Grid>
          </div>
          </React.Fragment>
        )
    }
}
