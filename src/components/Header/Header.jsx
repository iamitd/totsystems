import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return <header className={s.header}>
        <ul className={s.headerNav}>
            <li className={s.headerNavLogo}>
                <a></a>
            </li>
            {props.auth ?
                <li className={s.whenLoginBlock}>
                    <div className={s.loginName}>{props.chatPage.users[props.userId].name}</div>
                    <a onClick={props.logoutAC} className={s.loginBlock}>Log out</a>
                </li> :
                <li>
                    <NavLink to={'/login'} className={s.loginBlock}>Login</NavLink>
                </li>}
        </ul>
    </header>
}

export default Header;