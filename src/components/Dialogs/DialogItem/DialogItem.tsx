import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

export type DialogItemProps = {
    name: string
    lastName: string
    id: number
}

export const DialogItem = (props: DialogItemProps) => {
    const {name,lastName} = props;
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} className={(a) => a.isActive ? s.active : s.dialog}>
                {name} {lastName}
            </NavLink>
        </div>
    )
}