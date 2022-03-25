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
    _state:State
    rerenderIntaerThree: () => void
    addPost:() => void
    changeTextArea: (text:string) => void
    subscribe:(observer:() => void) => void
    getState:() => State
}


export let store:Store = {
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
            ]
        },
    },
    getState(){
        return this._state
    },
    rerenderIntaerThree() {
        console.log('State change')
    },
    addPost() {
        const newPostAdd: posts = {id: 5, message: this._state.profilePage.messageInput, likeCounts: 0}
        this._state.profilePage.posts.push(newPostAdd)
        this._state.profilePage.messageInput = '';
        this.rerenderIntaerThree()
    },
    changeTextArea (text: string)  {
        this._state.profilePage.messageInput = text;
        this.rerenderIntaerThree()
    },
    subscribe  (observer: () => void)  {
        this.rerenderIntaerThree = observer
    },
}

/*let rerenderIntaerThree = () => {
    console.log('State change')
}*/

/*export let state: State = {
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
        ]
    },
}*/


/*export let addPost = () => {
    const newPostAdd: posts = {id: 5, message: state.profilePage.messageInput, likeCounts: 0}
    state.profilePage.posts.push(newPostAdd)
    state.profilePage.messageInput = '';
    rerenderIntaerThree()
}*/

/*export const changeTextArea = (text: string) => {
    state.profilePage.messageInput = text;
    rerenderIntaerThree()
}*/

/*export const subscribe = (observer: () => void) => {
    rerenderIntaerThree = observer
}*/





