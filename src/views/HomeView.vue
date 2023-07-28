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
            <div class="col-xl-3 col-lg-6 col-md-6 col-12">
              <div class="card bg-info bg-lighten-3">
                <div class="card-content">
                  <div class="card-body py-0">
                    <div class="media">
                      <div class="media-body info text-left">
                        <h3 class="font-large-1 info mb-0">$15,678</h3>
                        <span>Total Cost</span>
                      </div>
                      <div class="media-right info text-right">
                        <i class="ft-percent font-large-1"></i>
                      </div>
                    </div>
                  </div>
                  <div
                    id="Widget-line-chart"
                    class="height-75 WidgetlineChart WidgetlineChartShadow WidgetChart1 mb-3"
                  ></div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-12">
              <div class="card bg-warning bg-lighten-3">
                <div class="card-content">
                  <div class="card-body py-0">
                    <div class="media">
                      <div class="media-body warning text-left">
                        <h3 class="font-large-1 warning mb-0">$2156</h3>
                        <span>Total Tax</span>
                      </div>
                      <div class="media-right warning text-right">
                        <i class="ft-activity font-large-1"></i>
                      </div>
                    </div>
                  </div>
                  <div
                    id="Widget-line-chart2"
                    class="height-75 WidgetlineChart WidgetlineChartShadow WidgetChart2 mb-3"
                  ></div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-6 col-md-6 col-12">
              <div class="card bg-primary bg-lighten-3">
                <div class="card-content">
                  <div class="card-body py-0">
                    <div class="media">
                      <div class="media-body primary text-left">
                        <h3 class="font-large-1 primary mb-0">$45,668</h3>
                        <span>Total Sales</span>
                      </div>
                      <div class="media-right primary text-right">
                        <i class="ft-trending-up font-large-1"></i>
                      </div>
                    </div>
                  </div>
                  <div
                    id="Widget-line-chart3"
                    class="height-75 WidgetlineChart WidgetlineChartShadow WidgetChart3 mb-3"
                  ></div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-12">
              <div class="card bg-success bg-lighten-3">
                <div class="card-content">
                  <div class="card-body py-0">
                    <div class="media">
                      <div class="media-body success text-left">
                        <h3 class="font-large-1 success mb-0">$32,454</h3>
                        <span>Total Earning</span>
                      </div>
                      <div class="media-right success text-right">
                        <i class="ft-credit-card font-large-1"></i>
                      </div>
                    </div>
                  </div>
                  <div
                    id="Widget-line-chart4"
                    class="height-75 WidgetlineChart WidgetlineChartShadow WidgetChart4 mb-3"
                  ></div>
                </div>
              </div>
            </div>
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
            <div class="col-xl-6 col-lg-12">
              <div class="card">
                <div class="card-header pb-0">
                  <h4 class="card-title">Statistics</h4>
                </div>
                <div class="card-content">
                  <div class="card-body">
                    <div class="chart-info mb-2">
                      <span class="mr-3">
                        <i class="fa fa-circle info font-small-2 mr-1"></i>
                        <span>Profit</span>
                      </span>
                      <span>
                        <i class="fa fa-circle success font-small-2 mr-1"></i>
                        <span>Growth</span>
                      </span>
                    </div>
                    <div
                      id="line-chart2"
                      class="height-350 lineChart2 lineChart2Shadow"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-3 match-height">
            <div class="col-xl-4 col-lg-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Earnings</h4>
                  <span class="grey">Mon 18 - Sun 21</span>
                </div>
                <div class="card-content">
                  <div class="card-body">
                    <div class="earning-details mb-3">
                      <h2 class="mb-1">
                        <span>$4295.36</span>
                        <i class="ft-arrow-up success font-medium-3"></i>
                      </h2>
                      <span class="font-medium-1 grey">Total Earnings</span>
                    </div>
                    <div
                      id="Widget-line-chart22"
                      class="height-100 WidgetlineChart5 WidgetlineChart5Shadow"
                    ></div>
                    <div class="text-center mt-4">
                      <button type="button" class="btn btn-info mr-2">
                        View Full
                      </button>
                      <button type="button" class="btn bg-light-info px-3">
                        Print
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-12">
              <div class="card overflow-hidden">
                <div class="card-content">
                  <div class="card-img">
                    <div
                      id="carousel-example-generic3"
                      class="carousel slide"
                      data-ride="carousel"
                    >
                      <ol class="carousel-indicators">
                        <li
                          data-target="#carousel-example-generic3"
                          data-slide-to="0"
                          class="active"
                        ></li>
                        <li
                          data-target="#carousel-example-generic3"
                          data-slide-to="1"
                        ></li>
                        <li
                          data-target="#carousel-example-generic3"
                          data-slide-to="2"
                        ></li>
                      </ol>
                      <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                          <img
                            src="../app-assets/img/photos/17.jpg"
                            alt="First slide"
                          />
                        </div>
                        <div class="carousel-item">
                          <img
                            src="../app-assets/img/photos/13.jpg"
                            alt="Second slide"
                          />
                        </div>
                        <div class="carousel-item">
                          <img
                            src="../app-assets/img/photos/12.jpg"
                            alt="Third slide"
                          />
                        </div>
                      </div>
                      <a
                        class="carousel-control-prev"
                        href="#carousel-example-generic3"
                        role="button"
                        data-slide="prev"
                      >
                        <span
                          class="ft-chevron-left icon-prev"
                          aria-hidden="true"
                        ></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a
                        class="carousel-control-next"
                        href="#carousel-example-generic3"
                        role="button"
                        data-slide="next"
                      >
                        <span
                          class="ft-chevron-right icon-next"
                          aria-hidden="true"
                        ></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
                    <button
                      type="button"
                      class="btn btn-floating halfway-fab bg-danger"
                    >
                      <i class="ft-plus"></i>
                    </button>
                  </div>
                  <div class="card-body">
                    <h4 class="card-title">Our Products</h4>
                    <p>
                      Developer friendly and highly customizable admin templates
                      with Light and Dark layouts.
                    </p>
                    <div>
                      <span class="badge bg-light-primary mr-2">Apex</span>
                      <span class="badge bg-light-success mr-2">Vuexy</span>
                      <span class="badge bg-light-warning mr-2">Frest</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-12">
              <div class="card dash2-user">
                <div class="card-content">
                  <div class="card-body">
                    <div class="d-flex justify-content-end mb-1">
                      <span class="badge bg-light-primary mr-2">Designer</span>
                    </div>
                    <div class="text-center mb-4">
                      <img
                        src="../app-assets/img/portrait/small/avatar-s-13.png"
                        alt="Avatar"
                        class="avatar mb-2"
                      />
                      <h4 class="mb-0">Melvin Shelton</h4>
                      <p class="grey">@Pitinvent</p>
                      <div
                        class="d-flex justify-content-center align-items-center mt-3"
                      >
                        <div class="dash-followers mr-4">
                          <div
                            class="d-flex justify-content-center align-items-center"
                          >
                            <button
                              type="button"
                              class="btn bg-light-secondary px-2"
                            >
                              <i class="ft-user"></i>
                            </button>
                            <div class="ml-2">
                              <h5 class="mb-0">365k</h5>
                              <span class="grey">Followers</span>
                            </div>
                          </div>
                        </div>
                        <div class="dash-ratings">
                          <div
                            class="d-flex justify-content-center align-items-center"
                          >
                            <button
                              type="button"
                              class="btn bg-light-secondary px-2"
                            >
                              <i class="ft-star"></i>
                            </button>
                            <div class="ml-2">
                              <h5 class="mb-0">4.7</h5>
                              <span class="grey">Ratings</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h5>
                      <span>Today's Earnings</span>
                      <small class="font-small-3 ml-1">$25k</small>
                    </h5>
                    <div class="progress dash2-progress">
                      <div
                        class="progress-bar bg-primary bg-lighten-3 primary"
                        role="progressbar"
                        style="width: 30%"
                        aria-valuenow="30"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        30%
                      </div>
                      <div
                        class="progress-bar bg-success bg-lighten-3 success"
                        role="progressbar"
                        style="width: 20%"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        20%
                      </div>
                      <div
                        class="progress-bar bg-info bg-lighten-3 info"
                        role="progressbar"
                        style="width: 35%"
                        aria-valuenow="35"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        35%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row match-height">
            <div class="col-lg-4 col-md-4 col-sm-12 mb-2">
              <div
                class="card card-inverse bg-warning bg-lighten-3 text-center shadow-none"
              >
                <div class="card-content">
                  <div class="card-img overlap">
                    <img
                      src="../app-assets/img/elements/11.png"
                      alt="element 06"
                      height="150"
                    />
                  </div>
                  <div class="card-body">
                    <h4 class="card-title warning">New Arrival</h4>
                    <p class="m-0 warning">
                      Donut toffee candy brownie soufflé macaroon.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 mb-2">
              <div
                class="card card-inverse bg-success bg-lighten-3 text-center shadow-none"
              >
                <div class="card-content">
                  <div class="card-img overlap">
                    <img
                      src="../app-assets/img/elements/14.png"
                      alt="element 03"
                      height="150"
                    />
                  </div>
                  <div class="card-body">
                    <h4 class="card-title success">Brand Minute</h4>
                    <p class="m-0 success">
                      Donut toffee candy brownie soufflé macaroon.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-12 mb-2">
              <div
                class="card card-inverse bg-primary bg-lighten-3 text-center shadow-none"
              >
                <div class="card-content">
                  <div class="card-img overlap">
                    <img
                      src="../app-assets/img/elements/15.png"
                      alt="element 07"
                      height="150"
                    />
                  </div>
                  <div class="card-body">
                    <h4 class="card-title primary">Brand Minute</h4>
                    <p class="m-0 primary">
                      Donut toffee candy brownie soufflé macaroon.
                    </p>
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
                    <div
                      id="line-area-chart"
                      class="height-300 lineAreaChart mb-1"
                    ></div>
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
import Saleschart from '@/components/Charts/Saleschart.vue'
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "HomeView",
  components: {
    apexcharts: VueApexCharts,
    Saleschart,
  },
  // components: {
  //   HelloWorld
  // }
 
};

</script>
<style scoped>
@import "../app-assets/css/pages/dashboard2.css";
@import "../app-assets/vendors/css/chartist.min.css";
@import "../app-assets/vendors/css/switchery.min.css";
@import "../app-assets/css/core/menu/horizontal-menu.css";



</style>