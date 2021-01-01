import React, { Component } from 'react';
import { Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Toolbar from './Toolbar/Toolbar';
import MenuBar from './MenuBar/MenuBar';
import Backdrop from './Backdrop/Backdrop';
import './products.css';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '120px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const ResponsiveMateriaUI = () => {
  
  const [menuBarOpen, setMenuBarOpen] = React.useState(false)
  const drawerToggleClickHandler =()=>setMenuBarOpen(!menuBarOpen)

  const backdropClickHandler = () => {
      setMenuBarOpen (false);
  };

  
    let backdrop = null;
    const classes = useStyles();

    if (menuBarOpen) {
      backdrop = <Backdrop click={backdropClickHandler} />
    }

    return (
      <div style={{height: '100%'}}>
          <Toolbar drawerClickHandler={drawerToggleClickHandler} />
          <MenuBar show={menuBarOpen} />
          {backdrop}
          <div className={classes.root}>
              <div style={{fontSize: "20px", height: "40px", textAlign:"center"}}>
                    Demo of Resonsive Materia-Ui grid
              </div>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper className={classes.paper}>100% width for all screen size</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper}>100% width for small, 50% for large screen size</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper}>100% width for small, 50% for large screen size</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Paper className={classes.paper}>50% for small, 25% for large screen</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Paper className={classes.paper}>50% for small, 25% for large screen</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Paper className={classes.paper}>50% for small, 25% for large screen</Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <Paper className={classes.paper}>50% for small, 25% for large screen</Paper>
                </Grid>
             </Grid>
           </div>
        </div>
    );
}

export default ResponsiveMateriaUI;

