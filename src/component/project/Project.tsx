import React from 'react';
import './project.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Fade, Grid, Hidden} from "@mui/material";
import {projectInfo} from "../../constants";

const ProjectCard = (props: { image: string; width: any; height: any; title: object; stack: string; description: object; buttons: any; }) => {

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
                        <img className="img-project" src={props.image} width={props.width} height={props.height}
                             alt="ghazi"/>
                        <div className="back-in-line">
                            stack :  <span className='ProjectsCardMobile-grid-right'> {props.stack} </span>
                        </div>

                        <a className="code" target='_blank'  href={props.buttons.link}><span>{props.buttons.name}</span></a>
                        <div className="line"></div>
                        <div><h1>{props.title}</h1></div>
                        {props.description}
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
                        <img className="img-project" src={props.image} alt="ghazi"/>
                        <div className="line"><h1>{props.title}</h1></div>

                        <div className="line"></div>

                        <p>
                            {props.description}
                        </p>

                    </Grid>
                </Hidden>
            </div>
        </Fade>

    );
}


const Project = () => {

    return (
        <div className="Project">
            {
                projectInfo.map(project => (
                    <ProjectCard {...project}/>
                ))
            }

        </div>

    );
}


export default Project;
