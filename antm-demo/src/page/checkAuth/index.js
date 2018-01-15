import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { fetchLocation, fecthIndexGoods } from '../../server/getData.js';
import {setStore, getStore} from '../../config/utils.js'
class CheckAuth extends Component {
 
    componentDidMount() {
    	if(getStore("user_id")){

    	}else{
    		this.props.history.push('/login')
    	}
    }
    render() {
        return (
	        null
        );
    }
}

export default withRouter(CheckAuth);