document.addEventListener('DOMContentLoaded', function() {
    //动态创建回到首页dom
    var backDom = document.createElement("a");
    backDom.className = "z-back";
    backDom.style.cssText = "position:fixed;right:0.30rem;bottom:1.0rem;display:block;z-index:10000;width:50px;height:50px;";
    backDom.setAttribute("href","/");
    backDom.innerHTML = '<img width="50" height="50" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABWCAYAAABVVmH3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozNDczYjRjNS1kNGU5LTkzNDMtYTVkNC1jYjU0OGEwYzIwZTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDU0MUE3NTkyMDIzMTFFODlCNTlGM0JEMEIyQUZGOEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDU0MUE3NTgyMDIzMTFFODlCNTlGM0JEMEIyQUZGOEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTU5MzkyMjRBMzRDMTFFNzk1NDZENUQzRjg3NkMxRDIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTU5MzkyMjVBMzRDMTFFNzk1NDZENUQzRjg3NkMxRDIiLz4gPC9yZGY6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">';
    document.body.appendChild(backDom);
    //回到首页拖拽效果
    //获取屏幕宽高
    var screenW = window.innerWidth;
    var screenH = window.innerHeight;;
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