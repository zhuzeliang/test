import 'whatwg-fetch';
import fetchJsonp from 'fetch-jsonp';

let config = {
	ak: 'V7GTuUvWI1oBA5IMFTUXvg4d2pXZducm'
}

//获取用户地理位置信息
export const fetchLocation = () => {
    return new Promise((resolve, reject) => {
        var BMap = window.BMap;
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r) {
            if (this.getStatus() === 0) {
                var city = r.address.city;
                city = city.substr(0, city.length - 1);
                let currentLocation = {
                    latitude: r.point.lat,
                    longitude: r.point.lng,
                    cityName: city
                }
                resolve(currentLocation)
            } else {
                alert('定位失败,请选择城市');
            }
        });
    })
};

//首页获取用户就近商户信息
export const fecthIndexGoods = (locationStr) => {
	return fetchJsonp('http://api.map.baidu.com/place/v2/search?query=汽车$维修&page_size=10&location='+locationStr+'&scope=2&filter=sort_name:distance|sort_rule:1&radius=5000&output=json&ak='+ config.ak)
}

//商铺列表分页加载
export const fecthPageGoods = (page,locationStr) => {
	return fetchJsonp('http://api.map.baidu.com/place/v2/search?query=汽车$维修&page_size=6&page_num='+page+'&location='+locationStr+'&scope=2&filter=sort_name:distance|sort_rule:1&radius=5000&output=json&ak='+ config.ak)
}


