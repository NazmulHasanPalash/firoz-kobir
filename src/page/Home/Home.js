import React from 'react';
import Contacts from '../../Components/Contacts/Contacts';
import Count from '../../Components/Count/Count';
import SecondBanner from '../../Components/SecondBanner/SecondBanner';
import SummarySlides from '../../Components/SummarySlide/SummarySlides';
import Gallery from '../../Components/Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <SecondBanner></SecondBanner>
            <SummarySlides></SummarySlides>
            <Count></Count>
            <Gallery></Gallery>

            <Contacts></Contacts>
        </div>
    );
};

export default Home;