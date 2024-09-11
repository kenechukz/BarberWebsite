import React from "react";
//import App from "../../App";
import './LoginForm.css'
import { FaUser, FaKey } from "react-icons/fa";
import {Link} from "react-router-dom";


const RegisterForm = () => {
    return (

        <div className="wrapper">

            <form action="../../index.php">
                <h1>Register</h1>
                <div className="input-container">
                    <input type="text" name="firstName" placeholder="First name" required/>
                </div>
                <div className="input-container">
                    <input type="text" name="lastName" placeholder="Last name" required/>
                </div>
                <div className="input-container">
                    <input type="text" name="email" placeholder="Email" required/>
                    <FaUser className="icon" />
                </div>
                <div className="input-container">
                    <input type="password" name="password" placeholder="Password" required/>
                    <FaKey className="icon" />
                </div>
                <div className="remember-me">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="../../../../views/index.html">Forgot password?</a>
                </div>
                <button>Login</button>
                <div className="register-link">
                    <p>Already have an account? <Link to="/">Login</Link></p>
                </div>
                


            </form>
        
        
        </div>
        
    );


};

export default RegisterForm;