import React, { Component } from 'react';
import LoginForm from '../components/login/LoginForm';
import logo from '../svg/logo.svg';
import { Logo } from '../components/Logo';

class Login extends Component {
    render() {
        return (
            <div className = "main-login-container">
                <div className = "header-top">
                   <Logo src = { logo } alt = "logo" className = "Logo"/>       
                </div>
                <LoginForm/>
            </div>
        )
    }
}

export default Login;

