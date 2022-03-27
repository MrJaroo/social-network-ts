import {PosptsArr, State, Store} from "./state";

const NEW_MESSAGE_TEXT = 'new-message-text';
const SAND_MESSAGE = 'SEND_MESSAGE';

export const DialogsReducer = (state: any, action: any) => {
    switch (action.type) {
        case NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state
        case SAND_MESSAGE:
            let message = state.newMessageText;
            state.newMessageText = '';
            state.message.push({id: 6, message: message})
            return state
        default:
            return state
    }
}

export const addChangeNewMessageText = (text: string) => {
    return {type: NEW_MESSAGE_TEXT,text:text}
}
export const sendMessageCreator = () => {
    return {type:SAND_MESSAGE}
}