import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogItemProps} from "./DialogItem/DialogItem";
import {Message, MessagePropsType} from "./Message/Message";
import {MessagePage} from "../../redux/state";

type DialogsPropsType = {
    state: MessagePage
}

const Dialogs:React.FC<DialogsPropsType> = ({
   state
                                            }) => {
    const dialogElements = state.dialogs.map(d => {
        return <DialogItem name={d.name} id={d.id} lastName={d.lastName}/>
    });

    const messageElements = state.message.map(m => {
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