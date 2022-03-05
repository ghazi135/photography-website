import React from 'react';
import './project.css';
// import data from '../../data/projectData.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fade, Grid} from "@mui/material";

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

                <Grid container sx={{
                    mx: 'auto',
                    color: 'white',
                    backgroundColor: 'none',
                    boxShadow: '10px 5px 5px black',
                    border: 1,
                    maxWidth: '60%',
                    fontSize: 14,
                    padding: '20px',
                    borderColor: 'white',
                    justifyContent: 'center',
                    borderRadius: 2,
                    overflow: 'auto'
                }}>
                    <Grid item xs>
                        Word of the Day
                        adjective
                        Word of the Day
                        adjective
                        Word of the Day
                        adjective
                        Word of the Day
                        adjective
                        Word of the Day
                        adjective Word of the Day
                        adjective
                    </Grid>
                    <div className="sep-text">
                        '
                    </div>
                    <Grid item xs>
                        Word of the Day
                        adjective
                        Word of the Day
                        adjective
                        Word of the Day
                        adjective
                        Word of the Day
                        adjective
                        Word of the Day
                        adjective Word of the Day
                        adjective                    </Grid>
                </Grid>
            </div>
        </Fade>

);
}

export default Project;
