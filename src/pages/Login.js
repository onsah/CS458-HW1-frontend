import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import { Logo } from '../components/Logo';

import { LoginForm } from '../components/login/LoginForm';
import { NavLink } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div className = "main-login-container">
                <div className = "header-top">
                    <NavLink to="/">
                        <Logo src = { logo } alt = "logo" className = "Logo"/>       
                    </NavLink>
                </div>
                <LoginForm/>
            </div>
        )
    }
}

export default Login;