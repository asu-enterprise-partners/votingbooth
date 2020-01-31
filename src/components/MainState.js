import React, { Component } from 'react';
import { styled } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import NatureIcon from '@material-ui/icons/Nature';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    margin: 0,
    padding:'25px',
  },
  closeButton: {
    position: 'absolute',
    right: '25px',
    top: '25px',
    color: theme.palette.grey[500],
  },
});

const ContentButton = styled(Button)({
  background: '#F1F1F1',
  border: 'solid 10px #ffffff',
  borderRadius: '20px',
  height: '200px',
  width: '200px',
  padding: '0 30px',
  "&:hover": {
    backgroundColor: "#ACACAC"
  },
  fontSize: '110%',
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
    padding:'25px',
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding:'25px',
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
    <Grid container spacing ={24} justify = "center" >
      <Grid item xs={4} align = "center" >
        <ContentButton onClick={handleClickOpen}  >
        <Typography variant="h6" gutterBottom  >
          <b>Environment</b>
        </Typography>
        </ContentButton>
      </Grid>
      <Grid item xs={4} align = "center">
        <ContentButton onClick={handleClickOpen}>
        <Typography variant="h6" gutterBottom  >
          <b>Arts & Culture</b>
        </Typography>
        </ContentButton>
      </Grid>
      <Grid item xs={4} align = "center">
        <ContentButton onClick={handleClickOpen}>
        <Typography variant="h6" gutterBottom  >
          <b>Health</b>
        </Typography>
        </ContentButton>
      </Grid>
    </Grid>
    <Grid container spacing ={24} justify = "center">
      <Grid item xs={4} align = "center">
        <ContentButton onClick={handleClickOpen}>
        <Typography variant="h6" gutterBottom  >
          <b>Education</b>
        </Typography>
        </ContentButton>
      </Grid>
      <Grid item xs={4} align = "center">
        <ContentButton onClick={handleClickOpen}>
        <Typography variant="h6" gutterBottom  >
          <b>Colleges & Programs</b>
        </Typography>
        </ContentButton>
      </Grid>
      <Grid item xs={4} align = "center">
        <ContentButton onClick={handleClickOpen}>
        <Typography variant="h6" gutterBottom  >
          <b>Other</b>
        </Typography>
        </ContentButton>
      </Grid>
    </Grid>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
            lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
            scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla.
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
