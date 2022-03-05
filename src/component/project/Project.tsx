import React from 'react';
import './project.css';
// import data from '../../data/projectData.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, CardActions, CardContent, Fade, Typography} from "@mui/material";

function Project() {
    // const DisplayData=data.map(
    //     (project)=>{
    //         return(
    //             <tr>
    //                 <td>{project.technologies}</td>
    //             </tr>
    //         )
    //     }
    // )
    return (
        <Fade in timeout={{ enter: 1200 }}>
            <div className="Project">
                {/*{DisplayData}*/}
            <Card sx={{
                mx: 'auto',
                color: 'white',
                backgroundColor: '#2a2b2e',
                boxShadow: '10px 5px 5px black',
                width:'30rem',
                height: '30rem',
                border: 1,
                fontSize: 14,
                borderColor: 'coral',
                justifyContent: 'center',
                borderRadius: 2,
                overflow: 'auto'
            }}>
                <CardContent>
                    <Typography >
                        Word of the Day
                        adjective
                        <span className="divider"/>
                        Word of the Day
                        adjective
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Code</Button>
                </CardActions>
            </Card>
            </div>
        </Fade>

);
}

export default Project;
