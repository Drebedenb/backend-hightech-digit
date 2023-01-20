import React, {useContext} from 'react';
import logo from "../../images/logo.png"
import {OrdersContext} from "../../context/OrdersContext";

const CheckoutPage = () => {
    const order = useContext(OrdersContext);
    console.log(order)
    return (
        <div className="container">
            <main>
                <div className="py-5 text-center">
                    <img className="d-block mx-auto mb-4" src={logo} alt=""
                         />
                        <h2>Checkout form</h2>
                        <p className="lead">Below is an example form built entirely with Bootstrap’s form controls. Each
                            required form group has a validation state that can be triggered by attempting to submit the
                            form without completing it.</p>
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
                                <span className="text-muted">$12</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">Your product</h6>
                                    <small className="text-muted">Brief description</small>
                                </div>
                                <span className="text-muted">$8</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between lh-sm">
                                <div>
                                    <h6 className="my-0">Every year check after installation</h6>
                                    <small className="text-muted">Brief description</small>
                                </div>
                                <span className="text-muted">$5</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>$20</strong>
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
                                    <select className="form-select" id="country" required="">
                                        <option value="">Choose...</option>
                                        <option>United States</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <select className="form-select" id="state" required="">
                                        <option value="">Choose...</option>
                                        <option>California</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="1234 Main St"
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

                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="save-info"/>
                                    <label className="form-check-label" htmlFor="save-info">Save this information
                                        for next time</label>
                                </div>

                                <hr className="my-4"/>


                                    <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to
                                        checkout
                                    </button>
                        </form>
                    </div>
                </div>
            </main>

            <footer className="my-5 pt-5 text-muted text-center text-small">
                <p className="mb-1">© 2017–2022 Company Name</p>
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