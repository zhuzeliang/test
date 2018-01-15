document.addEventListener('DOMContentLoaded', function() {
    //动态创建回到首页dom
    var backDom = document.createElement("div");
    backDom.className = "z-back";
    backDom.innerHTML = '<a href="/"><svg class="icon-back" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#ffffff" d="M879.461 517.238l-366.588-336.911-368.334 335.167c-6.983 6.983-6.983 17.457 0 24.441s17.457 6.983 24.441 0l343.894-314.219 343.894 314.219c3.492 3.492 6.983 5.238 12.219 5.238s8.726-1.745 12.219-5.238c5.238-5.238 5.238-15.712-1.745-22.695zM767.739 524.219c-10.474 0-17.457 6.983-17.457 17.457v267.084h-143.143v-186.784h-190.277v186.784h-143.143v-267.084c0-10.474-8.726-17.457-17.457-17.457-10.474 0-17.457 6.983-17.457 17.457v301.997h214.715v-186.784h118.704v186.784h214.715v-301.997c-1.745-10.474-8.726-17.457-19.202-17.457zM642.051 274.591h106.484v92.519c0 10.474 8.726 17.457 17.457 17.457 10.474 0 17.457-6.983 17.457-17.457v-127.433h-143.143c-10.474 0-17.457 6.983-17.457 17.457 1.745 8.726 10.474 17.457 19.202 17.457z"  /></svg></a>';
    document.body.appendChild(backDom);
    //回到首页拖拽效果
    //获取屏幕宽高
    var screenW = window.screen.availWidth;
    var screenH = window.screen.availHeight;
    var dragBox = document.querySelector(".z-back");
    dragBox.addEventListener("touchstart", function(e) {
        var touch = e.touches[0];
        startX = touch.pageX;
        startY = touch.pageY;
        var left = getCss(dragBox, "left");
        var top = getCss(dragBox, "top");
        var width = getCss(dragBox, "width");
        var height = getCss(dragBox, "height");
        dragBox.addEventListener("touchmove", function(e) {
            e.preventDefault();
            var touch = e.touches[0];
            var x = touch.pageX - startX;
            var y = touch.pageY - startY;
            var nowLeft = left + x;
            var nowTop = top + y;
            //边界值处理
            if(x > 0){
                nowLeft = nowLeft > screenW - width ? screenW - width : nowLeft;
            }else{
                nowLeft = nowLeft > 0 ? nowLeft : 0;
            }
            if(y > 0){
                nowTop = nowTop > screenH - height ? screenH - height : nowTop;
            }else{
                nowTop = nowTop > 0 ? nowTop : 0;
            }
            dragBox.style.left = nowLeft + "px";
            dragBox.style.top = nowTop + "px";
        }, false);
    }, false);
    dragBox.addEventListener("touchend", function(e) {
        dragBox.removeEventListener("touchstart,touchmove,touchend", function() {

        });
    }, false)
}, false);

//获取元素样式
function getCss(curEle, attr) {
    var val = null,
        reg = null;
    if ("getComputedStyle" in window) {
        val = window.getComputedStyle(curEle, null)[attr];
    } else {
        if (attr === "opacity") {
            val = curEle.currentStyle["filter"];
            reg = /^alpha\(opacity=(\d+(?:\.\d+)?)\)$/i;
            val = reg.test(val) ? reg.exec(val)[1] / 100 : 1;
        } else {
            val = curEle.currentStyle[attr];
        }
    }
    reg = /^(-?\d+(\.\d+)?)(px|pt|rem|em)?$/i;
    return reg.test(val) ? parseFloat(val) : val;
}