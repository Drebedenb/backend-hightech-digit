import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import technologies from "../../images/technologies.webp"
import "./carousel.css"

const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={technologies} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block text-end">
                        <h1>Provide Internet and local networks</h1>
                        <p>Deliver Internet to anywhere in the world</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={technologies} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block text-end">
                        <h1>Get Wi-Fi everywhere</h1>
                        <p>Stable connection and fastest speeds for you</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={technologies} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-md-block text-end">
                        <h1>Server work and analytics</h1>
                        <p>For those who think really out-the-box</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;