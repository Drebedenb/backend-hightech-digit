import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import "./Header.css"
import {AuthContext} from "../../context/AuthContext";

const Header = () => {
    const auth = useContext(AuthContext);
    return (
        <div className="header">
            <header className="p-3 text-bg-dark">
                <div className="container">
                    <div
                        className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/frontend-hightech-digit/src/pages"
                           className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                                <use></use>
                            </svg>
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="/"
                                   className="nav-link px-2 text-secondary">Home</a></li>
                            <li>
                                {/*TODO: href fix to somewhere*/}
                                <a href="#"
                                   className="nav-link px-2 text-white">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="/schema"
                                   className="nav-link px-2 text-white">
                                    Read schema
                                </a>
                            </li>
                        </ul>

                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" className="form-control form-control-dark text-bg-dark"
                                   placeholder="Search..." aria-label="Search"/>
                        </form>

                        {auth.isAuthenticated
                            ?
                            <div className="text-end">
                                <NavLink to="/account" className="btn btn-outline-light me-2">Your account</NavLink>
                                <button onClick={auth.logout} type="button" className="btn btn-outline-danger">Log out</button>
                            </div>
                            :
                            <div className="text-end">
                                <NavLink to="/login" className="btn btn-outline-light me-2">Login</NavLink>
                                <NavLink to="/signUp" type="button" className="btn btn-warning">Sign-up</NavLink>
                            </div>
                        }
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;