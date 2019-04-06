import { call, put, takeLatest } from 'redux-saga/effects'
import { createAction } from 'redux-actions';
import * as api from './../api/auth'


const FETCH_SIGN_IN_REQUEST = "FETCH_SIGN_IN_REQUEST";
export const fetchLoginRequest = createAction(FETCH_SIGN_IN_REQUEST);
const FETCH_SIGN_IN_SUCCESS = "FETCH_SIGN_IN_SUCCESS";
const fetchLoginSuccess = createAction(FETCH_SIGN_IN_SUCCESS);
const FETCH_SIGN_IN_FAIL = "FETCH_SIGN_IN_FAIL";
const fetchLoginFail = createAction(FETCH_SIGN_IN_FAIL);

function* fetchSignInSaga(action) {
    try {
        const user = yield call(api.signIn, action.payload);
        yield put({type: FETCH_SIGN_IN_SUCCESS, user: user});
    } catch (e) {
        yield put({type: FETCH_SIGN_IN_FAIL, message: e.message});
    }
};


export default [
    takeLatest(FETCH_SIGN_IN_REQUEST, fetchSignInSaga)
]


