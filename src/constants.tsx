import React from "react";


import SafetyNet from './assets/safetyNet.png';
import Mediscreen from './assets/mediscreen.png';
import PayMyBuddy from './assets/payMyBuddy.png';

export const projectInfo = [
    {
        image: SafetyNet,
        width: '400px',
        height: '350px',
        title: (<div>Safety Net</div>),
        stack: 'Spring Boot',
        description: (
            <p>
                The purpose of this application is to send information to emergency service systems.
                Your role will be to create the back-end of this new application from scratch.
                To give you more clarification on usage, here are some examples: If, for example, a fire breaks out, SafetyNet Alerts needs to provide information about the people in the burning building, such as their phone numbers.
                In the event of a hurricane alert,
                we want SafetyNet Alerts to be able to text everyone in the area. To do this, SafetyNet Alerts needs to collect the phone numbers of people living in homes near the hurricane area. In the event of a flood,
                we want to provide emergency services with specific information about people in the area.
                We need to know the potential victims, their ages and their medical history (treatments, allergies, etc.).
      </p>
        ),
        buttons: {
                name: 'code',
                link: 'https://github.com/ghazi135/P5-OC',
            }
        ,
    },
    {
        image: Mediscreen,
        width: '400px',
        height: '150px',
        title: (<div>Mediscreen</div>),

        stack: 'Spring-Boot + Angular 12 + MySql + NoSql + Docker',
        description: (
            <p>
                The purpose of this application is to send information to emergency service systems.
                Your role will be to create the back-end of this new application from scratch.
                To give you more clarification on usage, here are some examples: If, for example, a fire breaks out, SafetyNet Alerts needs to provide information about the people in the burning building, such as their phone numbers.
                In the event of a hurricane alert,
                we want SafetyNet Alerts to be able to text everyone in the area. To do this, SafetyNet Alerts needs to collect the phone numbers of people living in homes near the hurricane area. In the event of a flood,
                we want to provide emergency services with specific information about people in the area.
                We need to know the potential victims, their ages and their medical history (treatments, allergies, etc.).
            </p>
        ),
        buttons: {
            name: 'code',
            link: 'https://github.com/ghazi135/P9-OC',
        }
    },
    {
        image: PayMyBuddy,
        width: '600px',
        height: '250px',
        title: (<div>Pay My Buddy</div>),
        stack: 'Spring Boot + Thymleaf + MySql',
        description: (
            <p>
                an application that would allow customers to transfer money to manage their finances or pay their friends
             </p>
        ),
        buttons: {
            name: 'code',
            link: 'https://github.com/ghazi135/P6-OC',
        }
    }




];