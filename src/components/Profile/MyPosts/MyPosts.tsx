import React, {LegacyRef} from 'react';
import s from "./MyPosts.module.css";
import Post, {PostTypeProps} from "./Post/Post";
import {PosptsArr, posts} from "../../../redux/state";

export type MyPostType = {
    statePosts: PosptsArr
    addPost: (postMessage: string) => void
}

const MyPosts:React.FC<MyPostType> = ({
    statePosts,
    addPost
                                      }) => {
    const elementPost = statePosts.posts.map(p => {
        return <Post id={p.id} message={p.message} likeCounts={p.likeCounts}/>
    })

    let newAddPostElement = React.createRef<HTMLTextAreaElement>()

    const onClickAddPostHeandler =() => {
        let text = newAddPostElement
        if(text.current){
            addPost(text.current.value)
        }
    }



    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newAddPostElement}></textarea>
                </div>
                <div>
                    <button onClick={onClickAddPostHeandler}>Add post</button>
                </div>
            </div>
            <div className={s.post}>
                { elementPost }
            </div>
        </div>
    );
};

export default MyPosts;