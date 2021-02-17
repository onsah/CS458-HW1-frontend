import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { InlineError } from '../InlineError/InlineError';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { signinRequest } from '../../utils/api';
import { validateEmail } from '../../utils/utils';
import { loginContext } from '../../contexts/LoginContext';

const initState = {
    email: '',
    password: '',
    checked: true,
    fieldErrors: { email: undefined, password: undefined },  
    loginError: undefined,
};

class LoginFormImpl extends Component {

    static propTypes = {
        history: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = initState;
    }

    handleEmailChange = e => {
        this.removeError("email");
        this.setState({
            email: e.target.value,
        });
        this.checkEmail(e.target.value);
    };

    handlePasswordChange = e => {
        this.setState({
            password: e.target.value,
        });
    };


    handleCheckbox = e => {
        this.setState({
            checked: e.target.checked
        });
    };

    addError = (errorType, error) => {
        this.setState({
            fieldErrors: { ...this.state.fieldErrors, [errorType]: error }
        });
    }

    removeError = (errorType) => {
        this.setState({
            fieldErrors: { ...this.state.fieldErrors, [errorType]: undefined }
        });
    }

    checkEmail = (email) => {
        if (!validateEmail(email)) {
            this.addError("email", `invalid email: ${email}`);
            return false;
        } else {
            return true;
        }
    }

    handleLogin = async e => {
        e.preventDefault();
        console.log("login submit");

        const hasError = !this.checkEmail(this.state.email) ||
            Object.values(this.state.fieldErrors).find(e => e !== undefined);

        if (!hasError) {
            console.log("trying to login");
            try {
                const respData = await signinRequest(this.state.email, this.state.password);
                console.log("response taken");

                if (respData.token !== undefined) {
                    console.log(`token: ${respData.token}`);
                    loginContext.login(respData.token);
                    this.props.history.push("/welcome");
                } else {
                    this.setState({
                        loginError: "Username or password is invalid",
                    });
                    console.warn("TODO: show login error");
                }
            } catch (e) {
                console.log(e);
            }
        } else {
            console.log(`login error: ${JSON.stringify(this.state.fieldErrors)}`);
        }
    };
   

    render() {
        return (
            <FormContainer>
                <div className = "form-container">
                    <form action="">
                        <h1>
                            Sign In
                        </h1>
                        {this.state.loginError && <InlineError text={this.state.loginError} />}
                        <div className = "input-container">
                            <input className = "input-empty" 
                            type = "email" required
                            onChange = {this.handleEmailChange}/>
                            {this.state.fieldErrors.email && <InlineError text={this.state.fieldErrors.email} />}
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
                            <Button onClick={this.handleLogin}>Sign In</Button>
                        </div>
                        
                        <div className = "bottom-form">
                            
                            <Link to = "/" className = "forgot-password">
                                Forgot Password?
                            </Link>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>                               
                            <span style = {{color: '#999'}}>New to Netflix?</span>
                            <br/>
                            <Link to = "/signup" className = "sign-up-text">
                                Sign up now
                            </Link> 
                        </div>
                    </form>
                </div>  
            </FormContainer>
        );
    }
}

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

    .forgot-password{
        color: #828282;
        font-size: 0.9rem;
        margin-bottom: 4rem;
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

export const LoginForm = withRouter(LoginFormImpl);