import React from 'react';
import s from './Profile.module.css'
import MyPosts, {MyPostType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PosptsArr} from "../../redux/state";

export type ProfileType = {
    state: PosptsArr
    /*addPost: () => void
    changeTextArea:(text:string) => void*/
    dispatch:(action:any) => void
}

const Profile:React.FC<ProfileType> = ({
    state,
    dispatch
   /* addPost,
    changeTextArea,*/
                                       }) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts statePosts={state} dispatch={dispatch}/>
        </div>
    );
};

export default Profile;