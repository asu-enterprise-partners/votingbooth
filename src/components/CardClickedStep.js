import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import { styled } from '@material-ui/styles';

const styles = theme => ({
  root: {
    margin: 0,
    padding: '25px',
  },
  iconButton: {
    color: "#000000",
  },
});

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    backgroundColor: '#ffffff',
    borderRadius: 20,
  },
  title: {
    fontSize: 30,
    color: '#000000',
  },
});

export default function CardClickedStep() {
  const classes = useStyles();
  return (
    <div style={{ display:'flex', justifyContent:'center' }}>
    <Card className={classes.card}>
      <div style={{ float:'right', margin:'20px' }}><IconButton><CancelIcon style={{fontSize:35, fill:"black"}}/></IconButton></div>
      <CardActionArea>
        <CardContent style={{ display:'flex', justifyContent:'center' }}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <b>[Default Title]</b>
        </Typography>
        </CardContent>
        <CardMedia/>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
          lacus vel augue laoreet rutrum faucibus dolor auctor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
          lacus vel augue laoreet rutrum faucibus dolor auctor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
          lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
