import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useContext, useEffect, useState} from 'react';
import logo from '../../images/logo.png';
import "./signUpPage.css";
import {useHttp} from "../../hooks/http.hook";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {NavLink, useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";

const SignUpPage = () => {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const {loading, request, error, clearError} = useHttp();
    const [form, setForm] = useState({
        name: "",
        surname: "",
        nameOfOrganization: "",
        email: "",
        password: "",
        passwordCheck: ""
    });
    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const registerHandler = async () => {
        if (form.password.length < 6 || form.passwordCheck.length < 6 ||
            form.name.length < 2 || form.surname.length < 2 || form.nameOfOrganization.length < 2) {
            return 0;
        }
        if (form.password !== form.passwordCheck) {
            toast.warning("Passwords are not same!");
            return 0;
        }
        try {
            const dataRegister = await request("/api/auth/register", "POST",
                {"name": form.name, "surname": form.surname, "nameOfOrganization": form.nameOfOrganization,
                    "email": form.email, "password": form.password});
            console.log(dataRegister);
            const dataLogin = await request("/api/auth/login", "POST",
                {"email": form.email, "password": form.password});
            auth.login(dataLogin.token, dataLogin.userId)
            navigate("/", {replace: true});
        } catch (e) {
        }
    }

    const notify = (message) => toast.error(message);
    useEffect(() => {
        if (error !== null) {
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
                    <h3 className="Auth-form-title">Sign Up</h3>

                    <div className="form-floating">
                        <input
                            onChange={changeHandler}
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                            required
                            minLength="2"
                        />
                        <label htmlFor="floatingInput">Name</label>
                    </div>

                    <div className="form-floating">
                        <input
                            onChange={changeHandler}
                            type="text"
                            className="form-control"
                            placeholder="Surname"
                            name="surname"
                            required
                            minLength="2"
                        />
                        <label htmlFor="floatingInput">Surname</label>
                    </div>

                    <div className="form-floating">
                        <input
                            onChange={changeHandler}
                            type="text"
                            className="form-control"
                            placeholder="Name of Organization"
                            name="nameOfOrganization"
                            required
                            minLength="2"
                        />
                        <label htmlFor="floatingInput">Name of Organization</label>
                    </div>

                    <div className="form-floating">
                        <input
                            onChange={changeHandler}
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            name="email"
                            required
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
                            minLength="6"
                            required
                        />
                        <label htmlFor="floatingInput">Password</label>
                    </div>

                    <div className="form-floating">
                        <input
                            onChange={changeHandler}
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name="passwordCheck"
                            minLength="6"
                            required
                        />
                        <label htmlFor="floatingInput">Repeat password</label>
                    </div>

                    <div className="d-grid gap-2 mt-3">
                        <button
                            className="btn btn-primary"
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            Sign Up
                        </button>
                    </div>
                    <div className="mt-2">
                        Already registered? <NavLink to="/login" className="btn btn-outline-secondary me-2">Login</NavLink>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUpPage;