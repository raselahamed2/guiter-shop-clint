import React from 'react';
import Abouts from '../Banner/About/Abouts';
import Banner from '../Banner/Banner';
import GuiterMan from '../Banner/GuiterMan/GuiterMan';
import InfoCard from '../InfoCard/InfoCard';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <Abouts></Abouts>
            <GuiterMan></GuiterMan>
        </div>
    );
};

export default Home;