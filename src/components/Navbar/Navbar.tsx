import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to={'/profile'} className={(a) => a.isActive ? s.active : s.item}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/message'} className={a => a.isActive ? s.active : s.item}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/news'} className={a => a.isActive ? s.active : s.item}>News</NavLink>
            </div>
            <div>
                Music
            </div>
            <div>
                Settings
            </div>
        </nav>
    );
};

export default Navbar;