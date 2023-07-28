<template>
  <div class="wrapper">
    <div class="main-panel">
      <!-- BEGIN : Main Content-->
      <div class="main-content">
        <div class="content-overlay"></div>
        <div class="content-wrapper">
          <section class="users-list-wrapper">
            <div class="d-flex justify-content-end my-3">
              <RouterLink
                to="/roles/create"
                type="button"
                class="btn btn-success bg-light-success mb-1"
              >
                <i class="icon-pencil"></i> Add Roles
              </RouterLink>
            </div>
            <!-- Table starts -->
            <div class="users-list-table">
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-content">
                      <div class="card-body">
                        <!-- Datatable starts -->

                        <div class="table-responsive">
                          <table
                            id="users-list-datatable"
                            class="table display w-100"
                          >
                            <thead>
                              <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Date</th>
                                <th>Action</th>
                              </tr>
                            </thead>

                            <tbody>
                              <div
                                class="w-100 h-100 d-flex justify-content-center py-5"
                                v-if="isloading"
                              >
                                <div
                                  class="spinner-border text-primary"
                                  role="status"
                                >
                                  <span class="visually-hidden"></span>
                                </div>
                              </div>
                              <!-- { response } -->
                              <tr v-for="row in response" :key="row.id">
                                <!-- <tr > -->
                                <td>{{ row.name }}</td>
                                <td>{{ row.desc }}</td>
                                <td>{{ row.date }}</td>
                                <td><RouterLink :to="'/roles/'+row.id">
                                  <i class="icon-note table-icon"></i>
                                </RouterLink>
                                <RouterLink :to="'/roles/'+row.id">
                                  <i class="icon-trash table-icon"></i>
                                </RouterLink></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      
                        <!-- Datatable ends -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Table ends -->
          </section>
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
import axios from "axios";
import $ from "jquery";
export default {
  data() {
    return {
      data: [],
      dataTable: null,
      isloading: false,
      selectedOption1: "",
      selectedOption2: "",
      selectedOption3: "",
      selectedValue: "",
      searchval: null,

      response: [
        { id: 1, name: "Admin", desc: "Description 1", date: "26-7-23" },
        { id: 2, name: "Author", desc: "Description 2", date: "26-7-23" },
        // Add more data objects here if needed
      ],

      // response: ''
    };
  },
  mounted() {
    this.dataTable = this.initDataTable();
    console.log("zxzx", this.response);
  },
  methods: {
    initDataTable() {
      // const response = this.getDataFromServer();
      const table = $(".display").DataTable();
    },
    getDataFromServer() {
      // const response = await axios.get(
      //   "https://creativeitsols.com/system/public/api/coupon?key=app_UHYH9ImdcDEtGUK41jt4zlyOrNPE0Yfx5Q3uHhkr"
      // );
      // const
      // return response.data;
    },
  },
};
</script>

<style>
</style>