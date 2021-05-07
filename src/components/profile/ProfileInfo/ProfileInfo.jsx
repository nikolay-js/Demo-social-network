import React, { useState, useEffect } from 'react';
import s from './ProfileInfo.module.css';
import Preload from '../../common/preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';
//import profileImg from '../../../2birds.jpg';

const ProfileInfo = ({ profile, userId, status, updateStatus, isOwner }) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preload />
    }

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div>
            {/* <div>
                <img src={profileImg} alt='profileImg' />
            </div> */}
            <div className={s.descriptionBlock}>
                <img src={profile.photoUrl} />

                {editMode
                    ? <ProfileDataForm profile={profile} onSubmit={onSubmit} />
                    : <ProfileData goToEditMode={() => { setEditMode(true) }}
                        profile={profile} isOwner={isOwner} />}

                <ProfileStatusWithHooks userId={userId}
                    photo={profile.photoUrl}
                    status={status}
                    updateStatus={updateStatus} />
            </div>
        </div>
    )
}

const ProfileData = ({ profile, isOwner = true, goToEditMode }) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
        <div>
            <b>Full name</b>: {profile.FullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
    </div>
}

const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;