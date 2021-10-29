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
    griditem: {
        backgroundColor: '#efefef'
    },
    conta:{
        display: 'flex',
        flexWrap: 'wrap',
    },
    x1:{
        flex: '30%',
        textAlign: 'left',
    },
    x2:{
        textAlign: 'left',
        flex: '50%',
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
export default function Countries() {
    let [country, setCountry] = useState([]);
    useEffect(() => {
        async function getData() {
            const res = await fetch("https://api.covid19api.com/summary");
            let data = await res.json();
            setCountry(data.Countries);
        }
        getData();
    }

        , [])

    const { box, grid, griditem, conta, x1, x2 } = useStyles();
    return (
        <div>
            <Button variant="outlined" startIcon={<HomeIcon />} onClick={btnHome}>
                Home
            </Button>
                <h1>Countries Data</h1>
            <Box className={box} sx={{ flexGrow: 1 }}>
                <Grid container className={grid} spacing={2}>
                    {
                        country.map((value, index) => {
                            delete value.Premium
                            delete value.Id
                            return (
                                <Grid item xs={12} md={6}>

                                    <Item className={griditem} key={index}>
                                        <h2>{value.Country}</h2>
                                        <hr/>
                                        {
                                            Object.keys(value).map((val, ind) => {
                                                // console.log(value[val])
                                                return (
                                                    <div className={conta} key={ind}>
                                                        <div className={x1}><strong>{val}:</strong></div>
                                                        <div className={x2}>{value[val]}</div>

                                                    </div>)
                                            })
                                        }
                                    </Item>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </div>
    )

}