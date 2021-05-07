import React from 'react';
import s from './Post.module.css';
import postImg from '../../../../1_birds.jpg';

const Post = (props) => {
    return ( 
            <div className={s.item}>
                <img src={postImg} alt='postImg' />
                {props.message}
                <div>
                <span>{props.likescount} likes</span>
                </div>
            </div>
    ) 
}
export default Post;