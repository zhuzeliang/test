import {handleActions} from 'redux-actions';
export const checkAuth = handleActions({
    CHECK_AUTH: (state, action) => ({
        ...state,
        data: action.payload
    })
}, {
    data:[]
});
