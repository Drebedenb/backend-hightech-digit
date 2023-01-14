import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import logo from '../../images/logo.png';
import "./login.css";

const Login = () => {
    let [login, setLogin] = useState("");
    let [password, setPassword] = useState("");
    return (
        // <div className="text-center">
        //     <main className="form-signin w-100 m-auto">
        //         <form>
        //             <img className="mb-4" src={logo} alt=""/>
        //             <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        //
        //             <div className="form-floating">
        //                 <input
        //                     onChange={event => setLogin(event.target.value)}
        //                     type="email"
        //                     className="form-control"
        //                     id="floatingInput"
        //                     placeholder="name@example.com"
        //                 />
        //                 <label htmlFor="floatingInput">Email address</label>
        //             </div>
        //             <div className="form-floating">
        //                 <input onChange={event => setPassword(event.target.value)}
        //                        type="password"
        //                        className="form-control"
        //                        id="floatingPassword"
        //                        placeholder="Password"/>
        //                 <label htmlFor="floatingPassword">Password</label>
        //             </div>
        //
        //             <div className="checkbox mb-3">
        //                 <label>
        //                     <input type="checkbox" value="remember-me"/> Remember me
        //                 </label>
        //             </div>
        //             <div>
        //                 Your login:
        //                 {login}
        //             </div>
        //             <div>
        //                 Your password:
        //                 {password}
        //             </div>
        //             <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        //             <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
        //         </form>
        //     </main>
        // </div>

        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <img className="rounded mx-auto d-block" src={logo} alt=""/>
                    <h3 className="Auth-form-title">Sign In</h3>

                    <div className="form-floating mb-1">
                        <input
                            onChange={event => setLogin(event.target.value)}
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input
                            onChange={event => setPassword(event.target.value)}
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
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;