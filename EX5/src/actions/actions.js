import authService from '../services/authenticationService';
export const actionTypes = {
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    LOG_IN_SUCCESS: 'LOG_IN_SUCCESS',
    LOG_IN_START: 'LOG_IN_START',
    LOG_IN_FAIL: 'LOG_IN_FAIL'
}

export const addItem = (item) => ({
    type: actionTypes.ADD_ITEM,
    payload: { item: item }
})

export const removeItem = (id) => ({
    type: actionTypes.REMOVE_ITEM,
    payload: { id: id }
})

export const logInUser = (email) => ({
    type: actionTypes.LOG_IN,
    payload: { email: email }
})

export const logIn = (email, password) => (dispatch) => {
    dispatch({
        type: actionTypes.LOG_IN_START
    })

    setTimeout(() => {
        if (authService.authenticateUser(email, password)) {
            dispatch({
                type: actionTypes.LOG_IN_SUCCESS,
                payload: { email: email }
            })
        }
        else{
            dispatch({
                type: actionTypes.LOG_IN_FAIL                
            })
        }

    }, 1000);
}


