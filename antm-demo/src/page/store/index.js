import React, { Component } from 'react';
import { connect } from 'react-redux';
import Product from '../../component/product/';
import Navbar from '../../component/tabBar/';
import { Link } from 'react-router-dom';
import './store.scss';
import { ListView } from 'antd-mobile';
import { saveLocation } from '../../redux/action/';
import { fetchLocation, fecthPageGoods } from '../../server/getData.js'


class Store extends Component {
    constructor(props) {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        super(props);
        this.state = {
            loadingLocation: true,
            loadingGoods: true,
            goodsData:[],
            dataSource,
            isLoading: true,
            loactionStr: '',
            cityName: ''
        };
        this.pageIndex = 0;
    }
    componentDidMount() {
        this.initData();
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)

        // if(!nextProps.currentLocation.loading){
        //     this.setState({ loadingLocation:false });
        //     let locationStr = nextProps.currentLocation.latitude + "," + nextProps.currentLocation.longitude;
        //     this.initData(this.pageIndex,locationStr);
        // }
    }
    componentWillUnmount(){
        this.setState = (state,callback)=>{
          return;
        };
    }
    async initData(pIndex) {
        try{
            //获取地理位置信息
            if(this.state.loadingLocation){
                let location = await fetchLocation();
                this.setState({locationStr: location.latitude + ',' + location.longitude, cityName: location.cityName, loadingLocation: false});
            }
            //根据地理位置信息获取首页就近商铺信息
            let res = await fecthPageGoods(pIndex,this.state.locationStr);
            let resJson = await res.json();
            this.setState({ goodsData: [...this.state.goodsData, ...resJson.results] })
            this.setState({ dataSource: this.state.dataSource.cloneWithRows(this.state.goodsData)});
        }catch(error){
            console.log(error);
        }
    }
    onEndReached = (event) => {
        if(this.pageIndex === 4){
            this.setState({
                isLoading: false,
            });
            return;
        }
        this.initData(this.pageIndex++);
    }
    add(){
        console.log(this.props)
    }

    render() {
        const row = (rowData, sectionID, rowID) => {
            return (
                <Product data={rowData} key={rowID} />
            );
        };
        return (
        <div className="page-store">
            <header onClick = {this.add.bind(this)}>
                <form action="/" method="get">
                    <div className="header-fixed">
                        <div className="zui-search">
                            <div className="zui-search-icon"></div>
                            <div className="zui-search-bd">
                                <input type="text" placeholder="搜索门店名称" autoComplete="off" className="zui-search-input" />
                            </div>
                        </div>
                        <Link to="/" className="city">{ this.state.loadingLocation ? "定位中..." : this.state.cityName}</Link>
                    </div>
                </form>
            </header>
            <ListView
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                   {this.state.isLoading ? 'Loading...' : 'Loaded'}
                </div>)}
                renderRow={row}
                className="am-list"
                pageSize={4}
                useBodyScroll
                scrollRenderAheadDistance={500}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={10}
            />
            <Navbar/>
        </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    
});
const actionCreators = { saveLocation };

export default connect(mapStateToProps, actionCreators)(Store);