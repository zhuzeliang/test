// rem布局适配
(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 750) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

document.addEventListener('DOMContentLoaded', function() {
    //loading 加载中
    var loadDom = document.createElement("div");
    loadDom.className = "zui-loading";
    loadDom.innerHTML = '<div class="zui-toast"><i class="zui-loading-icon"></i><p class="zui-loading-content">loading</p></div>';
    document.body.appendChild(loadDom);
    setTimeout(function() {
        loadDom.parentNode.removeChild(loadDom);
    }, 500);
}, false);




// (function sessionInit() {
//     if (sessionStorage.getItem("urls")) {
//         var urlArrs = JSON.parse(sessionStorage.getItem("urls"));
//         var prevUrl = document.referrer;
//         var length = urlArrs.length - 1;
//         var index = urlArrs[length].index + 1;
//         if (!prevUrl == "" || urlArrs[length].prevUrl != urlArrs[length-1].prevUrl) {
//             urlArrs.push({ index: index, prevUrl: prevUrl });
//             var urlStr = JSON.stringify(urlArrs);
//             sessionStorage.setItem('urls', urlStr);
//             console.log(sessionStorage.getItem("urls"));
//         }
//     } else {
//         var urlArrs = [{ index: 0, prevUrl: "" }];
//         var urlStr = JSON.stringify(urlArrs);
//         sessionStorage.setItem('urls', urlStr);
//         console.log(sessionStorage.getItem("urls"));
//     }
// }());
// //手机端浏览器返回强制刷新页面
// (function pushHistory() {
//     window.addEventListener("popstate", function(e) {
//         var urlArrs = JSON.parse(sessionStorage.getItem("urls"));
//         var length = urlArrs.length - 1;
//         var prevUrl = urlArrs[length].prevUrl;
//         alert(prevUrl)
//         urlArrs.splice(length,1);//删除最后一个数据
//         var urlStr = JSON.stringify(urlArrs);
//         sessionStorage.setItem('urls', urlStr);
//         console.log(sessionStorage.getItem("urls"));
//         // window.location.href = prevUrl;
//     }, false);
//     var state = {
//         title: "",
//         url: "#"
//     };
//     window.history.pushState(state, "", "#");
// }());


