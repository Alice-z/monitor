<template>
  <img src="@/assets/img/logo.png" class="zoom">
</template>

<script>
  export default {
    mounted() {
      import ('@/utils/zoom.js').then(
        r => Zoomerang
        .config({
          maxHeight: 400,
          maxWidth: 400,
          bgColor: '#000',
          bgOpacity: .85
        })
        .listen('.zoom')
      )
    }
  }

</script>

<style scoped>
  .zoom {
    cursor: pointer!important;
  }

  .zoom:hover {
    cursor: pointer!important;
  }

</style>

