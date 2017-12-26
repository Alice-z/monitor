<template>
  <imap/>
</template>

<script>
import config from "./config";
import imap from './'

export default {
  mixins:[config],
  components:{
    imap
  },
  computed: {
    currentPath() {
      return this.$store.state.project.currentPath;
    }
  },
  mounted() {
    let polygo = []
    let map = this.map;
    let {path,center,zoom} = this.currentPath
    let local = new BMap.LocalSearch(map, { renderOptions: { map } });
    path.map(path => polygo.push(new BMap.Point(path.lng, path.lat)))
    map.centerAndZoom(new BMap.Point(center.lng,center.lat), zoom)
    map.addOverlay(new BMap.Polygon(polygo, {
      strokeColor: "blue",
      strokeWeight: 6,
      strokeOpacity: 0.2
    }));
  }
};
</script>

