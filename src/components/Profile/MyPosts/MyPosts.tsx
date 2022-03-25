import React, {LegacyRef} from 'react';
import s from "./MyPosts.module.css";
import Post, {PostTypeProps} from "./Post/Post";
import {PosptsArr} from "../../../redux/state";

export type MyPostType = {
    statePosts: PosptsArr
    addPost: () => void
    changeTextArea: (text: string) => void
}

const MyPosts: React.FC<MyPostType> = ({
                                           statePosts,
                                           addPost,
                                           changeTextArea
                                       }) => {
    const elementPost = statePosts.posts.map(p => {
        return <Post key={p.id} id={p.id} message={p.message} likeCounts={p.likeCounts}/>
    })

    let newAddPostElement = React.createRef<HTMLTextAreaElement>()

    const onClickAddPostHeandler = () => {
        let text = newAddPostElement
        if (text.current) {
            debugger
            addPost()
        }
    }

    const onPostChange = () => {
        let text = newAddPostElement
        if(text.current){
            changeTextArea(text.current.value)
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