const initialState = {
    talents: null
};


export const talentsReducer = (state = initialState, action ) => {
    switch (action.type) {
        case "GET_ALL_TALENTS":
            return {...state, talents: action.payload}
        default:
            return state;
    }
};