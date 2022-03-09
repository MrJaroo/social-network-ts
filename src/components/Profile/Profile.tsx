import React from 'react';
import s from './Profile.module.css'
import MyPosts, {MyPostType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PosptsArr, posts, State} from "../../redux/state";

export type ProfileType = {
    state: PosptsArr
    addPost: (postMessage: string) => void
}

const Profile:React.FC<ProfileType> = ({
    state,
    addPost,
                                       }) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts statePosts={state} addPost={addPost}/>
        </div>
    );
};

export default Profile;