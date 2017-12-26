<template>
 <el-collapse-transition>
  <div id="message" @click="close" v-if="showMsg">
    <div :style="styles" class="box">
      <slot/>
    </div>
  </div>
 </el-collapse-transition>
</template>

<script>
  export default {
    props: {
      showMsg:Boolean ,
      styles:String ,
      afterClose:Function
      },
    methods: {
      close(e) {
        if (e.target.id !== 'message') {
          return
        }
        this.$emit('update:showMsg', false)
        if(this.afterClose){
          this.afterClose()
        }
      }
    }
  };

</script>



<style lang="less" scoped>
#message {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background:rgba(0,0,0,.6);
  z-index: 2000;
  .box {
    width: 60%;
    height: 800px;
    padding: 10px;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;  
    margin: auto;
    vertical-align: middle;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #e6ebf5;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    overflow: hidden;
    backface-visibility: hidden;
}
}

</style>
