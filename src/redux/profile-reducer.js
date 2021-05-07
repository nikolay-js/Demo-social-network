import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let inisialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likescount: '7' },
    { id: 2, message: "It's my first post", likescount: '18' },
    { id: 3, message: "Waazzzaaap!", likescount: '11' }
  ],
  newPostText: 'The new Post Text, Yo!',
  profile: null,
  status: ""
};

const profileReducer = (state = inisialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        message: state.newPostText,
        likescount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_USER_STATUS:
      return { ...state, status: action.status };
    default:
      return state;
  }

}

export const addPostActionCreater = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
//export const updateUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const updateNewPostTextActionCreater = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })


export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId)
            .then(response => {
              debugger;
                dispatch(setUserProfile(response.data));   
            });  
}
export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getProfile(userId)
            .then(response => {
              debugger;
              if (userId != null)
                dispatch(setUserStatus(response.data.status));   
            });
}
export const updateUserStatus = (userId, photoUrl, status) => (dispatch) => {
    profileAPI.updateStatus(userId, photoUrl, status)
            .then(response => {
              debugger;
                dispatch(setUserStatus(response.data.status));   
            });
}

export default profileReducer;