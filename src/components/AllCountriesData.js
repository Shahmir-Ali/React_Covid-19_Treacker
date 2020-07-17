import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import {Chart} from './chart';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
        // maxWidth: 1000,
        marginTop: 50,
    },
    media: {
      height: 140,
    },
    title: {
    // color: '#3f51b5',
    color: 'black',
    text: 'uppercase',
    },
    paper: {
        
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      
        // padding: '1rem',
        // marginTop: 50,
        // width: '95%',
        // height: 350,
    },
    green: {
       color: 'green',
    //    backgroundColor: 'green',
    },
    palette: {
        primary: 'blue',
        secondary: 'pink',
      },
      img : {
        width: '5rem',
      },
      bottom1: {
        borderBottom: '10px solid rgba(0, 0, 255, 0.5)', 
      },
      bottom2: {
        borderBottom: '10px solid rgba(0, 255, 0, 0.5)', 
      },
      bottom3: {
        // borderBottom: '10px solid rgba(255, 0, 0, 0.5);', 
        borderBottom: '10px solid #d50000',
      }
}));


// export default function InfoPanel() {
export const AllCountriesData = ({ country, setcountry }) => {
    
    console.log(country);
    const [data, setData] = useState({});
    const [GlobalData, setGlobalData] = useState({});
    // it takes 2 thing = 1st is callback function and 2nd is array
    useEffect(() => {
        async function getData() {
            const response = await fetch(`https://corona.lmao.ninja/v2/countries/${country}`);
            let data = await response.json();
            let { cases, recovered, deaths, lastUpdate } = data;
            setData({ cases, recovered, deaths, lastUpdate });
            console.log(data);
            setGlobalData(data);

        }
    getData();
    }, [country])

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={4} >
                        <Grid item xs={12} sm={4}>
                            <Paper className={classes.paper} elevation={5}> 
                            <img src="http://covid19-virus-tracker.surge.sh/static/media/infected.4abefb64.svg" alt="covid-19" className={classes.img}/>
                            <h3 className={classes.title}>Infected</h3>
                            <h3>{GlobalData.cases}</h3>
                            <div className={classes.progress}>
                             
                            <div className={classes.bottom1}></div>
                            </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Paper className={classes.paper} elevation={5}>
                              <img src="http://covid19-virus-tracker.surge.sh/static/media/recovered.05cc8e67.svg" alt="covid-19" className={classes.img}/>
                             
                            <h3 className={classes.title}>RECOVERIES</h3>
                            <h3>{GlobalData.recovered}</h3>
                            <div className={classes.progress}>
                            <div className={classes.bottom2}></div>
                          
                            </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Paper className={classes.paper} elevation={5}> 
                            <img src="http://covid19-virus-tracker.surge.sh/static/media/deaths.df846e3e.svg" alt="covid-19" className={classes.img}/>
                            
                            <h3 className={classes.title}>DEATHS</h3>
                            <h3>{GlobalData.deaths}</h3>
                            <div className={classes.progress}>
                            {/* <LinearProgress variant="determinate" /> */}
                            <div className={classes.bottom3}></div>
                            
                            </div>
                            </Paper>
                            
                        </Grid>
                        <Grid item xs={12} sm={12}>
                        <Chart data={data} countryData={GlobalData} country={country}/>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                         <p>All rights Reserved by <a href="https://muhammadhasnain.tk">Muhammad Hasnain </a></p>
                        </Grid>
             </Grid>
        </div>
    );
}



















