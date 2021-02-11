import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button } from '../Button';
import { InlineError } from '../InlineError/InlineError';

import './SignUpForm.css';

class SignUpFormImpl extends React.Component {

    static propTypes = {
        history: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            formFields: { username: "", email: "", password: "", confirmPassword: "" },
            fieldErrors: { username: undefined, email: undefined, password: undefined, confirmPassword: undefined },
        };
    }

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

    changeFormField = (field, value) => {
        console.log(`setting ${field} to ${value}`);

        this.removeError(field);
        this.setState({
            formFields: { ...this.state.formFields, [field]: value }
        });
    }

    handleSignUp = e => {
        e.preventDefault();
        console.log("handle sign up");

        const hasError = Object.values(this.state.fieldErrors).find(e => e !== undefined);

        if (!hasError) {
            console.warn(`TODO: sign up with: ${JSON.stringify(this.state.formFields)}`);
            this.props.history.push("/login");
        }

        /* if (formFields.username.length === 0) {
            this.addError("username", "username is empty");
        } else if (!validateEmail(formFields.email)) {
            this.addError("email", `invalid email: ${formFields.email}`);
        } else if (formFields.password.length === 0) {
            this.addError("password", `password is empty`);
        } else if (formFields.password !== formFields.confirmPassword) {
            this.addError("password", `passwords doesn't match`);
        } else {
            console.warn(`TODO: sign up with: ${JSON.stringify(this.state.formFields)}`);
            this.props.history.push("/login");
        } */
    };

    handleUsernameChange = e => {
        this.changeFormField("username", e.target.value);
        if (e.target.value.length === 0) {
            this.addError("username", "username is empty");
        }
    };

    handleEmailChange = e => {
        this.changeFormField("email", e.target.value);
        if (!validateEmail(e.target.value)) {
            this.addError("email", `invalid email: ${e.target.value}`);
        }
    };

    handlePasswordChange = e => {
        const { formFields } = this.state; 

        this.changeFormField("password", e.target.value);
        this.removeError("confirmPassword");

        if (e.target.value.length === 0) {
            this.addError("password", `password is empty`);
        } else if (e.target.value.password !== formFields.confirmPassword) {
            this.addError("password", `passwords doesn't match`);
        }
    };

    handleConfirmPasswordChange = e => {
        const { formFields } = this.state; 
        
        this.changeFormField("confirmPassword", e.target.value);
        this.removeError("password");

        if (e.target.value.length === 0) {
            this.addError("confirmPassword", `password is empty`);
        } else if (e.target.value !== formFields.password) {
            this.addError("password", `passwords doesn't match`);
        }
    };

    render() {
        const { fieldErrors } = this.state;

        return (
            <form action="" className="signup-form">
                <h3 className="signup-form__header"></h3>
                <div className="signup-form__username">
                    <label className="signup-form-label">Username:</label>
                    {fieldErrors.username && <InlineError text={fieldErrors.username} />}
                    <input
                        type="username"
                        name="username"
                        className="signup-form-input"
                        placeholder="username"
                        onChange={this.handleUsernameChange}
                    />
                </div>
                <div className="_email signup-form__email">
                    {fieldErrors.email && <InlineError text={fieldErrors.email} />}
                    <label className="signup-form-label">Email:</label>
                    <input
                        type="email"
                        name="email"
                        className="signup-form-input"
                        placeholder="email"
                        onChange={this.handleEmailChange}
                    />
                </div>

                <div className="signup-form__password">
                    {fieldErrors.password && <InlineError text={fieldErrors.password} />}
                    <label className="signup-form-label">Password:</label>
                    <input
                        type="password"
                        name="password"
                        className="signup-form-input"
                        placeholder="password"
                        onChange={this.handlePasswordChange}
                    />
                </div>

                <div className="signup-form__confirm-password">
                    {fieldErrors.confirmPassword && <InlineError text={fieldErrors.confirmPassword } />}
                    <label className="signup-form-label">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        className="signup-form-input"
                        placeholder="confirm password"
                        onChange={this.handleConfirmPasswordChange}
                    />
                </div>

                <Button onClick={this.handleSignUp}>
                    Sign Up
                </Button>
            </form>
        );
    }
};

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const SignUpForm = withRouter(SignUpFormImpl);