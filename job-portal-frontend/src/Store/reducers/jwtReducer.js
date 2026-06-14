import {getItem, removeItem, setItem} from "../../Utils/LocalStorageUtils";

const initialState = {
    jwt: getItem("jwt") || null,
}

export const jwtReducer = (state = initialState, action ) => {
    switch (action.type) {
        case "SET_JWT":
            const tokenString = action.payload && typeof action.payload === 'object'
                ? action.payload.jwt
                : action.payload;

            setItem("jwt", tokenString);
            return {...state, jwt: tokenString};
        case "REMOVE_JWT":
            removeItem("jwt")
            return {jwt:null}

        default:
            return state;
    }
};