import React from 'react';
import s from './Profile.module.css'
import MyPosts, {MyPostType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostTypeProps} from "./MyPosts/Post/Post";

export type ProfileType = {
    state:Array<PostTypeProps>
}

const Profile:React.FC<ProfileType> = ({
    state,
                                       }) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts state={state}/>
        </div>
    );
};

export default Profile;