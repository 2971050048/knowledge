// 用经纬度设置地图中心点
var map = new BMap.Map("allmap");
map.centerAndZoom(new BMap.Point(116.331398, 39.897445), 11);
map.enableScrollWheelZoom(true);
theLocation()

function theLocation() {
    //清空地图图层
    map.clearOverlays();
    //定时请求经纬度，3s一次 
    var timer = setInterval(function () {
        getPosition()
    }, 3000)

}

// 后端获取经纬度的接口
function getPosition() {
    var xmlhttp = new XMLHttpRequest()
    xmlhttp.open('GET', 'http://127.0.0.1:8001/getposition', true)
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var position = xmlhttp.responseText
            console.log(position)
            position = JSON.parse(position)
            var new_point = new BMap.Point(position.longtitude, position.latitude)
            //添加地图标注
            var marker = new BMap.Marker(new_point);
            map.addOverlay(marker);
            //定位到指定经纬度            
            map.panTo(new_point);
        }
    }
    xmlhttp.send()
}
