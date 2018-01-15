import {handleActions} from 'redux-actions';

export const reducerIndex = handleActions({
    // GET_LOCATION: (state, action) => {
    //     return {
    //         ...state,
    //         currentLocation: action.payload
    //     }
    // },
    SAVE_LOCATION: (state, action) => {
        return {
            ...state,
            currentLocation: action.payload
        }
    },
    ADD: (state, action) => {
        return {
            ...state,
            num: state.num + 1,
        }
    },
    REMOVE: (state, action) => ({
        ...state,
        num: state.num - 1,
    })
}, {
    num:10,
    isLogin: false,
    user:{
        name:"Bin",
        img:"https://ps.ssl.qhimg.com/t01531c2d8bd3dbe644.jpg"
    },
    currentLocation:{
        latitude: "",
        longitude: "",
        cityName: ""
    },
    goods:[]
});