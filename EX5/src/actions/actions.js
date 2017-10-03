import authService from '../services/authenticationService';
export const actionTypes = {
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    LOG_IN_SUCCESS: 'LOG_IN_SUCCESS',
    LOG_IN_START: 'LOG_IN_START',
    LOG_IN_FAIL: 'LOG_IN_FAIL',
    LOG_IN: 'LOG_IN'
}

export const addItem = (item) => ({
    type: actionTypes.ADD_ITEM,
    payload: { item: item }
})

export const removeItem = (id) => ({
    type: actionTypes.REMOVE_ITEM,
    payload: { id: id }
})

export const logInUser = (email, password) => ({
    type: actionTypes.LOG_IN,
    payload: { email: email, password: password}
})




