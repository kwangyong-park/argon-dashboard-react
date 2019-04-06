import { createAction, handleActions } from 'redux-actions';

const FETCH_SIGN_IN_SUCCESS = 'FETCH_SIGN_IN_SUCCESS';
const FETCH_SIGN_IN_FAIL = 'FETCH_SIGN_IN_FAIL';


const initialState = {
    auth: {
        isLoggedIn: false
    }
};

export default handleActions({
    [FETCH_SIGN_IN_FAIL]: (state, action) => {

    },
    [FETCH_SIGN_IN_SUCCESS]: (state, action) => {

    },
}, initialState);