import React from 'react';
import web from '../src/images/1.jpg';
import Comman from './Comman';

const Home = () => {
    return (
        <>
        <Comman 
            title="Grow Your Business with"
            brandname="Lush Informatics"
            disc="We are the talented Developer of Website Design"
            butLink="/services"
            buttonCon="Get Started 🔔"
            imgSrc={web}
         />
        </>
    );

}
export default Home;