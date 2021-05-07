import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likescount: '7' },
        { id: 2, message: "It's my first post", likescount: '18' },
        { id: 3, message: "Waazzzaaap!", likescount: '11' }
      ],
      newPostText: 'The new Post Text, Yo!'
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Valera' },
        { id: 2, name: 'Dimych' },
        { id: 3, name: 'Masha' },
        { id: 4, name: 'Zhenya' },
        { id: 5, name: 'Vovan' }
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How do you do?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
      ],
      newMessageBody: ''
    },

    sidebar: {}
  },
  _callSubscriber() {
    console.log('state changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  /* addPost() {
    let newPost = {
      id: 4,
      message: this._state.profilePage.newPostText,
      likescount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {  
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  
  addMessage() {
    let newMessage = {
      id: 6,
      message: this._state.dialogsPage.newMessageText
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newText) {  
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  }, */

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarPage = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);

  }

}

export default store;

window.store = store;
