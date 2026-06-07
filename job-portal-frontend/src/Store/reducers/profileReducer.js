const initialState = {
    profile: null,
}

export const profileReducer = (state = initialState, action ) => {
    switch (action.type) {
        case "GET_USER":
            return {...state, user:null}

        default:
            return state;
    }
};