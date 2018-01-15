import {combineReducers} from 'redux';
import {reducerIndex} from './goods';
import {checkAuth} from './checkAuth';

export const rootReducer = combineReducers({
    reducerIndex,
    checkAuth
});