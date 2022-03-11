import React from 'react';
import './Career.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Fade, Grid, Hidden} from "@mui/material";

function Career() {
    return (
        <Fade in timeout={{enter: 1200}}>

            <div className="ProjectCard">
                <Hidden mdDown>

                    <Grid container sx={{
                        mx: 'auto',
                        color: 'white',
                        backgroundColor: 'none',
                        boxShadow: '15px 10px 10px black',
                        border: 1,
                        maxWidth: '40%',
                        fontSize: 14,
                        justifyContent: 'center',
                        padding: '8px',
                        borderColor: 'white',
                        borderRadius: 2,
                        overflow: 'auto'
                    }}>

                        <div><h1>experience</h1></div>
                        <div className="line"></div>
                        list des experience
                    </Grid>
                    <br/>

                </Hidden>

                <Hidden mdUp>
                    <Grid container sx={{
                        mx: 'auto',
                        color: 'white',
                        backgroundColor: 'none',
                        boxShadow: '10px 5px 5px black',
                        border: 1,
                        maxWidth: '90%',
                        fontSize: 14,
                        justifyContent: 'center',
                        padding: '8px',
                        borderColor: 'white',
                        borderRadius: 2,
                        overflow: 'auto'
                    }}>
                        <div><h1>experience</h1></div>
                        <div className="line"></div>
                        list des experience
                    </Grid>
                    <Grid container sx={{
                        mx: 'auto',
                        color: 'white',
                        backgroundColor: 'none',
                        boxShadow: '10px 5px 5px black',
                        border: 1,
                        maxWidth: '90%',
                        fontSize: 14,
                        justifyContent: 'center',
                        padding: '8px',
                        borderColor: 'white',
                        borderRadius: 2,
                        overflow: 'auto'
                    }}>
                        <div><h1>experience</h1></div>
                        <div className="line"></div>
                        list des experience
                    </Grid>

                </Hidden>

            </div>

        </Fade>
    );
}

export default Career;
