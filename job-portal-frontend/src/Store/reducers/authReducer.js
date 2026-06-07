import {getItem} from "../../Utils/LocalStorageUtils";

const initialState = {
    user: null,
}

export const authReducer = (state = initialState, action ) => {
    switch (action.type) {
        case "SIGNUP_USER":
            return {...state, user:null}
        case "LOGIN_USER":
            return {...state, user: action.payload}
        case "OTP_SENT":
            return {...state, user: action.payload}
        case "LOGOUT_USER":
            return {user: null}
        default:
            return state;
    }
};