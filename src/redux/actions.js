export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"

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

////// END AUTHENTICATION SYSTEM //////

///// CATALOG AND ANOTHER //////

////////////////////////////////

////// ORDER //////

//////////////////