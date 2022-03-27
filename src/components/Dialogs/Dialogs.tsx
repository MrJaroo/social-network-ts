import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem, DialogItemProps} from "./DialogItem/DialogItem";
import {Message, MessagePropsType} from "./Message/Message";
import {addChangeNewMessageText, MessagePage, sendMessageCreator} from "../../redux/dialogsReducer";

type DialogsPropsType = {
    state: MessagePage
    dispatch:(action:any) => void
}

const Dialogs:React.FC<DialogsPropsType> = ({
   state,
    dispatch
                                            }) => {
    const dialogElements = state.dialogs.map(d => {
        return <DialogItem name={d.name} id={d.id} lastName={d.lastName}/>
    });

    const messageElements = state.message.map(m => {
        return <Message message={m.message} id={m.id}/>
    })
    const onSentMessageClick =() => {
        dispatch(sendMessageCreator())
    }
    const changeMessageDialogs = (e:ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        dispatch(addChangeNewMessageText(text))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div><textarea onChange={changeMessageDialogs} value={state.newMessageText}></textarea></div>
                <div><button onClick={onSentMessageClick}>send message</button></div>
            </div>
        </div>
    );
};

export default Dialogs;