import { userActions } from "./login.reducer";

export const setUserDocument = (newUser) => {
    console.log(newUser);
  return async (dispatch) => {
    if (newUser) {
      dispatch(userActions.signIn(newUser));
     
    } else {
      dispatch(userActions.signIn(null));
    }
    
  };
};
