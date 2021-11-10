export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const LOGIN_SCREEN = "LOGIN_SCREEN"
export const CATEGORY = "CATEGORY"
export const PRODUCT = "PRODUCT"
export const ADD_TO_BASKET = "ADD_TO_BASKET"
export const ORDERING = "ORDERING"

export const URL = 'http://127.0.0.1:8000'

////// AUTHENTICATION SYSTEM ///////

export const login_or_registration = (email, password) => {
    return async dispatch => {
        try {
            const content = {
                "email": email,
                "password": password
            }

            const res = await fetch(
                URL + '/accounts/login_or_registration/', {
                    method: "POST",
                    body: JSON.stringify(content),
                    headers: {'Content-Type': 'application/json'}
                }
            )

            const response = await res.json()

            if (response.status === 'ok') {
                dispatch({
                         type: LOGIN,
                         payload: {
                             login: true,
                             token: response.token
                         }
                     })
            } else {
                if(response.status === 'wrong password') {
                    console.log('Я нашёл такого пользователя, но такой пароль неверный!')
                }
            }
        }catch (e) {
            console.log('something error')
        }
    }
}

export const logout = () => {
    return async dispatch => {
        try{
            dispatch({
                type: LOGOUT,
                payload: false
            })
        }
        catch (e) {
            console.log('ошибка')
        }
    }
}

export const login_screen = () => {
    return async dispatch => {
        try {
            dispatch({
                type: LOGIN_SCREEN,
                payload: {
                    login_screen: true,
                }
            })
        }
        catch (e) {
            alert(e)
        }
    }
}

////// END AUTHENTICATION SYSTEM //////

///// CATALOG AND ANOTHER //////

export const fetchCategories = () => {
    return async dispatch => {
        try {
             const data = await fetch(URL + '/v1/products/category/')
             const category = await data.json()

            console.log(category)

            dispatch({
                type: CATEGORY,
                payload: {
                    category: category,
                    products: category.products
                }
            })
        }
        catch (e) {
            alert(e)
        }
    }
}

export const fetchProducts = (id) => {
    return async dispatch => {
        try {
             const data = await fetch(URL + '/v1/products/category/' + id + '/')
             const products = await data.json()

            dispatch({
                type: PRODUCT,
                payload: {
                    products: products,
                }
            })
        }
        catch (e) {
            alert(e)
        }
    }
}

////////////////////////////////

////// ORDER //////
// let basket = []
// localStorage.setItem('basket', JSON.stringify(basket))


export const addProductToBasket = (position, quantity, price) => {
    let basket = []
    let sum = []
    if(localStorage.getItem('basket')){
        basket = JSON.parse(localStorage.getItem('basket'));
    }
    if(localStorage.getItem('sum')){
        sum = JSON.parse(localStorage.getItem('sum'))
    }

    basket.push({'position' : position, 'quantity': quantity, 'price': price });
    sum.push(price)
    localStorage.setItem('basket', JSON.stringify(basket))
    localStorage.setItem('sum', JSON.stringify(sum))

    // let item = {'position': position, 'quantity': quantity, 'price': price}
    // basket.push({
    //     'position': position,
    //     'quantity': quantity,
    //     'price': price
    // })


    // return async dispatch => {
    //     try {
    //         dispatch({
    //             type: ADD_TO_BASKET,
    //             payload: {
    //                 item: {
    //                     position: position,
    //                     quantity: quantity,
    //                     price: price
    //                 }
    //             }
    //         })
    //     }
    //     catch (e) {
    //         alert(e)
    //     }
    // }
}

export const ordering = (status) => {
    console.log('true')
    return async dispatch => {
        try {
            dispatch({
                type: ORDERING,
                payload: status
            })
        }
        catch (e) {
            alert(e)
        }
    }
}

//////////////////