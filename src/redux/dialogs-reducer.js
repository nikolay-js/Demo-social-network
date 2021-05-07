const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
let initialState = {
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
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 6,
        message: state.newMessageBody
      };
      return { 
        ...state,
        messages: [...state.messages, newMessage],
        newMessageBody: ''
       };      
    case UPDATE_NEW_MESSAGE_BODY:
      return {
         ...state,
         newMessageBody: action.newText
         };      
    default:
      return state;
  }

}

export const sendMessageCreater = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreater = (text) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, newText: text })

export default dialogsReducer;