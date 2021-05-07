//import React from 'react';
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
//import StoreContext from '../../../StoreContext';
import { connect } from 'react-redux';

/* const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreater())
                }

                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreater(text);
                    store.dispatch(action)
                }
                return <MyPosts updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText} />
            }
            }
        </StoreContext.Consumer>
    )
} */

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreater(text);
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreater())
        }

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;