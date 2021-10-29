import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { createSvgIcon } from '@mui/material/utils';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import history from './History'
const useStyles = makeStyles({
    paper1: {
        alignItems: 'center',
    },
    buttons:{
        margin: '10px'
    },

});
export const HomeIcon = createSvgIcon(
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
    'Home',
);
const btnGlobal=()=>{
    history.push('/Global')
}
const btnCountries=()=>{
    history.push('/Countries')
}
const btnGraph=()=>{
    history.push('/Graph')
}
export default function Home() {
    const { paper1, buttons } = useStyles();
    return (
        <Box
            sx={{
                display: 'flex',
                padding: 1,
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 720,
                    height: 520,
                    margin: '0 auto',
                },
            }}
        >
            <Paper className={paper1}
                elevation={24}
                sx={{
                    backgroundColor: '#efefef',
                    textAlign: 'center',
                    padding: 1
                }}
            >
                <HomeIcon sx={{
                    color: 'blue',
                    fontSize: 40
                }} />
                <Typography paragraph textAlign='center' padding="30px" >
                    Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.
                    <br />The best way to prevent and slow down transmission is to be well informed about the disease and how the virus spreads. Protect yourself and others from infection by staying at least 1 metre apart from others, wearing a properly fitted mask, and washing your hands or using an alcohol-based rub frequently. Get vaccinated when it’s your turn and follow local guidance.

                    <br />The virus can spread from an infected person’s mouth or nose in small liquid particles when they cough, sneeze, speak, sing or breathe. These particles range from larger respiratory droplets to smaller aerosols. It is important to practice respiratory etiquette, for example by coughing into a flexed elbow, and to stay home and self-isolate until you recover if you feel unwell.
                </Typography>

                    <Button className={buttons} variant="contained" onClick={btnGlobal}>Global</Button>
                    <Button className={buttons} variant="contained" onClick={btnCountries}>Countries</Button>
                    <Button className={buttons} variant="contained" onClick={btnGraph}>Graphs</Button>
 

            </Paper>

        </Box>
    );
}