import { userActions } from "./register.reducer";
import axios from 'axios';

export const setRegisterDocument = (newUser) => {
    console.log(newUser);
   
  return async (dispatch) => {
    
  //   return axios.post('https://apiqhr.qurinomsolutions.com/login', newUser)
  //  .then(response => response.json())
  //           .then(json => dispatch(
  //               { type: "FetchData", newUser: json }))
  //           .catch(err => dispatch(
  //               { type: "ERROR",msg: "Unable to fetch data" }))
  //   }
    if (newUser) {
      dispatch(userActions.register(newUser));
     
    } else {
      dispatch(userActions.register(null));
    }
  }
}
