import React from 'react';
import s from './Header.module.css';
import headerImg from '../../logo.svg';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    debugger;
    return <header className={s.header}>
        <img src={headerImg} alt='headerImg' />
        { props.isAuth
        ? <span> {props.login} - <button className={s.button} onClick={ props.logout }>Log out</button> </span>
        : <NavLink to={'/login'} className={s.navLink}>Login</NavLink> }
    </header>
}
export default Header;