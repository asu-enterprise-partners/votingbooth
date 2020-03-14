import React from 'react';
import './App.css';
import MainForm from './components/MainForm';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Container from '@material-ui/core/Container';

const styles = theme => ({
  mainUnit: {
    backgroundColor: '#ffc627',
  },
  box:{
    display: 'flex',
    flexFlow: 'column',
    height: '100%',
    backgroundColor: '#ffc627',
  },

  rowContent:{
    flex: '1',
    backgroundColor:'blue'
  }



});

class App extends React.Component {

// componentDidMount() {
//   console.log('can do something when main component is mounted here');
// }

  render() {

    const { classes } = this.props;

    return(

      <React.Fragment>
        <CssBaseline />
          <div className={classes.box}>
          <Header/>
            <Container maxWidth="md">
              <MainForm />
            </Container>
          <Footer/>
          </div>
        </React.Fragment>

      );
    };

    }

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
