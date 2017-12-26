/**
 * map config
 */
const data = () => ({
  map: null
})
const props = {
  isShow: Boolean,
  mapType: {
    default: () => BMAP_NORMAL_MAP
  },
  coi: {
    // center of inertia
    default: () => [121.476515, 31.23667, 16],
    type: Array
  },
  flag: {
    //  Project Information
    default: () => [
      [121.497854, 31.240722, "地址：上海市黄浦区中山东一路(临黄浦江)", 'red'],
      [121.49759, 31.246307, "地址：上海市黄浦区中山东一路(外滩)411", 'blue'],
      [121.504425, 31.232106, "地址：上海市黄浦区中山东二路600号", 'yellow'],
      [121.494788, 31.253106, "地址：上海市虹口区武昌路338号(近乍浦路)", 'green'],
    ],
    type: Array
  }
}
const methods = {
  initMap() {
    this.map = new BMap.Map("allmap", {
      mapType: this.mapType
    });
    // 初始化地图,设置中心点坐标和地图级别
    let {  map,  coi } = this
    map.centerAndZoom(new BMap.Point(coi[0], coi[1]), coi[2]);
    map.setCurrentCity("上海");
    map.enableScrollWheelZoom(true);
  },
  initMarker() {
    let { flag,  map } = this;
    let icon = i => new BMap.Symbol(BMap_Symbol_SHAPE_POINT, {
      scale: 1.1,
      fillColor: flag[i][3] || "red",
      fillOpacity: 0.8 //填充透明度
    })
    for (let i = 0; i < flag.length; i++) {
      let marker = new BMap.Marker(new BMap.Point(flag[i][0], flag[i][1]), {
        icon: icon(i)
      })
      map.addOverlay(marker); // 将标注添加到地图中
      marker.addEventListener("click", e => {
        let p = e.target;
        let point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
        let infoWindow = new BMap.InfoWindow(flag[i][2], {
          width: 250,
          height: 80,
          title: "信息窗口",
          enableMessage: true
        }); // 创建信息窗口对象
        map.openInfoWindow(infoWindow, point);
      });
    }
  },
  search() {
    let map = this.map;
    var ac = new BMap.Autocomplete({
      input: "suggestId",
      location: map
    });
    ac.addEventListener("onhighlight", function (e) {
      var str = "";
      var _value = e.fromitem.value;
      var value = "";
      if (e.fromitem.index > -1) {
        value =
          _value.province +
          _value.city +
          _value.district +
          _value.street +
          _value.business;
      }
      str =
        "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
      value = "";
      if (e.toitem.index > -1) {
        _value = e.toitem.value;
        value =
          _value.province +
          _value.city +
          _value.district +
          _value.street +
          _value.business;
      }
      str +=
        "<br />ToItem<br />index = " +
        e.toitem.index +
        "<br />value = " +
        value;
      G("searchResultPanel").innerHTML = str;
    });
    var myValue;
    ac.addEventListener("onconfirm", function (e) {
      var _value = e.item.value;
      myValue =
        _value.province +
        _value.city +
        _value.district +
        _value.street +
        _value.business;
      G("searchResultPanel").innerHTML =
        "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
      setPlace();
    });

    function setPlace() {
      map.clearOverlays(); //清除地图上所有覆盖物
      function myFun() {
        var pp = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
        map.centerAndZoom(pp, 18);
        map.addOverlay(new BMap.Marker(pp)); //添加标注
      }
      var local = new BMap.LocalSearch(map, {
        onSearchComplete: myFun
      });
      local.search(myValue);
    }

    function G(id) {
      return document.getElementById(id);
    }
  }
}
export default {
  props,
  data,
  methods,
  mounted() {
    this.initMap();
    this.initMarker();
  }
}

