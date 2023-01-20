import React, {useContext} from 'react';
import laptop from "../../images/laptop.webp"
import {useNavigate} from "react-router-dom";
import {OrdersContext} from "../../context/OrdersContext";

const Hero = ({name, price, description}) => {
    const product = useContext(OrdersContext);
    const navigate = useNavigate();

    const clickHandler = () => {
        product.toggleName(name);
        product.togglePrice(price);
        navigate("/checkout", {replace: true});
    }
    return (
        <div className="container my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1">{name}</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores distinctio, dolore
                        excepturi explicabo libero magnam magni minima nemo nulla, numquam odit, omnis porro provident
                        ratione saepe suscipit velit voluptatem. {description}</p>
                    <p className="lead">{price}$</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <button
                            type="button"
                            className="btn btn-outline-warning btn-lg px-4 me-md-2 fw-bold"
                            onClick={clickHandler}
                        >
                            Make order
                        </button>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img className="rounded-lg-3" src={laptop} alt="" width="720"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;