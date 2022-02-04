import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogItemProps} from "./DialogItem/DialogItem";
import {Message, MessagePropsType} from "./Message/Message";

type DialogsPropsType = {
    messages: Array<MessagePropsType>,
    dialogs: Array<DialogItemProps>
}

const Dialogs:React.FC<DialogsPropsType> = ({
    dialogs,
    messages
                                            }) => {
    const dialogElements = dialogs.map(d => {
        return <DialogItem name={d.name} id={d.id} lastName={d.lastName}/>
    });

    const messageElements = messages.map(m => {
        return <Message message={m.message} id={m.id}/>
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;