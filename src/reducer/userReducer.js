const INITIAL_STATE = {
    username: ''
    //iduser: ''
}

export const userReducer = (state = INITIAL_STATE, action) => {
    console.log("data from action", action);

    switch (action.type) {
        case "LOGIN_SUCCESS":
            return { ...state, ...action.payload };
        case "UPDATE_STATUS":
            return { ...state, status: action.payload };
        case "LOGOUT_SUCCESS":
            return INITIAL_STATE;
        default:
            return state;
    }
}