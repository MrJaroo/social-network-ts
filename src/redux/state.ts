export type posts = {
    id: number
    message: string
    likeCounts: number
}
export type PosptsArr = {
    posts: Array<posts>
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


export let state: State = {
    profilePage: {
        posts: [
            {id: 1, message: 'You ben', likeCounts: 100},
            {id: 2, message: 'How title', likeCounts: 1},
            {id: 3, message: 'I love react', likeCounts: 43},
        ],
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
}



export const addPost = (postMessage: string) => {
    const newPostAdd = {id: 5, message: postMessage, likeCounts: 0}
    state.profilePage.posts.push(newPostAdd)
    console.log(state.profilePage.posts)
}





