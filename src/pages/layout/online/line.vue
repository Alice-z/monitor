<template>
  <div style="width:75%;margin:0 auto;padding:50px 0 0">
    <div class="line">
      <div >
        <i style="color:red">------</i>
        <span>红色警告</span>
      </div>
      <div >
          <i style="color:orange">------</i>
        <span>橙色警告</span>
      </div>
      <div >
          <i style="color:yellow">------</i>
        <span>黄色警告</span>
      </div>
    </div>
    <canvas id="myChart" width="500" height="250" />
  </div>
</template>

<script>
  import Chart from 'chart'
  export default {
    mounted() {
      var ctx = document.getElementById("myChart").getContext('2d');
      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
          labels: ["2017/12/12", "2017/12/23", "2017/1/12", "2017/11/12", "2017/4/12", "2017/6/12", "2017/123/12"],
          datasets: [{
              label: "红色警告",
              backgroundColor: 'transparent',
              borderColor: 'red',
              data: [25, 25, 25, 25, 25, 25, 25],
              borderDash: [8],
            },
            {
              label: "橙色警告",
              backgroundColor: 'transparent',
              borderColor: 'orange',
              data: [20, 20, 20, 20, 20, 20, 20],
              borderDash: [8],
            },
            {
              label: "黄色警告",
              backgroundColor: 'transparent',
              borderColor: 'yellow',
              data: [23, 23, 23, 23, 23, 23, 23],
              borderDash: [8],
            }, {
              backgroundColor: 'transparent',
              borderColor: '#0cf',
              data: [19, 17, 20, 15, 18, 24, 28],
              // borderWidth:'15px'
            },
            {
              backgroundColor: 'transparent',
              borderColor: '#0cf',
              data: [17, 19, 22, 18, 20, 21, 23],
              // borderWidth:'15px'
            },
            {
              backgroundColor: 'transparent',
              borderColor: '#0cf',
              data: [18, 19, 32, 18, 27, 21, 13],
              // borderWidth:'15px'
            }
          ]
        },
        // Configuration options go here
        options: {
          legend: {
            display: false // 隐藏线条的说明（Tag）
          },
          scaleShowGridLines: true,
          elements: {
            line: {
              tension: 0, // disables bezier curves

            }

          }
        }
      });

    }
  }

</script>
<style lang="less" scoped>
  .line {
    display: flex;
     flex-wrap: nowrap;
     justify-content:center;
     div{
       margin: 0 20px;
       i{
         margin-right: 10px
       }
     }
  }

</style>

