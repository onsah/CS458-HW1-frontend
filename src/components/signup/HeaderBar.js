import { Link, NavLink } from 'react-router-dom';

import { Logo } from './Logo';
import logo from '../../svg/logo.svg';

export const HeaderBar = ({ buttonText }) => (
    <div className="header-top">
        <Link to="/">
            <Logo src={logo} alt="logo" /> 
        </Link>
        <NavLink to="/login" className="btn signIn-btn">
            {buttonText}
        </NavLink>
    </div>
);