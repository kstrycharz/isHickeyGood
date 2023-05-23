import React, { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button'
import "./compstyle.css"
function LoginForm() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const validateEmail = (email) => {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    };

    const handleSubmit = async (event) => {
        console.log("handle Submit clicked")
        event.preventDefault();

        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address.");
            return;
        }

        // Generate a unique cookie for the user
        const cookie = generateCookie();

        // Save the email and cookie to the database
        const response = await axios.post(
            "http://192.168.1.116:3002/api/saveUser",
            {
                email: email,
                cookie: cookie,
            }
        );

        // Redirect the user to the home page
        if (response.data.success) {
            localStorage.setItem("cookie", cookie);
            window.location.href = "/";
        }
    };

    const generateCookie = () => {
        // Generate a unique cookie for the user
        // You can use any library or method to generate a cookie
        // Here's a simple example:
        const randomString = Math.random().toString(36).substring(2, 15);
        const timestamp = new Date().getTime();
        const cookie = `${randomString}_${timestamp}`;
        return cookie;
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setEmailError("");
    };

    return (
        <>
        <div className="LoginFormPrompt">Enter email to verify you are part of the campus community</div>
        <div className = "LoginFormStyle">
        <form onSubmit={handleSubmit}>

                <label>
                Email:
                <input
                    type="email "
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={handleSubmit}
                    onKeyUp={(event) => event.key === 'Enter' && handleSubmit()}
                />
            </label>
            <br />
            {emailError && <div style={{ color: "red" }}>{emailError}</div>}
            <br />
            <Button type="submit">Sign In</Button>
                </form>
            </div>   
            <div className="LoginFormWarn">
                <center>**Emails will not be saved, used to demonstrate token based authentication</center>
            </div>
             
        </>
    );
}

export default LoginForm;
