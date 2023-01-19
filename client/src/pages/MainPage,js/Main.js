import React from 'react';
import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import Cards from "../../components/Cards";
import "./main.css"
import PictureDeals from "../../components/PictureDeals/PictureDeals";
import Circles from "../../components/Circles/Circles";
import Hero from "../../components/Hero/Hero";

const Main = () => {
    return (
        <div className="main text-bg-dark">
            <Header/>
            <Carousel/>
            <div className="container marketing">
                <Circles/>
            </div>
            <Hero/>
            <Hero/>
            <Hero/>
            {/*<PictureDeals/>*/}
            <Cards/>
        </div>
    );
};

export default Main;