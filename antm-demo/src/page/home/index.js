import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { add, remove, saveLocation } from '../../redux/action/';
import './home.scss';
import Product from '../../component/product/';
import Navbar from '../../component/tabBar/';
import { Carousel, Icon } from 'antd-mobile';
import { fetchLocation, fecthIndexGoods } from '../../server/getData.js';
 
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loadingLocation: true,
			loadingGoods: true,
			goodsData: [],
			data: ['', '', ''],
			loactionStr: '',
			cityName: ''
		};
	}
	componentDidMount() {
		this.initData();
		setTimeout(() => {
			this.setState({
				data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']
			});
		}, 100);
	}
	componentWillUnmount(){
        this.setState = (state,callback)=>{
          return;
        };
    }
	async initData() {
		try{
			//获取地理位置信息
			let location = await fetchLocation();
			this.props.saveLocation(location);
			this.setState({locationStr: location.latitude + ',' + location.longitude, cityName: location.cityName, loadingLocation: false});
			//根据地理位置信息获取首页就近商铺信息
			let res = await fecthIndexGoods(this.state.locationStr);
			let resJson = await res.json();
			this.setState({ goodsData: [...resJson.results], loadingGoods:false });
		}catch(error){
			console.log(error);
		}
	}
	handleAdd (){
		this.props.add();
	}
	handleRemove (){
		this.props.remove();
	}
	handleLink (){
		
	}
	componentWillReceiveProps(nextProps) {
	    console.log(nextProps)
	    // if(!nextProps.currentLocation.loading){
	    // 	this.setState({ loadingLocation:false });
	    // 	let locationStr = nextProps.currentLocation.latitude + "," + nextProps.currentLocation.longitude;
	    // 	this.initData(locationStr);
	    // }
	}
	render() {
		let goodsHtml;
		if(this.state.loadingGoods){
			goodsHtml =	<div className="zui-loading"><Icon type="loading" size="md" /><p>loading</p></div>
		}else{
			goodsHtml = <div className="lists">
			                {
			                    this.state.goodsData.map( (item, i) => {
			                        return (
			                           <Product data={item} key={i} />
			                        )
			                    })
			                }
				        </div>
		};

		let divHtml = 	<div className="lists">
			                {
			                    this.state.goodsData.map( (item, i) => {
			                        return (
			                           <select>
			                           		<option>{item.name}</option>
			                           </select>
			                        )
			                    })
			                }
				        </div>
		return (
			<div className = "page-home">
				<button onClick={this.handleAdd.bind(this)}>加加加</button>
				<button onClick={this.handleRemove.bind(this)}>减减减</button>
				<span>{this.props.num}</span>
				<Carousel autoplay={true} infinite selectedIndex={0} >
					<img src={require('../../images/test/a.png')} alt="0" style={{height:"3.0rem"}}/>
					<img src={require('../../images/test/b.png')} alt="1" style={{height:"3.0rem"}}/>
					<img src={require('../../images/test/a.png')} alt="2" style={{height:"3.0rem"}}/>
				</Carousel>
				{divHtml}
				<div className="zui-nav-list">
					<div className="zui-nav zui-nav-screen">
						<Link to="/">
							<img src={require('../../images/bg/n-01.png')} alt="玻璃碎裂保障" />
						</Link>
					</div>
					<div className="zui-nav zui-nav-red">
						<Link to="/">
							<img src={require('../../images/bg/n-02.png')} alt="领红包" />
						</Link>
					</div>
					<div className="zui-nav">
						<Link to="/">
							<img src={require('../../images/bg/n-03.png')} alt="推荐有奖" />
						</Link>
					</div>
				</div>
				<div className="whole-recommend">
        			<h2><span className="mid">全城推荐</span><Link to="/" className="city">{ this.state.loadingLocation ? "定位中..." : this.state.cityName}</Link></h2>
    			</div>
    			{goodsHtml}
				<Navbar/>

			</div>
		);
	}
}


const mapStateToProps = (state, ownProps) => ({
	num: state.reducerIndex.num,
	isLogin: state.reducerIndex.isLogin,
	currentLocation:state.reducerIndex.currentLocation
});
const actionCreators = { add, remove, saveLocation};

export default connect(mapStateToProps, actionCreators)(Home);