import React from 'react';
import Votebuttons from '../components/Votebuttons';
import Title from '../components/Title';
import Percentage from '../components/Percentage';
import ParticleBackground from '../components/ParticleBackground';

function HomePage() {
    return (
        <>
       
        <Title />
        <Percentage />
        <Votebuttons />
            <ParticleBackground style={{ position: "fixed", zIndex: -1000 }} />
        </>
    );
}

export default HomePage;