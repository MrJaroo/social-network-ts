import {posts} from "./state";

const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_AREA = 'change-Text-Area';

export const profileRedicer = (state: any, action: any) => {
    switch (action.type) {
        case ADD_POST:
            const newPostAdd: posts = {id: 5, message: state.messageInput, likeCounts: 0}
            state.posts.push(newPostAdd)
            state.messageInput = '';
            return state;
        case CHANGE_TEXT_AREA:
            state.messageInput = action.text;
            return state
        default:
            return state
    }

}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const addchangeTextAreaCreator = (text: string) => {
    return {type: CHANGE_TEXT_AREA, text: text}
}