import React from 'react'
import Header from "../Components/Header/Header";
import DreamJob from "../Components/LandingPage/DreamJob";
import Companies from "../Components/LandingPage/Companies";
import JobCategory from "../Components/LandingPage/JobCategory";
import Working from "../Components/LandingPage/Working";
import Testimonials from "../Components/LandingPage/Testimonials";
import Subscribe from "../Components/LandingPage/Subscribe";
import {Footer} from "../Components/Footer/Footer";

const HomePage = () => {
    return (
            <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
                <DreamJob />
                <Companies />
                <JobCategory/>
                <Working />
                <Testimonials />
                <Subscribe />
            </div>
    )
}
export default HomePage
