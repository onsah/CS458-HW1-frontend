import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Button } from '../components/Button';
import CheckmarkLogo from '../images/Checkmark.png';
import { SignUpContainer } from '../components/signup/SignUpContainer';
import { HeaderBar } from '../components/signup/HeaderBar';

export class WelcomeImpl extends React.Component {

    static propTypes = {
        history: PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);

        console.log(`State; ${JSON.stringify(this.props.location.state)}`);

        if (this.props.location?.state?.token === undefined) {
            console.warn("trying to access welcome page without token");
            this.props.history.replace("/");
        }
    }
    
    render() {
        return (
            <SignUpContainer>
                <HeaderBar buttonText="Sign Out" onButtonClick={ () => { this.props.history.replace('/') } }></HeaderBar>
                <div className="header-content">
                    <h2>Welcome.</h2>
                </div>
            </SignUpContainer> 
        );
    }
}

export const Welcome = withRouter(WelcomeImpl);