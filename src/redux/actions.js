export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"
export const LOGIN_SCREEN = "LOGIN_SCREEN"
export const CATEGORY = "CATEGORY"
export const PRODUCT = "PRODUCT"
export const ADD_TO_BASKET = "ADD_TO_BASKET"
export const ORDERING = "ORDERING"
export const ORDERED = "ORDERED"
export const CHANGE_CATEGORY = "CHANGE_CATEGORY"

// export const URL = 'http://127.0.0.1:8000'
export const URL = 'https://ecofruits.store:8000'

////// AUTHENTICATION SYSTEM ///////

export const login_or_registration = (email, password) => {
    return async dispatch => {

        try {
            const content = {
                "email": email,
                "password": password
            }

            console.log(content)

            const res = await fetch(
                URL + '/v1/users/login_or_registration/', {
                    method: "POST",
                    body: JSON.stringify(content),
                    headers: {'Content-Type': 'application/json'}
                }
            )

            const response = await res.json()
            if (response.status === 'ok') {
            console.log(response)
                dispatch({
                         type: LOGIN,
                         payload: {
                             login: true,
                             token: response.token,
                             login_screen: false,
                             profile: await get_profile(response.token)
                         }
                     })

            } else {
                if(response.status === 'wrong password') {
                    console.log('Я нашёл такого пользователя, но такой пароль неверный!')
                }
            }
        }catch (e) {
            console.log(e)
        }
    }
}

export const get_profile = async (token) => {
      const data = await fetch(URL + '/v1/users/get_profile/', {
          method: 'POST',
          body: JSON.stringify({token: token}),
          headers: {'Content-Type': 'application/json'}})
      const profile = await data.json()



      return profile
    // return async dispatch => {
    //     try {
    //         const data = await fetch(URL + '/v1/users/get_profile/')
    //         const profile = await data.json()
    //
    //         console.log(profile)
    //     }
    //     catch (e) {
    //         alert(e)
    //     }
    // }
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
                    category: category.results,         // на боевом здесь и там будет с result'ом
                    products: category.results.product //
                }
            })
        }
        catch (e) {
            console.log(e)
        }
    }
}

export const fetchProducts = (id) => {
    return async dispatch => {
        try {
            if(id) {
                 const data = await fetch(URL + '/v1/products/category/' + id + '/')
                 const products = await data.json()

                 dispatch({
                        type: PRODUCT,
                        payload: {
                            products: products,
                            popularity: false
                 }})
            }

            else if (id===0){

                const data = await fetch(URL + '/v1/products/popularity/')
                const products = await data.json()

                dispatch({
                    type: PRODUCT,
                    payload: {
                        products: products,
                }
            })
            }



        }
        catch (e) {
            console.log(e)
        }
    }
}

export const changeCat = (item) => {
    return async dispatch => {
        dispatch({
            type: CHANGE_CATEGORY,
            payload: {
                popularity: item
            }
        })
    }
}

////////////////////////////////

////// ORDER //////
// let basket = []
// localStorage.setItem('basket', JSON.stringify(basket))


export const addProductToBasket = (id, position, quantity, price, main_price) => {
    let basket = []
    let sum = []
    if(localStorage.getItem('basket')){
        basket = JSON.parse(localStorage.getItem('basket'));
    }
    if(localStorage.getItem('sum')){
        sum = JSON.parse(localStorage.getItem('sum'))
    }

    basket.push({'id': Math.floor(Math.random() * id + Math.random()), 'position' : position, 'quantity': quantity,
        'price': price, 'main_price': main_price });
    sum.push(price)
    localStorage.setItem('basket', JSON.stringify(basket))
    localStorage.setItem('sum', JSON.stringify(sum))

    let a = JSON.parse(localStorage.getItem('sum'))
    console.log(typeof a.reduce((a, b) => a + b, 0))


    // let item = {'position': position, 'quantity': quantity, 'price': price}
    // basket.push({
    //     'position': position,
    //     'quantity': quantity,
    //     'price': price
    // })


    return async dispatch => {
        try {
            dispatch({
                type: ADD_TO_BASKET,
                payload: {
                    price: a.reduce((a, b) => a + b, 0)
                }
            })
        }
        catch (e) {
            alert(e)
        }
    }
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

export const createOrder = (id, method, name, address, house, flat, telephone, basket, sum) => {
    return async dispatch => {
        try {
             const data = await fetch(
            URL + '/v1/sales/orders/', {
                method: "POST",
                body: JSON.stringify({
                    "customer": id,
                    "price_sum": sum,
                    "delivery_address": 'Улица: ' + address + ' Дом: ' + house + ' Квартира: ' + flat,
                    "telephone_number": telephone,
                    "customer_name": name,
                    "payment_method": method,
                    "positions_in_order": JSON.stringify(basket)
                }),
                headers: {'Content-Type': 'application/json'}
            }
        )
            localStorage.removeItem('basket')
            localStorage.setItem('sum', '[0]')
         const response = await data.json()
         console.log(response)
            dispatch({
                type: ORDERED,
                payload: true,
            })

        }
        catch (e) {
            alert(e)
        }
    }

    }


//////////////////