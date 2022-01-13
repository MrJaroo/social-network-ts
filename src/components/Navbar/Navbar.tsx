import React from 'react';
import s from './Navbar.module.css'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
            <nav className={s.nav}>
                <div>
                    <Link to={'/profile'}>Profile</Link>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <Link to={'/message'}>Message</Link>
                </div>
                <div>
                    <Link to={'/news'}>News</Link>
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