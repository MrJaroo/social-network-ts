import React from 'react';
import s from "./MyPosts.module.css";
import Post, {PostType} from "./Post/Post";

export type MyPostType = {
    state: Array<PostType>
}


const MyPosts = (props: MyPostType) => {
    debugger
    const elementPost = props.state.map(p => {
        return <Post id={p.id} title={p.title} likeCounts={p.likeCounts}/>
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