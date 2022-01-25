import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemProps = {
    name: string
    lastName: string
    id: number
}

const DialogItem = (props: DialogItemProps) => {
    const {name,lastName} = props;
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} className={(a) => a.isActive ? s.active : s.dialog}>
                {name} {lastName}
            </NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
    id: number
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}


const Dialogs = () => {

    let dialogs: Array<DialogItemProps> = [
        {id: 1, name: 'Mike', lastName: 'Dolinin'},
        {id: 2, name: 'Nik', lastName:'White'},
        {id: 3, name: 'Steve', lastName:'Porerie'},
        {id: 3, name: 'Bob', lastName:'Lucas'},

    ]

    let messages: Array<MessagePropsType> = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'I wont to learn this lesson'},
        {id: 4, message: 'I am Bob '},
    ]

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