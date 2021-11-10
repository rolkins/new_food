import {LOGIN, LOGOUT, LOGIN_SCREEN, CATEGORY, PRODUCT, ADD_TO_BASKET, ORDERING} from "./actions";

const initialState = {
    login: {
        login_screen: false,
        login: false,
        token: null
    },
    catalog: {
        category: null,
        products: null
    },
    order: {
        basket: {
            item: null
        },
        sum_of_order: null,
        ordering: false
    }
}

export function loginReducer(state = initialState.login, action) {
    switch (action.type) {
        case LOGIN:
            return {...state, login: action.payload.login, token: action.payload.token, login_screen: false}
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
        default:
            return state
    }
}

export function orderReducer(state=initialState.order, action) {
    switch (action.type) {
        case ADD_TO_BASKET:
            return {...state, item: action.payload.item}
        case ORDERING:
            return {...state, ordering: action.payload}

        default:
            return state
    }
}




