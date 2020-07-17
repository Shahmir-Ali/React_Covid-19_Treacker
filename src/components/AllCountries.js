import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import { NativeSelect, FormControl } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import { AllCountriesData } from './AllCountriesData';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 700,
        margin: '0 auto',
        marginTop: 50,
        
    },
    title: {
    color: '#3f51b5',
    text: 'uppercase',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    dropdown: {
        fontSize: '3rem',
        fontWeight: 'bold',
        // width: '100%',
        marginBottom: '30px !important',
    },
    h1: {
        color: 'black',
    },
    
}));

// export default function InfoPanel() {
export const AllCountries = () => {
    const [country, setcountry] = useState("pakistan");
    const [globalData, setglobalData] = useState([{}]);
    // it takes 2 thing = 1st is callback function and 2nd is array
    useEffect(() => {
        async function getData() {
            // const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
            const response = await fetch("https://corona.lmao.ninja/v2/countries/");
            
            let data = await response.json();

            // console.log(data);
            // console.log(data[0].country);
            // delete data.results[0].source;
            // setglobalData(Object.values(data.countryitems[0]));
            setglobalData(data);
            // console.log(data.countryitems[0][1]);

        }
        getData();
    }, [setglobalData])

    const classes = useStyles();

    return (
        <div>
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={8}>
                <Grid container justify="center">
            
                    <Grid item>
                    {/* <Paper className={classes.paper} /> */}
                    <FormControl  className={classes.dropdown}>
                        <NativeSelect id="select" onChange={(e)=> setcountry(e.target.value)}>
                            {/* console.log(globalData); */}
                        <option value={country} >{country}</option>
                            {Object.keys(globalData).map((key, ind) => {
                                return(
                            <option key={ind} value={globalData[key].country}>{globalData[key].country}</option>
                                )
                            })}
                            
                        
                            </NativeSelect>
                    </FormControl>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
               
                    
                    <h1 className={classes.h1}>{country} Covid-19 Situation</h1>
                        <AllCountriesData country={country} setcountry={setcountry}/>
                    
            </Grid>

            
    </Grid>

       </div>
    );
}
