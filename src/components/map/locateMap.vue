<template>
  <imap/>
</template>

<script>
import config from "./config";
import imap from './'

export default {
  mixins:[config],
  props:['polygon'],
  components:{
    imap
  },
  mounted() {
    let _polygon = []
    let map = this.map;
    let {path,center,zoom} = this.polygon
    let local = new BMap.LocalSearch(map, { renderOptions: { map } });
    path.map(path => _polygon.push(new BMap.Point(path.lng, path.lat)))
    map.centerAndZoom(new BMap.Point(center.lng,center.lat), zoom)
    map.addOverlay(new BMap.Polygon(_polygon, {
      strokeColor: "blue",
      strokeWeight: 6,
      strokeOpacity: 0.2
    }));
  }
};
</script>

