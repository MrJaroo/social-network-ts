import React from 'react';
import s from "./MyPosts.module.css";
import Post, {PostTypeProps} from "./Post/Post";

export type MyPostType = {
    state: Array<PostTypeProps>
}


const MyPosts:React.FC<MyPostType> = ({
    state
                                      }) => {
    debugger
    const elementPost = state.map(p => {
        return <Post id={p.id} message={p.message} likeCounts={p.likeCounts}/>
    })

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.post}>
                { elementPost }
            </div>
        </div>
    );
};

export default MyPosts;