<template>
  <!-- <div class="bg-black">
  hunain
  <div class="chart-container"></div>
 </div> -->

  <div class="wrapper">
    <div class="main-panel">
      <!-- BEGIN : Main Content-->
      <div class="main-content">
        <div class="content-overlay"></div>
        <div class="content-wrapper">
          <div class="row">
            <topcharts></topcharts>
          </div>
          <div class="row match-height">
            <div class="col-xl-4 col-lg-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title mb-0">Discover People</h4>
                </div>
                <div class="card-content">
                  <div class="card-body">
                    <div class="media pt-0 pb-2">
                      <img
                        class="mr-3 avatar rounded"
                        src="../app-assets/img/portrait/small/avatar-s-20.png"
                        alt="Avatar"
                        width="35"
                      />
                      <div class="media-body">
                        <h4 class="font-medium-1 mb-0">Jessica Rice</h4>
                        <p class="grey font-small-3 m-0">UX Designer</p>
                      </div>
                      <button type="button" class="btn btn-primary">
                        <i class="ft-user-plus"></i>
                      </button>
                    </div>
                    <div class="media py-2">
                      <img
                        class="mr-3 avatar rounded"
                        src="../app-assets/img/portrait/small/avatar-s-15.png"
                        alt="Avatar"
                        width="35"
                      />
                      <div class="media-body">
                        <h4 class="font-medium-1 mb-0">Jacob Rios</h4>
                        <p class="grey font-small-3 m-0">HTML Developer</p>
                      </div>
                      <button type="button" class="btn bg-light-primary">
                        <i class="ft-user-check"></i>
                      </button>
                    </div>
                    <div class="media py-2">
                      <img
                        class="mr-3 avatar rounded"
                        src="../app-assets/img/portrait/small/avatar-s-7.png"
                        alt="Avatar"
                        width="35"
                      />
                      <div class="media-body">
                        <h4 class="font-medium-1 mb-0">Russell Delgado</h4>
                        <p class="grey font-small-3 m-0">Database Designer</p>
                      </div>
                      <button type="button" class="btn btn-primary">
                        <i class="ft-user-plus"></i>
                      </button>
                    </div>
                    <div class="media py-2">
                      <img
                        class="mr-3 avatar rounded"
                        src="../app-assets/img/portrait/small/avatar-s-6.png"
                        alt="Avatar"
                        width="35"
                      />
                      <div class="media-body">
                        <h4 class="font-medium-1 mb-0">Sara McDonald</h4>
                        <p class="grey font-small-3 m-0">Team Leader</p>
                      </div>
                      <button type="button" class="btn bg-light-primary">
                        <i class="ft-user-check"></i>
                      </button>
                    </div>
                    <div class="media py-2">
                      <img
                        class="mr-3 avatar rounded"
                        src="../app-assets/img/portrait/small/avatar-s-16.png"
                        alt="Avatar"
                        width="35"
                      />
                      <div class="media-body">
                        <h4 class="font-medium-1 mb-0">Janet Lucas</h4>
                        <p class="grey font-small-3 m-0">Project Manger</p>
                      </div>
                      <button type="button" class="btn bg-light-primary">
                        <i class="ft-user-check"></i>
                      </button>
                    </div>
                    <div class="media py-2">
                      <img
                        class="mr-3 avatar rounded"
                        src="../app-assets/img/portrait/small/avatar-s-25.png"
                        alt="Avatar"
                        width="35"
                      />
                      <div class="media-body">
                        <h4 class="font-medium-1 mb-0">Mark Carter</h4>
                        <p class="grey font-small-3 m-0">HTML Developer</p>
                      </div>
                      <button type="button" class="btn btn-primary">
                        <i class="ft-user-plus"></i>
                      </button>
                    </div>
                    <div class="media pt-2 pb-1">
                      <img
                        class="mr-3 avatar rounded"
                        src="../app-assets/img/portrait/small/avatar-s-5.png"
                        alt="Avatar"
                        width="35"
                      />
                      <div class="media-body">
                        <h4 class="font-medium-1 mb-0">Chad Reese</h4>
                        <p class="grey font-small-3 m-0">UI Designer</p>
                      </div>
                      <button type="button" class="btn btn-primary">
                        <i class="ft-user-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-8 col-lg-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title mb-0">
                    <span>Sales Analysis</span>
                    <span class="float-right cursor-pointer">
                      <i class="ft-more-vertical-"></i>
                    </span>
                  </h4>
                </div>
                <div class="card-content">
                  <div class="card-body">
                    <div class="chart-info mb-3">
                      <span class="mr-3">
                        <i class="fa fa-circle info font-small-3 mr-1"></i>
                        <span>Net Profit</span>
                      </span>
                      <span class="mr-3">
                        <i
                          class="fa fa-circle info lighten-3 font-small-3 mr-1"
                        ></i>
                        <span>Revenue</span>
                      </span>
                    </div>
                    <div>
                      <Saleschart></Saleschart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row match-height">
            <div class="col-xl-8 col-lg-12">
              <div class="card">
                <div class="card-header pb-0">
                  <h4 class="card-title">Product Order</h4>
                </div>
                <div class="card-content">
                  <div class="card-body">
                    <div class="chart-info mb-4">
                      <span class="mr-3">
                        <i class="fa fa-circle primary font-small-2 mr-1"></i>
                        <span>Delivered</span>
                      </span>
                      <span>
                        <i class="fa fa-circle danger font-small-2 mr-1"></i>
                        <span>Pending</span>
                      </span>
                    </div>
                    <div>
                      <Productorder></Productorder>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-12">
              <div class="card">
                <div class="card-content">
                  <div class="card-body">
                    <h4 class="card-title">
                      <span>Product Sale</span>
                      <span class="float-right cursor-pointer">
                        <i class="ft-more-vertical-"></i>
                      </span>
                    </h4>
                    <p class="grey">Sales of 2019</p>
                    <ul class="list-group mb-3">
                      <li class="list-group-item">
                        <span>Apex Angular</span>
                        <span class="badge bg-light-primary float-right"
                          >2.5k</span
                        >
                      </li>
                      <li class="list-group-item">
                        <span>Vuexy VueJS</span>
                        <span class="badge bg-light-info float-right"
                          >3.7k</span
                        >
                      </li>
                      <li class="list-group-item">
                        <span>Frest HTML</span>
                        <span class="badge bg-light-warning float-right"
                          >2.3k</span
                        >
                      </li>
                      <li class="list-group-item">
                        <span>Modern Angular</span>
                        <span class="badge bg-light-success float-right"
                          >4.1k</span
                        >
                      </li>
                      <li class="list-group-item">
                        <span>Frest Sketch</span>
                        <span class="badge bg-light-secondary float-right"
                          >2.8k</span
                        >
                      </li>
                      <li class="list-group-item">
                        <span>Materialize HTML</span>
                        <span class="badge bg-light-danger float-right"
                          >5.6k</span
                        >
                      </li>
                    </ul>
                    <button type="button" class="btn btn-primary mr-2">
                      Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END : End Main Content-->

      <!-- BEGIN : Footer-->

      <!-- End : Footer-->
      <!-- Scroll to top button -->
      <button class="btn btn-primary scroll-top" type="button">
        <i class="ft-arrow-up"></i>
      </button>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import VueApexCharts from "vue3-apexcharts";
import Saleschart from "@/components/Charts/Saleschart.vue";
import Topcharts from "@/components/Charts/Topcharts.vue";
import Productorder from "@/components/Charts/Productorder.vue";

export default {
  name: "HomeView",
  components: {
    apexcharts: VueApexCharts,
    Saleschart,
    Topcharts,
    Productorder,
  },
};
</script>
<style scoped>
@import "../app-assets/css/pages/dashboard2.css";
@import "../app-assets/vendors/css/chartist.min.css";
@import "../app-assets/vendors/css/switchery.min.css";
@import "../app-assets/css/core/menu/horizontal-menu.css";
</style>