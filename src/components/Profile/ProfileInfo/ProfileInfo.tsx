import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://img1.goodfon.ru/original/800x480/e/8e/mishki-v-lesu-medvedi-les.jpg" alt="bear"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    );
};

export default ProfileInfo;