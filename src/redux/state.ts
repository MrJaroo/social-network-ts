import {profileRedicer} from "./profileReducer";
import {DialogsReducer} from "./dialogsReducer";

export type posts = {
    id: number
    message: string
    likeCounts: number
}
export type PosptsArr = {
    posts: Array<posts>
    messageInput: string
}
export type MessagePage = {
    dialogs: Array<Dialogs>
    message: Array<Message>
    newMessageText: string
}
export type Dialogs = {
    id: number
    name: string
    lastName: string
}
export type Message = {
    id: number
    message: string
}
export type State = {
    profilePage: PosptsArr
    messagePage: MessagePage
}
export type Store = {
    _state: State
    rerenderIntaerThree: () => void
    /* _addPost: () => void
     _changeTextArea: (text: string) => void*/
    subscribe: (observer: () => void) => void
    getState: () => State
    dispatch: (action: any) => void

}

export let store: Store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'You ben', likeCounts: 100},
                {id: 2, message: 'How title', likeCounts: 1},
                {id: 3, message: 'I love react', likeCounts: 43},
            ],
            messageInput: '',
        },
        messagePage: {
            dialogs: [
                {id: 1, name: 'Mike', lastName: 'Dolinin'},
                {id: 2, name: 'Nik', lastName: 'White'},
                {id: 3, name: 'Steve', lastName: 'Porerie'},
                {id: 3, name: 'Bob', lastName: 'Lucas'},
            ],
            message: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'I wont to learn this lesson'},
                {id: 4, message: 'I am Bob '},
                {id: 5, message: 'Hello my friend '},
            ],
            newMessageText: '',
        },
    },
    getState() {
        return this._state
    },
    rerenderIntaerThree() {
        console.log('State change')
    },
    subscribe(observer: () => void) {
        this.rerenderIntaerThree = observer
    },
    dispatch(action) {
        this._state.profilePage = profileRedicer(this._state.profilePage,action);
        this._state.messagePage = DialogsReducer(this._state.messagePage,action);
        this.rerenderIntaerThree();
    }
}








