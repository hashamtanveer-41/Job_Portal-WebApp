const initialState = {}

export const authReducer = (state = initialState, action ) => {
    switch (action.type) {
        case "SIGNUP_USER":
            return {...state, user: action.payload}
        case "LOGIN_USER":
            return {...state, user: action.payload}
        case "OTP_SENT":
            return {...state, user: action.payload}
        default:
            return state;
    }
};