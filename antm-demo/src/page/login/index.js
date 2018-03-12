import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchLocation, fecthIndexGoods } from '../../server/getData.js';
import { Toast, Modal } from 'antd-mobile';
import './login.scss';
import {setStore, getStore} from '../../config/utils.js';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal1: false,
			error: ""
		};
	}
	componentDidMount() {
		
	}
	componentWillUnmount(){
        this.setState = (state,callback)=>{
          return;
        };
    }
	componentWillReceiveProps(nextProps) {
	    console.log(nextProps)
	}
	onClose = key => () => {
	    this.setState({
	      	[key]: false
	    });
	}
	loginSubmit = () =>{
		let telReg = /^1[3|4|5|7|8][0-9]{9}$/;
		let telVal = this.refs.tel.value;
		let passwordVal = this.refs.password.value;
		if(telVal.trim() === ''){
			this.setState({
		      	modal1: true,
		      	error: "手机号码不能为空"
		    });
		    return;
		}
		if(!telReg.test(telVal)){
			this.setState({
		      	modal1: true,
		      	error: "手机号码格式不正确"
		    });
		    return;
		}
		if(passwordVal.trim() === ''){
			this.setState({
		      	modal1: true,
		      	error: "密码不能为空"
		    });
		    return;
		}
		Toast.loading('正在登录...',0);
		setTimeout( () => {
			Toast.hide();
			setStore('user_id','azzhah000');
			var path = {
			  pathname:'/user',
			  query:{user_id:'azzhah000'}
			}
			this.props.history.push(path);
		},2000)
	}
	render() {
		return (
			<div className = "page-login">
				<div className="logo">
		            <img src={require('../../images/bg/logo.png')} alt="logo" className="img-logo" />
		        </div>
		        <div className="login-form" id="form">
		            <div className="login-cell">
		                <input type="tel" ref="tel" autoComplete="off" placeholder="手机号码" className="login-input" maxLength="11" />
		            </div>
		            <div className="login-cell">
		                <input type="password" ref="password" autoComplete="off" placeholder="密码" className="login-input" />
		            </div>
		            <div className="zui-btn zui-btn-primary" onClick={this.loginSubmit}>登录</div>
		        </div>
		        <Modal
			        visible={this.state.modal1}
			        transparent
			        maskClosable={false}
			        onClose={this.onClose('modal1')}
			        title="温馨提示"
			        footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]}
			        wrapProps={{ onTouchStart: this.onWrapTouchStart }}
			    >
			        <div>
			            {this.state.error}
			        </div>
		        </Modal>

			</div>
		);
	}
}


export default Login