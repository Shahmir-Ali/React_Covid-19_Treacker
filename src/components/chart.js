import React, { useEffect, useState } from 'react';
import {Bar,Line } from 'react-chartjs-2';
// import { green } from '@material-ui/core/colors';
import '../App.css'


export const Chart = ({data: { cases, recovered, deaths }, countryData, country})=>{
  
  // displayName: 'BarExample';

  // console.log(data);
  console.log(countryData);
  
  const [dailyData, setDailyData] = useState({});
  // const [GlobalData, setGlobalData] = useState({});
  // it takes 2 thing = 1st is callback function and 2nd is array
  useEffect(() => {
      async function getData() {
        try {
          const response = await fetch(`https://corona.lmao.ninja/v2/countries/${country}`);
          const alldata = await response.json();
          console.log(alldata);
          const data = alldata.map((dailyData) => ({
            cases: dailyData.critical,
          deaths: dailyData.deaths,
          recovered: dailyData.recovered,
        }));
      console.log("chart data" + data);
        setDailyData(alldata);
      

      }
      catch (error) {
        console.log(error);
      }
    }
  getData();
  }, [country])


  const LineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ recovered }) => recovered),
        datasets: [
          {
            data: dailyData.map(({ cases }) => cases),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  // Barchart
  const Barchart = cases ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              // "rgba(0, 0, 255, 0.5)",
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [cases, recovered, deaths],
          },
        ],
      }}
      
      options={{
        legend: { display: false },
        title: { display: true, text: `Current State in ${country}`,fontColor: 'black', fontSize: '22'},
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true,
                  fontColor: 'black',
                  fontSize: 16
              },
          }],
        xAxes: [{
              ticks: {
                  fontColor: 'black',
                  fontSize: 16
              },
          }]
      } 
      }}
      
    />
  ) : null;

    return (
      <div className={"chart-container"}>
        {/* <h2>Country record are</h2> */}
        
      {countryData ? Barchart : LineChart}
      
    </div>
     
    );
}

