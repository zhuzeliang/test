import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { fetchLocation, fecthIndexGoods } from '../../server/getData.js';
import {setStore, getStore} from '../../config/utils.js'
class CheckAuth extends Component {
 
    componentDidMount() {
//     	if(getStore("user_id")){
// this.props.history.push('/login')
//     	}else{
//     		this.props.history.push('/login')
//     	}
        const publicList = ['/user','/register'];
        const pathname = this.props.location.pathname;
        if (publicList.indexOf(pathname)>-1) {
           this.props.history.push('/login');
            // return null
        }else{
             console.log(556);
        }
    }
    render() {
        return (
	        null
        );
    }
}

export default withRouter(CheckAuth);