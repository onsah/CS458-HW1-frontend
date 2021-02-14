import React from 'react';
import { Redirect } from "react-router-dom";
import logo from '../../svg/logo.svg';
import { Logo } from '../../components/Logo';
import { SignUpForm } from './SignUpForm';
import { InlineError } from '../../components/InlineError/InlineError';

// import './SignUp.css';
import '../../css/SignUp.css';

export class SignUp extends React.Component {
    render() {
        return (<SignUpForm/>);
    }
}