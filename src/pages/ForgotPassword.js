import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';

import { FormContainer } from '../components/FormContainer';
import { InlineError } from '../components/InlineError/InlineError';
import logo from '../svg/logo.svg';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { validateEmail } from '../utils/utils';
import { emailForgotPasswordRequest } from '../utils/api';

class ForgotPasswordImpl extends Component {
    
    static propTypes = {
        history: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            fieldErrors: { email: undefined },
            emailSent: false,
            emailResponse: undefined,
        };
    }

    handleEmailChange = e => {
        this.removeError("email");
        this.setState({
            email: e.target.value,
        });
        this.checkEmail(e.target.value);
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

    handleSendMail = async e => {
        e.preventDefault();

        if (this.checkEmail(this.state.email) && this.state.fieldErrors.email === undefined) {
            const resp = await emailForgotPasswordRequest(this.state.email);

            if (resp) {
                console.log(`send email to ${this.state.email}`);
                this.setState({ emailSent: true });
            } else {
                this.setState({ emailResponse: "Failed to send, please ensure you entered the email" });
            }
        }
    }

    render() {
        return (
            <div className = "main-login-container">
                <div className = "header-top">
                    <NavLink to="/">
                        <Logo src = { logo } alt = "logo" className = "Logo"/>       
                    </NavLink>
                </div>
                <FormContainer>
                    <div className="form-container">
                        {this.state.emailSent ? 
                            (
                                <h1>Email sent. Please check your inbox</h1>
                            ):
                            (
                                <form action="">
                                    <h1>Please enter the email</h1>
                                    {this.state.emailResponse && <InlineError text={this.state.emailResponse} />}
                                    <div className = "input-container">
                                        <input className = "input-empty" 
                                        type = "email" required
                                        onChange = {this.handleEmailChange}
                                        id="input-email"
                                    />
                                        {this.state.fieldErrors.email && <InlineError text={this.state.fieldErrors.email} />}
                                        <label>
                                            Email
                                        </label>  
                                    </div>
                                    <div className="bottom-form">
                                        <Button onClick={this.handleSendMail}>
                                            Send Email
                                        </Button>
                                    </div>
                                </form>
                            )
                        }
                    </div>
                </FormContainer>
            </div>
        )
    }
}

export const ForgotPassword = withRouter(ForgotPasswordImpl);