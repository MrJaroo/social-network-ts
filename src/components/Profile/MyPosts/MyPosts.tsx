import React, {LegacyRef} from 'react';
import s from "./MyPosts.module.css";
import Post, {PostTypeProps} from "./Post/Post";
import {addchangeTextAreaCreator, addPostActionCreator, PosptsArr} from "../../../redux/profileReducer";

export type MyPostType = {
    statePosts: PosptsArr
    /*addPost: () => void
    changeTextArea: (text: string) => void*/
    dispatch: (action: any) => void
}

/*const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}
const addchangeTextAreaCreator = (text: string) => {
    return {type: 'change-Text-Area', text: text}
}*/

const MyPosts: React.FC<MyPostType> = ({
                                           statePosts,
                                           dispatch

                                       }) => {
    const elementPost = statePosts.posts.map(p => {
        return <Post key={p.id} id={p.id} message={p.message} likeCounts={p.likeCounts}/>
    })

    let newAddPostElement = React.createRef<HTMLTextAreaElement>()

    const onClickAddPostHeandler = () => {
        let text = newAddPostElement
        if (text.current) {
            /*addPost()*/
            dispatch(addPostActionCreator());
        }
    }

    const onPostChange = () => {
        let text = newAddPostElement
        if (text.current) {
            let action = addchangeTextAreaCreator(text.current.value)
            dispatch(action)
        }
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={statePosts.messageInput} onChange={onPostChange} ref={newAddPostElement}/>
                </div>
                <div>
                    <button onClick={onClickAddPostHeandler}>Add post</button>
                </div>
            </div>
            <div className={s.post}>
                {elementPost}
            </div>
        </div>
    );
};

export default MyPosts;