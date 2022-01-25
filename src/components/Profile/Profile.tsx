import React from 'react';
import s from './Profile.module.css'
import MyPosts, {MyPostType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";

export type ProfileType = {
    state:Array<PostType>
}

const Profile = (props:ProfileType) => {
    debugger
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts state={props.state}/>
        </div>
    );
};

export default Profile;