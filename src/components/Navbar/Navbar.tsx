import React from 'react';
import s from './Navbar.module.css'

const Navbar = () => {
    return (
            <nav className={s.nav}>
                <div>
                    Profile
                </div>
                <div className={`${s.item} ${s.active}`}>
                    Message
                </div>
                <div>
                    News
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