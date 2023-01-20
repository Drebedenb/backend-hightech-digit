import React, {useContext, useEffect, useState} from 'react';
import logo from "../../images/logo.png"
import {OrdersContext} from "../../context/OrdersContext";
import {useNavigate} from "react-router-dom";

const CheckoutPage = () => {
    const order = useContext(OrdersContext);
    const navigate = useNavigate();
    const [form, setForm] = useState({
        country: "",
        region: "",
        address: ""
    });
    useEffect(() => {
        if (order.name === "") {
            navigate("/", {replace: true});
        }
    }, [order.name]);
    return (
        <div className="container">
            <main>
                <div className="py-5 text-center">
                    <img className="d-block mx-auto mb-4" src={logo} alt=""
                    />
                    <h2>Checkout form</h2>
                    <p className="lead">Lets make a deal</p>
                </div>

                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your order</span>
                            <span className="badge bg-primary rounded-pill">3</span>
                        </h4>
                        <ul className="list-group mb-3">
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">First look and analytics</h6>
                                    <small className="text-muted">Our consultation</small>
                                </div>
                                <span className="text-muted">$100</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">{order.name}</h6>
                                    <small className="text-muted">Price can be changed by different factor</small>
                                </div>
                                <span className="text-muted">{order.price}$</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">Every year check after installation</h6>
                                    <small className="text-muted">Specialists will check your hardware every
                                        year</small>
                                </div>
                                <span className="text-muted">100$ (now and every year after)</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>{200 + order.price}$</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation" noValidate="">
                            <div className="row g-3">

                                {/*<div className="col-sm-6">*/}
                                {/*    <label htmlFor="firstName" className="form-label">First name</label>*/}
                                {/*    <input type="text" className="form-control" id="firstName" placeholder="" value=""*/}
                                {/*           required=""/>*/}
                                {/*        <div className="invalid-feedback">*/}
                                {/*            Valid first name is required.*/}
                                {/*        </div>*/}
                                {/*</div>*/}

                                {/*<div className="col-sm-6">*/}
                                {/*    <label htmlFor="lastName" className="form-label">Last name</label>*/}
                                {/*    <input type="text" className="form-control" id="lastName" placeholder="" value=""*/}
                                {/*           required=""/>*/}
                                {/*    <div className="invalid-feedback">*/}
                                {/*        Valid last name is required.*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                {/*<div className="col-12">*/}
                                {/*    <label htmlFor="email" className="form-label">Email <span*/}
                                {/*        className="text-muted">(Optional)</span></label>*/}
                                {/*    <input type="email" className="form-control" id="email"*/}
                                {/*           placeholder="you@example.com"/>*/}
                                {/*    <div className="invalid-feedback">*/}
                                {/*        Please enter a valid email address for shipping updates.*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <select value={form.country}
                                            onChange={e => setForm({...form, country: e.target.value})}
                                            className="form-select" id="country" required="">
                                        <option value="">Choose...</option>
                                        <option>Russia</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">Region</label>
                                    <select
                                        value={form.region}
                                        onChange={e => setForm({...form, region: e.target.value})}
                                        className="form-select"
                                        id="state"
                                        required=""
                                    >
                                        <option value="">Choose...</option>
                                        <option>Moscow</option>
                                        <option>Moscow region</option>
                                        <option>Saint-Petersburg</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input
                                    value={form.address}
                                    onChange={e => setForm({...form, address: e.target.value})}
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    placeholder="Ivanovskaya street, 45 house, 13"
                                    required=""/>
                                <div className="invalid-feedback">
                                    Please enter your shipping address.
                                </div>
                            </div>

                            <hr className="my-4"/>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="same-address"/>
                                <label className="form-check-label" htmlFor="same-address">Address is
                                    the same as company address</label>
                            </div>

                            {/*TODO: save information in DataBase*/}
                            {/*<div className="form-check">*/}
                            {/*    <input type="checkbox" className="form-check-input" id="save-info"/>*/}
                            {/*    <label className="form-check-label" htmlFor="save-info">Save this information*/}
                            {/*        for next time</label>*/}
                            {/*</div>*/}

                            <hr className="my-4"/>


                            <button className="w-100 btn btn-primary btn-lg" type="submit">
                                Buy
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            <footer className="my-5 pt-5 text-muted text-center text-small">
                <p className="mb-1">© 2017–2022 HightechDigit</p>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="#">Privacy</a></li>
                    <li className="list-inline-item"><a href="#">Terms</a></li>
                    <li className="list-inline-item"><a href="#">Support</a></li>
                </ul>
            </footer>
        </div>
    );
};

export default CheckoutPage;