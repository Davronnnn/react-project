import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.styles.scss';

function Header() {
    return (
        <div className='header'>
            <Link className="logo-container" to='/'>
                <Logo className="logo" />
            </Link>
            <div className="option-container">
                <Link to='/shop' className='option'>Shop</Link>
                <Link to='/shop' className='option'>Contact</Link>
            </div>
        </div>
    )
}

export default Header
