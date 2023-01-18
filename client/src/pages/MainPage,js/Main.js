import React from 'react';
import Header from "../../components/Header/Header";
import Carousel from "../../components/Carousel/Carousel";
import Cards from "../../components/Cards";
import "./main.css"

const Main = () => {
    return (
        <div className="main">
            <Header/>
            <Carousel/>
            <Cards/>
        </div>
    );
};

export default Main;