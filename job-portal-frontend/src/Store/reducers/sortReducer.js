const initialState = {};


export const sortReducer = (state = initialState, action ) => {
    switch (action.type) {
        case "UPDATE_SORT":
            console.log(state)
            return action.payload;
        case "RESET_SORT":
            return {}
        default:
            return state;
    }
};