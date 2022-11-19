import { userActions } from "./forgot.reducer";

export const setForgotUserDocument = (newUser) => {
    console.log(newUser);
  return async (dispatch) => {
    if (newUser) {
      dispatch(userActions.forgot(newUser));
     
    } else {
      dispatch(userActions.forgot(null));
    }
    
  };
};
