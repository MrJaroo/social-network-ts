import s from "./Message.module.css"
import React from "react";

export type MessagePropsType = {
    message: string
    id: number
}

export const Message = (props: MessagePropsType) => {
    const {message} = props;

    return (
        <div className={s.message}>
            {message}
        </div>
    )
}

