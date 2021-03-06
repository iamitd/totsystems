import React from "react";
import s from './Navbar.module.css';
import {NavLink, Redirect} from "react-router-dom";

const Navbar = (props) => {
    if (!props.isAuth ) return <Redirect to={"/login"}/>;
    return (
            <nav  className={s.nav}>
                    <NavLink to="/work" className={s.serious} activeClassName={s.activeLink}><div className={s.field}>Рабочий чат</div></NavLink>
                    <NavLink to="/flood" className={s.notserious} activeClassName={s.activeLink}><div className={s.field}>Флудильня</div></NavLink>
            </nav>
    )
}
export default Navbar