import React from 'react';
import './project.css';
// import data from '../../data/projectData.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Divider, Fade, Grid} from "@mui/material";
import picture from "../../assets/safetyNet.png";

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
                    justifyContent: 'center',
                    padding: '10px',
                    borderColor: 'white',
                    borderRadius: 2,
                    overflow: 'auto'
                }}>

                        <img className="img-project" src={picture} alt="ghazi"/>

                    <div className="line"></div>

                    <p>
                        The purpose of this application is to send information to emergency service systems. Your role will be to create the back-end of this new application from scratch.
                        To give you more clarification on usage, here are some examples:
                        If, for example, a fire breaks out, SafetyNet Alerts needs to provide information about the people in the burning building, such as their phone numbers.
                        In the event of a hurricane alert, we want SafetyNet Alerts to be able to text everyone in the area. To do this, SafetyNet Alerts needs to collect the phone numbers of people living in homes near the hurricane area.
                        In the event of a flood, we want to provide emergency services with specific information about people in the area. We need to know the potential victims, their ages and their medical history (treatments, allergies, etc.).
                    </p>

                </Grid>
            </div>
        </Fade>

);
}

export default Project;
