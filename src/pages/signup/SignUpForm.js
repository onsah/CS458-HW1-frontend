import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Button } from '../../components/Button';
import { SignUpContainer } from '../../components/signup/SignUpContainer';
import { HeaderBar } from '../../components/signup/HeaderBar';
import { InlineError } from '../../components/InlineError/InlineError';

import '../../css/SignUpForm.css';

export class SignUpFormImpl extends React.Component {

    static propTypes = {
        history: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            formFields: { email: "", password: "", confirmPassword: "" },
            fieldErrors: { email: undefined, password: undefined, confirmPassword: undefined },
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

        const { formFields } = this.state;

        const hasError = !this.checkEmail(formFields.email) ||
            !this.checkPassword(formFields.password) ||
            !this.checkConfirmPassword(formFields.confirmPassword) ||
            Object.values(this.state.fieldErrors).find(e => e !== undefined);

        if (!hasError) {
            console.warn(`TODO: sign up with: ${JSON.stringify(this.state.formFields)}`);
            this.props.history.push("/signup/choose-plan-1");
        } else {
            console.log(`login error: ${JSON.stringify(this.state.fieldErrors)}`);
        }
    };

    handleEmailChange = e => {
        this.changeFormField("email", e.target.value);
        this.checkEmail(e.target.value);
    };

    checkEmail = (email) => {
        if (!validateEmail(email)) {
            this.addError("email", `invalid email: ${email}`);
            return false;
        } else {
            return true;
        }
    }

    handlePasswordChange = e => {
        this.changeFormField("password", e.target.value);
        this.removeError("confirmPassword");

        this.checkPassword(e.target.value);
    };

    checkPassword = (password) => {
        const { formFields } = this.state; 

        if (password.length === 0) {
            this.addError("password", `password is empty`);
            return false;
        } else if (password !== formFields.confirmPassword) {
            this.addError("password", `passwords doesn't match`);
            return false;
        } else {
            return true;
        }
    }

    handleConfirmPasswordChange = e => {        
        this.changeFormField("confirmPassword", e.target.value);
        this.removeError("password");

        this.checkConfirmPassword(e.target.value);
    };

    checkConfirmPassword = (confirmPassword) => {
        const { formFields } = this.state; 

        if (confirmPassword.length === 0) {
            this.addError("confirmPassword", `password is empty`);
            return false;
        } else if (confirmPassword !== formFields.password) {
            this.addError("password", `passwords doesn't match`);
            return false;
        } else {
            return true;
        }
    }
    
    render() {
        const { fieldErrors } = this.state;

        return (
            <SignUpContainer>
                <HeaderBar buttonText="Sign In"></HeaderBar>
                <div className="signup-container">
                    <p>Step <strong>1</strong> of <strong>3</strong></p>
                    <h2>Create a password to start your membership.</h2>
                    <form action="" className="signup-form">
                        <div className="_email signup-form__email">
                            {fieldErrors.email && <InlineError text={fieldErrors.email} />}
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
                            <input
                                type="password"
                                name="confirmPassword"
                                className="signup-form-input"
                                placeholder="confirm password"
                                onChange={this.handleConfirmPasswordChange}
                            />
                        </div>
                        <Button onClick={this.handleSignUp}>
                            Continue
                        </Button>
                    </form>
                </div>
            </SignUpContainer>
        );
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const SignUpForm = withRouter(SignUpFormImpl);