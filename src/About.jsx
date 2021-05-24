import React from 'react';
import Comman from './Comman';
import web from '../src/images/2.jpg'

const About = () => {
    return (
        <>
        <Comman 
            title="We started our work "
            brandname="Completed Decade"
            disc="we establised our company in 2017 as webdesign & Develpment company"
            butLink="/contact"
            buttonCon="Contact Now 😊"
            imgSrc={web}
         />
        </>
    );

}
export default About;