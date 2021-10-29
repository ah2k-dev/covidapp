import Button from '@mui/material/Button';
import { HomeIcon } from './Home';
import history from './History';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';

const useStyles = makeStyles({
    box: {
        margin: '25px',
        padding: '10px'
    },
    grid: {
        padding: '30px',
        alignItems: 'center',
    },
    griditem:{
        backgroundColor:'#efefef'
    },

});
const btnHome = () => {
    history.push('./')
}
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
export default function Global() {
    const { box, grid,griditem } = useStyles();
    let [globalData, setGlobalData] = useState({});
    useEffect(() => {
        async function getData() {
            const res = await fetch("https://api.covid19api.com/summary");
            let data = await res.json();
            setGlobalData(data.Global);
        }
        getData();

    }, [])
    console.log(globalData)
    return (
        <div>
            <Button variant="outlined" startIcon={<HomeIcon />} onClick={btnHome}>
                Home
            </Button>
            <h1>Global Data</h1>
            <Box className={box} sx={{ flexGrow: 1 }}>

                <Grid className={grid} container spacing={2}>
                    {Object.keys(globalData).map((value, ind) => {
                        return (
                            <Grid item xs={12} md={4} key={ind}>
                                <Item className={griditem}>
                                    <h2>{value.toUpperCase()} </h2>
                                    <h4>{globalData[value]}</h4>
                                </Item>
                            </Grid>
                        )
                    })}

                </Grid>
            </Box>
        </div>
    )

}