import React, { Component } from 'react';
import styled from 'styled-components';
import FBlogo from '../../images/fb-logo.png';
import { NavLink, Link } from 'react-router-dom';

const initState = {
    email: '',
    password: '',
    checked: true
    
}
class LoginForm extends Component {

    state = initState;

    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        });
    };

    handlePasswordChange = e => {
        this.setState({
            password: e.target.value
        });
    };


    handleCheckbox = e => {
        this.setState({
            checked: e.target.checked
        });
    };
    /* Validation */
    /*
    validate = () => {
        let inputError = false;
        const errors = {
            emailError: '',
            passwordError: '',
            inputError: false
        }

       
       if(!this.state.email) {
            inputError = true;
            errors.emailError = "Please enter a valid email."
        }
        else if(!this.state.email.match(RegExp)) {
            inputError = true;
            errors.emailError = (
                <span style = {{color: 'red'}}>Your email address must be valid.</span>
            )
        }
        

        if(!this.state.password.length < 4) {
            inputError = true;
            errors.passwordError = "Your password must contain at least 4 characters."
        }

    }
    */

    render() {
        return (
            <FormContainer>
                <div className = "form-container">
                    <form>
                        <h1>
                            Sign In
                        </h1>
                            <div className = "input-container">
                                <input className = "input-empty" 
                                type = "email" required
                                onChange = {this.handleEmailChange}/>
                                <label>
                                    Email or Phone Number
                                </label>  
                            </div>
                            <div className = "input-container">
                                <input className = "input-empty" 
                                type = "password" required
                                onChange = {this.handlePasswordChange}/>
                                <label>
                                    Password
                                </label>
                            </div>
                            <div className = "input-container">
                              <Button type = "submit">Sign In</Button>
                            </div>
                            <label className = "checkbox-container">
                                Remember me
                                <input type = "checkbox"  defaultChecked = {this.state.checked} onChange = {this.handleCheckbox}/>
                                <span className = "checkmark"></span>
                            </label>
                            <div className = "bottom-form">
                               <img src = {FBlogo} alt = "facebook" />
                               <Link to = "/" className = "login-fb-text">
                                   Login with Facebook
                               </Link>
                               <br/>
                               <br/>
                               <span style = {{color: '#999'}}>New to Netflix?</span>
                               <br/>
                               <Link to = "/sign-up" className = "sign-up-text">
                                   Sign up now
                                </Link> 
                            </div>
                    </form>
                </div>  
            </FormContainer>
        );
    }
}

export default LoginForm;

// Form Container

const FormContainer = styled.div`
    display: grid;
    justify-content: center;
    position: relative;
    z-index: 10;

    .form-container {
        background: rgba(0,0,0,0.8);
        position: relative;
        width: 28.125rem;
        height: 31.25rem;
        padding: 1rem;

    }

    .input-container {
        display: grid;
        grid-template-columns: 1fr;
        margin-tab: 1.2rem;
        
        
    }

    .input-empty {
        color: #fff;
        background: #333;
        border: 0;
        border-radius: 0.25rem;
        height: 3rem;
        padding: 0.9rem 1.25rem 0;
    }


    form div label {
        position: absolute;
        top: 100;
        left: 0.01rem;
        pointer-events: none;
        color: #8a8a8a;
        font-size: 1rem;
        transition: transform 150ms ease-out, font-size 150ms ease-out;
    }

    form div {
        position: relative;
    }

    input:focus ~ label {
        top: 0.437rem;
        font-size: 0.7rem;
    }

    input:focus {
        outline: none;
    }

    /* Check Box */
    .checkbox-container {
        position: relative;
        margin-left: 0.74rem;
        padding-left: 1.875rem;
        font-size: 0.9rem;
        cursor: pointer;
        color: #999;
    }

    .checkbox-container input {
        display: none;
    }

    .checkbox-container .checkmark {
        display: inline-block;
        background: #454545;
        width: 1.1rem;
        height: 1.1rem;
        top: 0;
        border-radius: 0.1rem;
        position: absolute;

    }

    checkbox-container input:checked + checkmark:after {
        content: ' ';
        position: absolute;
        height: 0.25rem;
        width: 0.625rem;
        border-left: 2px solid #000;
        border-botton: 2px solid #000;
        top: 25%;
        left: 21%;
        transform: rotate(-45deg);
    }

    /* Bottom Form */

    .bottom-form img {
        width: 1.5625rem;
        margin: 0.625rem 0.625rem -0.4375rem 0;
    }

    .login-fb-text{
        color: #828282;
        font-size: 0.9rem;
    }

    .bottom-form {
        position: absolute;
        bottom: 0;
        margin-bottom: 4rem;
    }

    .sign-up-text {
        font-size: 1.1rem;
        color: #fff;
        &:hover{
            text-decoration: underline;
        }
    }

`;


/* Button */

const Button = styled.button`
    color: #fff;
    background: rgba(229,9,20);
    border: none;
    outline: none;
    padding: 0.8rem 1.3rem;
    border-radius: 0.125rem;
    font-size: 1rem;
    text-align: center;
    box-shadow: 0 1px 0 rgba(0,0,0,0.45);
    transition: opacity .2s ease-in;
    cursor: pointer
    text-decoration: none;
    margin: 1rem 0;



`;

