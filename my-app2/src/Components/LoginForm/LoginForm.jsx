import React from "react";
//import App from "../../App";
import './LoginForm.css'
import { FaUser, FaKey } from "react-icons/fa";
import {Link} from "react-router-dom";


const LoginForm  = () => {
    return (

        <div className="wrapper">

            <form action="../../index.php">
                <h1>Login</h1>

                <div className="input-container">
                    <input type="text" placeholder="Username or Email" required/>
                    <FaUser className="icon" />
                </div>
                <div className="input-container">
                    <input type="password" placeholder="Password" required/>
                    <FaKey className="icon" />
                </div>
                <div className="remember-me">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="../../../../views/index.html">Forgot password?</a>
                </div>
                <button>Login</button>
                <div className="register-link">
                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                </div>


            </form>
        
        
        </div>
        
    );


};

export default LoginForm;