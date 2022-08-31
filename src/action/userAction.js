import Axios from "axios";
import { API_URL } from "../helper";


export const loginAction = (data) => {
    console.log("Data dari page LOGIN", data);
    return {
        type: "LOGIN_SUCCESS",
        payload: data
    }
} 

export const loginMiddleware = (username, password) => {
    return async (dispatch) => {
        try {
            let res = await Axios.post(API_URL + `/auth/login`, {
                username, password
            });

            localStorage.setItem('userLogStore', res.data.token);
            delete res.data.token;
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: res.data
            });
            return { success: true }
        } catch (error) {
            console.log(error)
        }
    }
}

export const logoutAction = () => {
    localStorage.removeItem('eshopLog')
    return {
        type: "LOGOUT_SUCCESS"
    }
}