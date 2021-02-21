import React, { Component } from 'react'
import Chart from 'chart.js';
import classes from './BarGraph.module.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/styles';
import firebase from './../Firebase.js'
import 'chartjs-plugin-labels'

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
              type: 'pie',
              data: {
                labels: ['Protecting the planet', 'Conducting research for the public good', 'Advancing student access', 'Serving our community', 'Creating equity in higher education'],
                datasets:[{
                  data: [voteData[0].votes, voteData[1].votes, voteData[2].votes, voteData[3].votes, voteData[4].votes],
                  backgroundColor: ['rgba(120, 190, 32, 1)', 'rgba(0, 163, 224, 1)', 'rgba(255, 127, 50, 1)', 'rgba(140, 29, 64, 1)', 'rgba(92, 102, 112, 1)'],
                }],

              },
              options: {
                  maintainAspectRatio: false,
                  responsive: true,
                  //Customize chart options
                  tooltips:{
                    custom : function(tooltipModel){
                      tooltipModel.opacity = 0;
                    }
                  },
                  "hover": {
                    "animationDuration": 0
                  },
                  title: {
                      display: false,
                      text: "",
                      fontColor: '#000000',
                  },
                  legend: {
                      onClick: function(e){
                        e.stopPropagation();
                      },
                      display: true,
                      position: 'bottom',
                      labels: {
                        fontSize: 20,
                        fontColor: 'black',

                      },
                  },
                  elements:{
                    arc:{
                      borderWidth: 0,
                    }
                  },
                  plugins: {
                    labels:{
                      render: 'value',
                      fontSize: 40,
                      fontColor: '#ffffff',
                      textShadow: true,
                      shadowBlur: 3,
                    }
                  },
              }
          });

        });
    }
    render() {
        return (
          <React.Fragment>
          <div style={{textAlign:"center", paddingBottom:"5%"}}>
            <Typography style={{fontSize:"5.5vmin"}} color="textPrimary">
              <b>Thanks for voting!</b>
            </Typography>
            <Typography style={{fontSize:"3.5vmin"}} color="textPrimary">
              <b>Vote again or share with friends</b>
            </Typography>
          </div>

          <div style={{marginTop:"2%", height:"200px !important" }} className={classes.graphContainer}>
              <canvas style={{width:"400px", height: "400px"}}
                  id='myChart'
                  ref={this.chartRef}
              />
          </div>

          <div style={{marginTop:"20px", textAlign: "center"}}>
            <Grid container spacing = {3} justify = "center">
              <Grid item xs={6}>
              <SubmitButton onClick={this.startOverStep}>
                <Typography variant="h5">
                  <b>Vote Again</b>
                </Typography>
              </SubmitButton>
              </Grid>
            </Grid>
            <Grid container spacing = {3} justify = "center" style={{paddingTop:"5%"}}>
              <Grid item xs={6}>
              <Typography style={{fontSize:"3.5vmin"}} >
                <b>Share This</b>
              </Typography>
              </Grid>
            </Grid>
            <Grid container spacing = {0} justify = "center">
              <Grid>
              <ShareButton href="https://www.facebook.com/sharer/sharer.php?u=http://sdgdvote.com/" target="_blank">
                <img style={{height:"auto", width:"80%"}} alt="share on facebook" src="https://image.s11.sfmc-content.com/lib/fe3415717564047b721c74/m/1/8322dcab-9e1c-4db4-be6f-b4242b472ca2.png"/>
              </ShareButton>
              </Grid>
              <Grid>
              <ShareButton href="https://twitter.com/intent/tweet?url=sdgdvote.com&text=Today%20I'm%20celebrating%20%23SunDevilGivingDay%20at%20ASU.%20This%20day%20gives%20me%20a%20chance%20to%20support%20what%20I'm%20passionate%20about%20and%20be%20a%20part%20of%20real%20change.%20I've%20voted%20for%20the%20cause%20I%20believe%20in%20—%20join%20me%20and%20vote%20now!%20sdgdvote.com" target="_blank">
                <img style={{height:"auto", width:"80%"}} alt="share on twitter" src="https://image.s11.sfmc-content.com/lib/fe3415717564047b721c74/m/1/82115465-f2d4-4d9e-bee1-94976b3958bb.png"/>
              </ShareButton>
              </Grid>
            </Grid>
          </div>
          </React.Fragment>
        )
    }
}
