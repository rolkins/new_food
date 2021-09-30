import {LOGIN, LOGOUT} from "./actions";

const initialState = {
    login: false,
    token: null,
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {...state, login: action.payload.login, token: action.payload.token}
        case LOGOUT:
            return {...state, login: action.payload.login, token: null}
        default:
            return state
    }
}


