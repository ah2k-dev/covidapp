import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { HomeIcon } from './Home';
import { Paper } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { makeStyles } from '@mui/styles';
import history from './History';
const useStyles = makeStyles({
    cont: {
        textAlign: 'center',
        height: '100%'
    },
    global_bar:{
        margin: '10px',
        maxHeight: '400px'
    },

});
const btnHome = () => {
    history.push('./')
}
export default function Graph() {
    const classes = useStyles();
    let [globalData, setGlobalData] = useState({});
    useEffect(() => {
        async function getData() {
            const res = await fetch("https://api.covid19api.com/summary");
            let data = await res.json();
            setGlobalData(data.Global);
        }
        getData();

    }, [])
    const graphData = {
        labels: ['New Confirmed', 'New Deaths', 'New Recovered',  'Total Deaths', 'Total Recoverd'],
        datasets: [
            {
                label: 'Number of cases',
                data: [globalData.NewConfirmed, globalData.NewDeaths, globalData.NewRecovered, globalData.TotalDeaths, globalData.TotalRecoverd],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 5,

            }
        ]
    }
    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        
    };
    return (
        <div>
            <Button variant="outlined" startIcon={<HomeIcon />} onClick={btnHome}>
                Home
            </Button>
            <Paper
                className={classes.cont}
                elevation={24}
            >
                <h1>Global Graph</h1>
                <Bar
                    className={classes.global_bar} 
                    data={graphData}
                    options={options}
                />
            </Paper>

        </div>
    )

}