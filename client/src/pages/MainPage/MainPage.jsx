import React from 'react';
import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import "./mainPage.css"
import Circles from "../../components/Circles/Circles";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
    const heroes = [                            //TODO: add in database
        {id: 1, name: "Provide Internet and local networks", price:1000, description: "Deliver Internet to anywhere in the world"},
        {id: 2, name: "Get Wi-Fi everywhere", price:1500, description: "Stable connection and fastest speeds for you"},
        {id: 3, name: "Server work and analytics", price:2000, description: "For those who think really out-the-box"}
    ]
    return (
        //Do not delete border-bottom and bottom-dark because you will have white stripe in bottom of page
        <div className="main text-bg-dark border-bottom border-dark">
            <Header/>
            <Carousel/>
            <div className="container marketing">
                <Circles/>
            </div>
            {heroes.map(item => <Hero name={item.name} price={item.price} description={item.description} key={item.id}/>)}
            {/*<PictureDeals/>*/}
            <Footer/>
        </div>
    );
};

export default MainPage;