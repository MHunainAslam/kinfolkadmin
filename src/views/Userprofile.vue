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

              <!-- 1st column starts -->
              <div class="col-lg-4 col-12">
                <div class="row">
                  <!-- profile -->
                  <div class="col-12">
                    <div class="card user-profile-page">
                      <!-- user profile body start -->
                      <div class="card-content">
                        <div class="card-body">
                          <div class="d-flex">
                            <div class="user-profile-images">
                              <!-- user timeline image -->
                              <!-- <img
                                      src="../app-assets/img/banner/profile-image.jpg"
                                      class="img-fluid rounded-top user-timeline-image"
                                      alt="User Timeline Image"
                                    /> -->
                              <!-- user profile image -->
                              <img
                                src="../app-assets/img/portrait/small/avatar-s-20.png"
                                class="rounded position-relative"
                                alt="User Profile Image"
                                height="140"
                                width="140"
                              />
                            </div>
                            <div class="pl-3">
                              <div class="user-profile-text my-3">
                                <h4 class="profile-text-color mb-0">
                                  Martina Ash
                                </h4>
                                <small>@martinaash</small>
                              </div>
                              <div class="user-profile-buttons">
                                <RouterLink
                                  to="/user/edit/1"
                                  class="btn bg-light-primary"
                                  >Edit</RouterLink
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- user profile body ends -->
                      </div>
                    </div>
                  </div>
                  <!-- profile end -->

                  <!-- DOB starts -->
                  <div class="col-12">
                    <div class="card">
                      <div
                        class="card-header d-flex justify-content-between align-items-center"
                      >
                        <h4 class="card-title m-0">Education</h4>
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- DOB ends -->
                  <!-- BIO starts -->
                  <div class="col-12">
                    <div class="card">
                      <div
                        class="card-header d-flex justify-content-between align-items-center"
                      >
                        <h4 class="card-title m-0">Bio</h4>
                      </div>
                      <div class="card-content">
                        <div class="card-body">
                          <p class="m-0">
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
                  <!-- BIO ends -->
                </div>
              </div>
              <!-- 1st column ends -->
              <!-- 2nd column starts about -->
              <div class="col-lg-8 col-12">
                <div class="card">
                  <div class="card-body">
                    <router-link
                      @click="currentComponent = ''"
                      to=""
                      class="btn mx-1 tab-active"
                      >About</router-link
                    >
                    <router-link
                      @click="currentComponent = 'componentB'"
                      to="#componentB"
                      class="btn mx-1 tab-active"
                      >Folklores</router-link
                    >
                    <router-link
                      @click="currentComponent = 'componentC'"
                      to="#componentC"
                      class="btn mx-1 tab-active"
                      >Memories</router-link
                    >
                  </div>
                </div>

                <div class="row">
                  <!-- Component A -->
                  <About v-if="currentComponent === ''"></About>

                  <!-- Component B -->

                  <Folklores
                    v-if="currentComponent === 'componentB'"
                  ></Folklores>

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
import About from "@/components/UserProfile/About.vue";
import Folklores from "@/components/UserProfile/Folklores.vue";
import Memories from "@/components/UserProfile/Memories.vue";
import "../app-assets/css/pages/page-user-profile.css";
import $ from "jquery";
export default {
  components: { About, Folklores, Memories },
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

<style>
</style>