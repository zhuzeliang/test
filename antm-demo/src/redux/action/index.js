import { createAction } from 'redux-actions';
import 'whatwg-fetch';


export const add = createAction('ADD');
export const remove = createAction('REMOVE');

export const saveLocation = createAction('SAVE_LOCATION');

// const getLocation = createAction('GET_LOCATION');



// const fetchLocation = () => {
//     return new Promise((resolve, reject) => {
//         var BMap = window.BMap;
//         var geolocation = new BMap.Geolocation();
//         geolocation.getCurrentPosition(function(r) {
//             if (this.getStatus() === 0) {
//                 var city = r.address.city;
//                 city = city.substr(0, city.length - 1);
//                 let currentLocation = {
//                     latitude: r.point.lat,
//                     longitude: r.point.lng,
//                     cityName: city,
//                     loading: false
//                 }
//                 resolve(currentLocation)
//             } else {
//                 alert('定位失败,请选择城市');
//             }
//         });
//     })
// }
// export const getFetchLocation = () => dispatch => {
//     fetchLocation().then(function(res) {
//         dispatch(getLocation(res));
//     }).catch(function(e) {
//         console.log(e)
//     })
// }


// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         fetch('/manifest.json').then(function(response) {
//             return response.json()
//         }).then(function(json) {
//             resolve(json)
//         }).catch(function(ex) {
//             console.log('parsing failed', ex)
//         });

//         // var BMap = window.BMap;
//         // var geolocation = new BMap.Geolocation();
//         // geolocation.getCurrentPosition(function(r) {
//         //     if (this.getStatus() === 0) {
//         //         // var originLat = r.point.lat;
//         //         // var originLng = r.point.lng;
//         //         // var originStr = originLat + ',' + originLng;
//         //         var city = r.address.city;
//         //         city = city.substr(0, city.length - 1);
//         //         console.log(r.address.city);
//         //         resolve(r.address.city);
//         //     } else {
//         //         alert('定位失败,请选择城市');
//         //     }
//         // });
//         // setTimeout(() => {
//         //     resolve(GOODS);
//         // }, 150);
//     });
// };

// export const getGoods = () => dispatch => {
//     // dispatch(requestGoods(page));
//     // let goods = await fetchData();
//     dispatch(receiveGoods(data));
// };