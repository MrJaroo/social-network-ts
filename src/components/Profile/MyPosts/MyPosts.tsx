import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

type MyPostType = {
    id: number
    title: string
    likeCounts: number
}


const MyPosts = (props:MyPostType) => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post id={props.id} title={props.title} likeCounts={props.likeCounts}/>
            </div>
        </div>
    );
};

export default MyPosts;