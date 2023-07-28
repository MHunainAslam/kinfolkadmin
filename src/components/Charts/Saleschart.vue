<template>
  <div class="saleschart">
    <apexcharts
      width="100%"
      height="350"
      type="bar"
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
          type: "bar",
          height: 450,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "30%",
            // endingShape: "rounded",
            // borderRadius: '1',
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 3,
          colors: ["transparent"],
        },
        xaxis: {
          categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        },

        fill: {
          opacity: 1,
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
          data: [76, 85, 101, 98, 87, 105, 91, 114],
          color: "blue",
        },
        {
            // name: "Revenue",
            // color: "yellow",
            data: [44, 55, 57, 56, 61, 58, 63, 60],
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
.saleschart .apexcharts-toolbar{
    display: none;
}
</style>