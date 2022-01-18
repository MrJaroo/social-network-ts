import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <NavLink to={'/dialogs/1'} className={(a) => a.isActive ? s.dialog : s.active}>
                    Mike
                </NavLink>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/2'}>Nik</NavLink>
                </div>
                <div className={s.dialog}>
                    Alex
                </div>
                <div className={s.dialog}>
                    Bob
                </div>
                <div className={s.dialog}>
                    Steven
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi
                </div>
                <div className={s.message}>
                    Hello
                </div>
                <div className={s.message}>
                    I see to me help this lesson
                </div>
            </div>
        </div>
    );
};

export default Dialogs;