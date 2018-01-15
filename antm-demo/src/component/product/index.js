import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import './product.scss';

class Product extends Component {
    constructor(props){
        super(props);

        this.state = {
            productData:this.props.data
        };
    }
    render() {
      let item = this.state.productData;
      let distanceM = item.detail_info.distance;
      let distanceK = distanceM/1000;
      let distance = distanceK.toFixed(1);
      return (
          <div className="product-box">
            <Link to="/" className="product">
                <div className="product-img">
                    <img src={require('../../images/test/product.png')} alt="0" />
                </div>
                <div className="product-text">
                    <div className="product-text-sub">
                        <p className="product-name">{item.name}</p>
                        <p className="distance">距离{distance}km</p>
                    </div>
                    <div className="product-text-star">
                        <span className="star"></span>
                        <span className="star"></span>
                        <span className="star"></span>
                        <span className="star"></span>
                        <span className="star-b"></span>
                    </div>
                    <div className="product-text-address">
                        {item.address}
                    </div>
                </div>
            </Link>
          </div>
      );
    }
}

export default Product ;
