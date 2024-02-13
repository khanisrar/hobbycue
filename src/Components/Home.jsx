import React from 'react';
import "../App.css"
// import Navbar from './Components/Navbar';
import Header from './HomePage/Header';
import Explore from './HomePage/Explore';
import AddHome from './HomePage/AddHome';
import Testimonial from './HomePage/Testimonial';
import HobbyCommunity from './HomePage/HobbyCommunity';
// import AddNew from './Components/AddNew';


const Home = () => {

    return (
        <>
            <Header />
            <Explore />
            {/* <AddNew /> */}
            <AddHome />
            <Testimonial />
            <HobbyCommunity />
        </>
    );
};

export default Home;
