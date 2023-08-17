<template>
  <div class="wrapper">
    <div class="main-panel">
      <!-- BEGIN : Main Content-->
      <div class="main-content">
        <div class="content-overlay"></div>
        <div class="content-wrapper">
          <section class="page-user-profile">
            <div class="row profile-info-posts">
              <!-- Profile posts and info starts -->
              <!-- profile -->
              <div class="col-12">
                <div class="card user-profile-page">
                  <!-- user profile body start -->
                  <div class="card-content">
                    <div class="card-body">
                      <div class="row align-items-center w-100 mx-auto">
                        <div class="">
                          <div class="user-profile-images user-img-profile">
                            <!-- user timeline image -->
                            <img src="../../app-assets/img/banner/profile-image.jpg"
                              class="img-fluid  user-timeline-image" alt="User Timeline Image" />
                            <!-- user profile image-->

                          </div>
                        </div>
                        <div class="pl-3 col">
                          <div class="user-profile-text ">
                            <h4 class="profile-text-color mb-0">
                              Martina Ash
                            </h4>
                            <small>@martinaash</small>
                            
                            <small> &nbsp; &nbsp; martinaash@kinfolk.com</small>
                            <br>
                            <small> Born on
                              5th Sep, 1992</small>
                            <small> &nbsp; &nbsp; From
                              Cagliari Italy</small>
                          </div>
                          <div class=" mt-2">
                            <div class="user-profile-text ">
                              <h5 class="profile-text-color mb-0">
                                Bio
                              </h5>
                              <small>  Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Expedita, velit cupiditate maxime ut unde
                                voluptatibus, provident recusandae, ea eveniet est
                                explicabo atque? Molestiae nostrum ab, repudiandae
                                modi deleniti cumque veritatis.</small>
                             
                            </div>
  
                         
                          </div>

                       
                        </div>

                      </div>
                   
                      <div class="row border-top mt-2">
                        <div class="card mx-1 mb-0">
                          <div class="card-content educational-sec">
                            <div class="card-body p-0">
                              <router-link @click="currentComponent = ''" to=""
                                class="btn tab-active w-100 text-white  text-left">Placed</router-link>
                            </div>
                          </div>
                        </div>
                        <div class="card mx-1 mb-0">
                          <div class="card-content educational-sec">
                            <div class="card-body p-0">
                              <router-link @click="currentComponent = 'eduhistory'" to="#eduhistory"
                                class="btn tab-active w-100 text-white text-left">Education</router-link>
                            </div>
                          </div>
                        </div>
                        <div class="card mx-1 mb-0">
                          <div class="card-content educational-sec">
                            <div class="card-body p-0">
                              <router-link @click="currentComponent = 'workhistory'" to="#workhistory"
                                class="btn tab-active w-100 text-white text-left">Work</router-link>
                            </div>
                          </div>
                        </div>
                        <div class="card mx-1 mb-0">
                          <div class="card-content educational-sec">
                            <div class="card-body p-0">
                              <router-link @click="currentComponent = 'componentB'" to="#componentB"
                                class="btn tab-active w-100 text-white text-left">Folklores</router-link>
                            </div>
                          </div>
                        </div>
                        <div class="card mx-1 mb-0">
                          <div class="card-content educational-sec">
                            <div class="card-body p-0">
                              <router-link @click="currentComponent = 'componentC'" to="#componentC"
                                class="btn  tab-active w-100 text-white text-left">Memories</router-link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- user profile body ends -->
                  </div>
                </div>
              </div>
              <!-- profile end -->

              <!-- 1st column starts -->
              <div class="col-lg-3 col-12 d-none">
                <div class="row">

                  <!-- DOB starts -->
                  <div class="col-12">
                    <div class="card">
                      <div class="card-header d-flex justify-content-between align-items-center">
                        <h4 class="card-title m-0">Info</h4>
                      </div>
                      <div class="card-content educational-sec">
                        <div class="card-body">
                          <ul class="list-unstyled mb-0">
                            <li class="d-flex mb-3">
                              Born on
                              <p>&nbsp; 5th Sep, 1992</p>
                            </li>
                            <li class="d-flex mb-3">
                              From
                              <p>&nbsp; Cagliari Italy</p>
                            </li>
                          </ul>
                          <h4 class="card-title m-0">Bio</h4>
                          <p class="m-0" style="font-size: 13px; ">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Expedita, velit cupiditate maxime ut unde
                            voluptatibus, provident recusandae, ea eveniet est
                            explicabo atque? Molestiae nostrum ab, repudiandae
                            modi deleniti cumque veritatis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- DOB ends -->

                </div>
              </div>
              <!-- 1st column ends -->
              <!-- 2nd column starts about -->
              <div class=" col-12">

                <div class="row">
                  <!-- Component A -->
                  <Placed v-if="currentComponent === ''"></Placed>
                  <Eduhistory v-if="currentComponent === 'eduhistory'"></Eduhistory>
                  <Workhistory v-if="currentComponent === 'workhistory'"></Workhistory>

                  <!-- Component B -->

                  <Folklores v-if="currentComponent === 'componentB'"></Folklores>

                  <!-- Component C -->

                  <Memories v-if="currentComponent === 'componentC'"></Memories>
                </div>
              </div>

              <!-- 2nd column ends about-->
            </div>
            <!-- Profile posts and info ends -->
          </section>
        </div>
      </div>
      <!-- END : End Main Content-->

      <!-- Scroll to top button -->
      <button class="btn btn-primary scroll-top" type="button">
        <i class="ft-arrow-up"></i>
      </button>
    </div>
  </div>
</template>

<script>
import Workhistory from "@/components/UserProfile/Workhistoru.vue";
import Folklores from "@/components/UserProfile/Folklores.vue";
import Memories from "@/components/UserProfile/Memories.vue";
// import "../../app-assets/css/pages/page-user-profile.css";
import $ from "jquery";
import Placed from '@/components/UserProfile/Placed.vue';
import Eduhistory from '@/components/UserProfile/Eduhistory.vue';
export default {
  components: { Workhistory, Folklores, Memories, Placed, Eduhistory },
  data() {
    return {
      usertab: "userabout",
      currentComponent: "#componentA",
    };
  },
  created() {
    // Get the URL hash fragment
    this.currentComponent = window.location.hash.slice(1);

    // Add an event listener to handle hash change (when user clicks back/forward or reloads the page)
    window.addEventListener("hashchange", () => {
      this.currentComponent = window.location.hash.slice(1);
    });
  },
  mounted() {
    $(".tab-active").on("click", function () {
      $(".tab-active").removeClass("tab-active-bg");
      $(this).addClass("tab-active-bg");
    });
  },
  methods: {
    changeComponent(component) {
      if ((this.currentComponent = component)) {
        window.location.hash = component;
      }

      // Update the URL hash fragment when component changes
    },
  },
};
</script>

<style></style>