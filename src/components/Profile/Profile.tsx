import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

type ProfileType = {
    id: number
    title: string
    likeCounts: number
}

const Profile = (props:ProfileType) => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://img1.goodfon.ru/original/800x480/e/8e/mishki-v-lesu-medvedi-les.jpg" alt="bear"/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts id={props.id} title={props.title} likeCounts={props.likeCounts}/>
        </div>
    );
};

export default Profile;