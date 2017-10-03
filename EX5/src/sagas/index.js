import { actionTypes } from '../actions/actions';
import { takeEvery, put } from 'redux-saga/effects';
import authService from '../services/authenticationService';




export function* fetchLogIn({ payload }) {
    yield put({
             type: actionTypes.LOG_IN_START,              
         })
    const res = yield authenticateUserPromise(payload.email, payload.password);
    if(res){
         yield put({
             type: actionTypes.LOG_IN_SUCCESS,
                payload: { email: payload.email }
         })
    }
    else{
        yield put({
             type: actionTypes.LOG_IN_FAIL       
         })
    }
}

function authenticateUserPromise(email, password) { 
    return new Promise(function (resolve) { 
        setTimeout(function () { 
            resolve(authService.authenticateUser(email, password));
        }, 2000);
    });
}


export function* logInSaga() {
    yield takeEvery(actionTypes.LOG_IN, fetchLogIn)
}


