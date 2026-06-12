const initialState = {};


export const filterReducer = (state = initialState, action ) => {
    switch (action.type) {
        case "UPDATE_FILTER":
            return {...state, ...action.payload}
        case "RESET_FILTER":
            return {}
        default:
            return state;
    }
};