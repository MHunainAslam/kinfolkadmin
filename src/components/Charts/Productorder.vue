<template>
  <div class="saleschart">
    <apexcharts
      width="100%"
      height="350"
      type="area"
      :options="chartOptions"
      :series="series"
    ></apexcharts>
  </div>
</template>
  
  <script>
import $ from "jquery";
import VueApexCharts from "vue3-apexcharts";
export default {
  components: {
    apexcharts: VueApexCharts,
  },
  data() {
    return {
        chartOptions: {
            chart: {
                type: "area",
                height: 450,
            },
            datasets:[
                {
                    backgroundColor: 'black'
                }
            ],
            
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 2,
        //   colors: ["#B583FF", "#ec5a50"],
          
        },
        xaxis: {
          categories: ["1", "2", "3", "4", "5", "6", "7", "8"],
        },

        fill: {
          opacity: 0,
          // colors:"yellow"
        },
     
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      },
      series: [
        {
          // name: "Net Profit",
          data: [0, 20, 10, 28, 13, 15, 25, 24],

          backgroundColor: "black",
        },
        {
          // name: "Revenue",
          // color: "yellow",
          data: [20, 10, 16, 20, 17, 19, 15, 4],
        },
      ],
    };
  },
};
</script>
  
  <style >
.saleschart #SvgjsG1014 path {
  fill: #2f8be6 !important;
  border-radius: 10px;
}
.saleschart #SvgjsG1034 path {
  fill: #ace0fc !important;
  border-radius: 10px;
}
.saleschart .apexcharts-toolbar {
  display: none;
}
</style>