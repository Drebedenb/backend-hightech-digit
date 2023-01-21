import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useContext, useEffect, useState} from 'react';
import logo from '../../images/logo.png';
import "./loginPage.css";
import {useHttp} from "../../hooks/http.hook";
import {toast, ToastContainer} from "react-toastify";
import {AuthContext} from "../../context/AuthContext";
import {NavLink, useNavigate} from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const {loading, request, error, clearError} = useHttp();
    const [form, setForm] = useState({
        email: "",
        password: ""
    });
    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const loginHandler = async () => {
        try {
            const data = await request("/api/auth/login", "POST",
                {"email": form.email, "password": form.password});
            auth.login(data.token, data.userId)
            navigate("/", {replace: true});
        } catch (e) {
        }
    }

    const notify = (message) => toast.error(message);
    useEffect(() => {
        if (error !== null){
            notify(error);
            clearError();
        }
    }, [error, clearError]);

    return (
        <div className="Auth-form-container">
            <ToastContainer />
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <img className="rounded mx-auto d-block" src={logo} alt=""/>
                    <h3 className="Auth-form-title">Sign In</h3>

                    <div className="form-floating mb-1">
                        <input
                            onChange={changeHandler}
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            name="email"
                            value={form.email}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input
                            onChange={changeHandler}
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            name="password"
                            value={form.password}
                        />
                        <label htmlFor="floatingInput">Password</label>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button
                            onClick={loginHandler}
                            className="btn btn-primary"
                            disabled={loading}
                        >
                            Submit
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        Don't have an account yet?
                            <NavLink to="/signUp" type="button" className="btn btn-warning">Sign-up</NavLink>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;