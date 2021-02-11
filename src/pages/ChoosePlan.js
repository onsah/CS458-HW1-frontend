import React from 'react';
import styled from 'styled-components';
import logo from '../svg/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '../components/Button';
import CheckmarkLogo from '../images/Checkmark.png';

export class ChoosePlan extends React.Component {
    
    render() {
        return (
            <MainContainer>
                <div className="header-top">
                    <Link to="/">
                        <Logo src={logo} alt="logo" /> 
                    </Link>
                    <NavLink to="/login" className="btn signIn-btn">
                        Sign In
                    </NavLink>
                </div>
                <div className="header-content">
                    <img className="checkmark-logo" src={CheckmarkLogo} alt="checkmark"/>

                    <p>Step <strong>1</strong> of <strong>3</strong></p>
                    <h2>Choose your plan.</h2>
                    <div className="checked-list">
                        <div className="bullet">No commitments, cancel anytime.</div>
                        <div className="bullet">Everything on Netflix for one price.</div>
                        <div className="bullet">Unlimited viewving on all your devices.</div>
                    </div>
                    <Button>
                        See the plans
                    </Button>
                </div>
            </MainContainer>
        );
    }
} 

const MainContainer = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;

    // header top
    .header-top {
        background: #fff;
        height: 6em;
        border-bottom: 1px solid #e6e6e6;
    }

    // header content
    .header-content {
        display: grid;
        justify-content: center;
        background: #fff;
        color: var(--main-dark);
        margin-bottom: 6rem;
        width: 65%;
        height: calc(100vh - 12em);
        position: relative;
        margin: auto;
        margin-top: 4.5rem;
        text-align: center;
        align-content: center;
        flex-direction: column;
        z-index: 2;
    }

    //checkmark-logo
    .checkmark-logo {
        width: 3rem;
        margin-top: 3.125rem;
        margin-bottom: 2rem;
    }

    .header-content img {
        margin: 6.25rem auto 1.875rem;
    }

    // checked list
    .checked-list {
        text-align: left;
        margin: 1rem auto 3rem;
        padding-left: 1.5625rem;
        width: 85%;
        font-size 17px;
        padding: auto;
    }

    // bullets
    .bullet {
        margin-top: 1rem;
        margin-left: 1rem;
        text-indent; -1rem;
        line-height: 1.2rem;
    }

    .checked-list .bullet::before {
        color: transparent;
        display: inline-block;
        position: relative;
        height: 0.3em;
        width: 0.8em;
        content: '';
        left: -0.9375rem;
        bottom: 0.1875rem;
        border-bottom: 1px solid #e50914;
        border-left: 1px solid #e50914;
        transform: rotate(-45deg);
    }

    // sign in
    .signIn-btn {
        margin: 1.5625rem 3% 0;
        padding: 0.4375rem 1.0625rem;
        font-weight: 700;
        line-height: normal;
        color: var(--main-dark);
        font-size: 1.25rem;
        right: 0;
        position: absolute; 
        cursor: pointer;
        &:hover {
            text-decoration: underline;

        }
    }
`;

// logo
const Logo = styled.img`
    width: 10.5rem;
    height: 3.5rem;
    position: absolute;
    top: 49%;
    left: 8%;
    transform: translate(-50%, -50%);
    margin-left: 0;
`;