import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from '../../images/logo.png';
import "./login.css";

const Login = () => {
    return (

        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <img className="rounded mx-auto d-block" src={logo} alt=""/>
                    <h3 className="Auth-form-title">Sign In</h3>

                    <div className="form-floating mb-1">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                        />
                        <label htmlFor="floatingInput">Password</label>
                    </div>

                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        Forgot a password?
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;