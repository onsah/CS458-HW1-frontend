import React from 'react';
import { Button } from '../../components/Button';
import CheckmarkLogo from '../../images/Checkmark.png';
import { SignUpContainer } from '../../components/signup/SignUpContainer';
import { HeaderBar } from '../../components/signup/HeaderBar';

export class ChoosePlan2 extends React.Component {
    
    render() {
        return (
            <SignUpContainer>
                <HeaderBar buttonText="Sign In"></HeaderBar>
                <div className="header-content">
                    <p>Step <strong>3</strong> of <strong>3</strong></p>
                    <h2>TODO</h2>
                </div>
            </SignUpContainer> 
        );
    }
}