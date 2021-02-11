import React from 'react';
import { Redirect } from "react-router-dom";
import logo from '../svg/logo.svg';
import Logo from '../components/Logo';
import { SignUpForm } from '../components/signup/SignUpForm';
import { InlineError } from '../components/InlineError/InlineError';

import './SignUp.css';

export class SignUp extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="signup-page page-wrapper">
              <div className="signup-section">
                <SignUpForm />
                <div className="signup-section__route-to">
                  Already have an account?{" "}
                  <span
                    className="cursor-pointer signup-section__route-to__link "
                    onClick={this.RedirectToSignIn}
                  >
                    Sign In Now
                  </span>
                </div>
                <br />
              </div>
            </main>
          );
    }
}