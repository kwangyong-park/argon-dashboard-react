import { createAction, handleActions } from 'redux-actions';

// 액션 타입
const CREATE = 'counter/CREATE';

export const create = createAction(CREATE); // color


const initialState = {
    counters: [
        {
            color: 'black',
            number: 0
        }
    ]
};

export default handleActions({
    [CREATE]: (state, action) => {

    },
}, initialState);