import { Link, NavLink } from 'react-router-dom';

import { Logo } from './Logo';
import logo from '../../svg/logo.svg';

export const HeaderBar = ({ buttonText, onButtonClick }) => (
    <div className="header-top">
        <Link to="/">
            <Logo src={logo} alt="logo" /> 
        </Link>
        <div onClick={onButtonClick} className="btn signIn-btn">
            {buttonText}
        </div>
    </div>
);