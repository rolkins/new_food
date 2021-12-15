import {
    LOGIN,
    LOGOUT,
    LOGIN_SCREEN,
    CATEGORY,
    PRODUCT,
    ADD_TO_BASKET,
    ORDERING,
    ORDERED,
    CHANGE_CATEGORY
} from "./actions";

const initialState = {
    login: {
        login_screen: false,
        login: false,
        token: null,
        profile: null,
    },
    catalog: {
        category: null,
        products: null,
        popularity: true
    },
    order: {
        basket: {
            item: null
        },
        sum_of_order: null,
        ordering: false,
        created: false,
    }
}

export function loginReducer(state = initialState.login, action) {
    switch (action.type) {
        case LOGIN:
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('user', action.payload.profile)
            return {...state, login: action.payload.login, token: action.payload.token, profile: action.payload.profile, login_screen: action.payload.login_screen}
        case LOGOUT:
            return {...state, login: action.payload.login, token: null}
        case LOGIN_SCREEN:
            return {...state, login_screen: true}
        default:
            return state
    }
}

export function catalogReducer(state=initialState.catalog, action) {
    switch (action.type) {
        case CATEGORY:
            return {...state, category: action.payload.category}
        case PRODUCT:
            return {...state, products: action.payload.products}
        case CHANGE_CATEGORY:
            return {...state, popularity: action.payload.popularity}
        default:
            return state
    }
}

export function orderReducer(state=initialState.order, action) {
    switch (action.type) {
        case ADD_TO_BASKET:
            return {...state, sum_of_order: action.payload.price}
        case ORDERING:
            return {...state, ordering: action.payload}
        case ORDERED:
            return {...state, created: action.payload, sum_of_order: null}
        default:
            return state
    }
}




