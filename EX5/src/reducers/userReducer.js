import { actionTypes } from '../actions/actions';
const INITIAL_STATE = {
    isLogedIn: false,
    email: '',
    isLoading: false
}

export default (state = INITIAL_STATE, action) =>{
    console.log(action);
    switch (action.type) {
        case actionTypes.LOG_IN_START:               
            return {...state, isLoading: true};  
        
        case actionTypes.LOG_IN_SUCCESS:               
            return {...state, isLogedIn: true, email: action.payload.email, isLoading: false};
        
        case actionTypes.LOG_IN_FAIL:               
            return {...state, isLoading: false};                        
        default:
            return state;
    } 
};

export const getIsLogedInSelector = (state) => {
    return state.userReducer.isLogedIn;
}
