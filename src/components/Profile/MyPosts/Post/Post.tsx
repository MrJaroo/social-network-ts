import React from 'react';
import s from "./Post.module.css";

export type PostType = {
    id:number
    title: string
    likeCounts: number;
}



const Post = (props:PostType) => {
    return (
        <div className={s.item}>
            <img className={s.avatar} src="https://ae01.alicdn.com/kf/H7ca5921fa5754082ab0f31a3243c2be7F.jpg"
                 alt="madara"/>
            {props.title}
            <div>
                <span>like {props.likeCounts}</span>
            </div>
        </div>
    );
};

export default Post;