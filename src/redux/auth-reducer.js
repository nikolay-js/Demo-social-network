import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA';

let inisialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

const authReducer = (state = inisialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }

}

export const setAuthUsersData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload:
  { userId, email, login, isAuth } })

export const getAuthUsersData = () => (dispatch) => {
    return authAPI.auth()
      .then(response => {
        if (response.data[1].resultCode === 0) {
          let {id, login, email} = response.data[0];
          dispatch(setAuthUsersData(id, email, login, true));
        }
      },
      error => alert(error)
      );
}
export const login = (email, password, rememberMe, resultCode) => (dispatch) => {  
    authAPI.login(email, password, rememberMe, resultCode)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(getAuthUsersData());
          authAPI.setAuth(resultCode);
        }
        else {
          let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
          dispatch(stopSubmit("login", {_error: message}));
        }
      },
      error => alert(error)
      );
}
export const logout = () => (dispatch) => {
  debugger
    authAPI.logout();
    authAPI.setAuth(1)    
      .then(response => {
        debugger;
        if (response.data.resultCode === 1) {
          dispatch(setAuthUsersData(null, null, null, false));
        }
      },
      error => alert(error)
      );
}

export default authReducer;