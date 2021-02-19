import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { InlineError } from '../InlineError/InlineError';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { signinRequest } from '../../utils/api';
import { validateEmail } from '../../utils/utils';
import { loginContext } from '../../contexts/LoginContext';
import { FormContainer } from '../../components/FormContainer';

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
                                name ="email"
                                onChange = {this.handleEmailChange}
                                id="login-email"
                            />
                            {this.state.fieldErrors.email && <InlineError text={this.state.fieldErrors.email} />}
                            <label>
                                Email or Phone Number
                            </label>  
                        </div>
                        <div className = "input-container">
                            <input className = "input-empty" 
                                type = "password" required
                                name ="password"
                                onChange = {this.handlePasswordChange}
                                id="login-email"
                            />
                            <label>
                                Password
                            </label>
                        </div>
                        <div className = "input-container">
                            <Button onClick={this.handleLogin}>Sign In</Button>
                        </div>
                        
                        <div className = "bottom-form">
                            
                            <Link to = "/forgotpassword" className = "forgot-password">
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