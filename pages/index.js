import React from 'react';
import TopHeader from '../components/_App/TopHeader';
import Navbar from '../components/_App/Navbar';
import HeroSlider from '../components/HomeOne/HeroSlider';
import HomeStats from '../components/HomeOne/HomeStats';
import AboutSection from '../components/HomeOne/AboutSection';
import Services from '../components/HomeOne/Services';
import VideoIntro from '../components/Common/VideoIntro';
import AboutUs from '../components/HomeFive/AboutUs';
import Footer from '../components/_App/Footer';
import TestimonialSlider from '../components/Common/TestimonialSlider';

const Index = () => {
    return (
        <>
            {/* <TopHeader /> */}

            <Navbar />

            <HeroSlider />

            <HomeStats />

            <TestimonialSlider />

            <AboutSection />

            <Services />

            <AboutUs />

            <VideoIntro />

            <Footer />
        </>
    )
}

export default Index;