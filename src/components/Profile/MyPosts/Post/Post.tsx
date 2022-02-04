import React from 'react';
import s from "./Post.module.css";

export type PostTypeProps = {
    id:number
    message: string
    likeCounts: number;
}



const Post:React.FC<PostTypeProps> = ({
    id,
    message,
    likeCounts
                                      }) => {
    return (
        <div className={s.item}>
            <img className={s.avatar} src="https://ae01.alicdn.com/kf/H7ca5921fa5754082ab0f31a3243c2be7F.jpg"
                 alt="madara"/>
            {message}
            <div>
                <span>like {likeCounts}</span>
            </div>
        </div>
    );
};

export default Post;