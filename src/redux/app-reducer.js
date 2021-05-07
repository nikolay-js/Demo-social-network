import { getAuthUsersData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let inisialState = {
  initialized: false
};

const appReducer = (state = inisialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };
    default:
      return state;
  }

}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUsersData());
  //dispatch(somethingElse());
  //dispatch(somethingElse());
  Promise.all([promise])
    .then(() => {
    dispatch(initializedSuccess());
  },
  error => alert(error)
  );

}

export default appReducer;