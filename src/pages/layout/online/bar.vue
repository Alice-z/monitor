<template>
<div style="width:75%;margin:0 auto;padding:100px 0 0">

    <canvas id="myChart" width="500" height="250" />
</div>
</template>

<script>
  import Chart from 'chart'
  export default {
    computed: {
      bgColor(data, label) {
       
      }
    },
    mounted() {
      var ctx = document.getElementById("myChart").getContext('2d');
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["设备1", "设备2", "设备3", "设备4", "设备5", "设备6"],
          datasets: [{
              label: '最小值',
              data: [11, 2, 23, 11, 20],
              backgroundColor: 'rgb(255, 99, 132)',
            }, {
              label:'最大值' ,
              data: [13, 21, 15, 16, 16],
              backgroundColor: 'rgb(54, 162, 235)',
            },
            {
              label:'平均值' ,
              data: [10, 31, 15, 12, 26],
              backgroundColor: 'rgb(153, 102, 255)',
            }
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    }
  }

</script>



