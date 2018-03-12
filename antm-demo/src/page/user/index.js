import React, { Component } from 'react';
import Navbar from '../../component/tabBar/';
import { Link } from 'react-router-dom';
import './user.scss';
class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        console.log(this.props);
    }
    componentDidMount() {

    }
    render() {
        return (
	        <div className = "container-user" >
	        	<div className="user-banner">
	        		<img src={require('../../images/bg/user.png')} alt="0"/>
				</div>
				<div className="zui-rows">
					<Link to="/" className="zui-row">
						<div className="zui-row-icon">
							<img src={require('../../images/icon/user-01.png')} alt="0"/>
						</div>
						<div className="zui-row-bd">我的订单</div>
						<div className="zui-icon-right"></div>
					</Link>
					<Link to="/" className="zui-row">
						<div className="zui-row-icon">
							<img src={require('../../images/icon/user-02.png')} alt="0"/>
						</div>
						<div className="zui-row-bd">我的车辆</div>
						<div className="zui-icon-right"></div>
					</Link>
					<Link to="/" className="zui-row">
						<div className="zui-row-icon">
							<img src={require('../../images/icon/user-03.png')} alt="0"/>
						</div>
						<div className="zui-row-bd">质保门店查询</div>
						<div className="zui-icon-right"></div>
					</Link>
					<Link to="/" className="zui-row">
						<div className="zui-row-icon">
							<img src={require('../../images/icon/user-04.png')} alt="0"/>
						</div>
						<div className="zui-row-bd">我的优惠劵</div>
						<div className="zui-icon-right"></div>
					</Link>
					<Link to="/" className="zui-row">
						<div className="zui-row-icon">
							<img src={require('../../images/icon/user-05.png')} alt="0"/>
						</div>
						<div className="zui-row-bd">我的推荐码</div>
						<div className="zui-icon-right"></div>
					</Link>
					<Link to="/" className="zui-row">
						<div className="zui-row-icon">
							<img src={require('../../images/icon/user-06.png')} alt="0"/>
						</div>
						<div className="zui-row-bd">我的账户</div>
						<div className="zui-icon-right"></div>
					</Link>
					<a href="tel:400-820-8888" className="zui-row">
						<div className="zui-row-icon">
							<img src={require('../../images/icon/user-07.png')} alt="0"/>
						</div>
						<div className="zui-row-bd">400-820-8888</div>
						<div className="zui-icon-right"></div>
					</a>
				</div>
	        	<Navbar/>
	        </div>
        );
    }
}

export default Store;