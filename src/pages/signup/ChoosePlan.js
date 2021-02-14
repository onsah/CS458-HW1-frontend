import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../components/Button';
import CheckmarkLogo from '../../images/Checkmark.png';
import { SignUpContainer } from '../../components/signup/SignUpContainer';
import { HeaderBar } from '../../components/signup/HeaderBar';

export class ChoosePlan extends React.Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
    }
    
    render() {
        return (
            <SignUpContainer>
                <HeaderBar buttonText="Sign In"></HeaderBar>
                <div className="header-content">
                    <p>Step <strong>2</strong> of <strong>3</strong></p>
                    <h2>Choose your plan.</h2>
                    <div className="checked-list">
                        <div className="bullet">No commitments, cancel anytime.</div>
                        <div className="bullet">Everything on Netflix for one price.</div>
                        <div className="bullet">Unlimited viewing on all your devices.</div>
                    </div>
                    <Button onClick={() => { this.props.history.push('/signup/choose-plan-2') }}>
                        See the plans
                    </Button>
                </div>
            </SignUpContainer> 
        );
    }
}