import React from 'react';
import s from './Header.module.css'


const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.headerImg}
                 src="https://www.nicepng.com/png/detail/417-4170762_streamvpg-world-vector-logo-png.png"
                 alt="cricl"/>
        </header>
    );
};

export default Header;