<template>
  <div class="wrapper">
    <div class="main-panel">
      <!-- BEGIN : Main Content-->
      <div class="main-content">
        <div class="content-overlay"></div>
        <div class="content-wrapper">
          <section class="users-list-wrapper">
            <!-- Table starts -->
            <div class="users-list-table">
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-content">
                      <div class="card-body">
                        <!-- Datatable starts -->
                        <div class="col-12 col-sm-6 col-lg-3 px-0 mb-3">
                          <label for="users-list-verified">Status</label>
                          <fieldset class="form-group">
                            <select id="users-list-verified" @change="handleSelectChange('field5')" class="form-control "
                              v-model="selectedItem" :disabled="selectDisabled">
                              <option value="" selected>Bulk Action</option>
                              <option value="delete">Delete</option>

                            </select>
                          </fieldset>
                        </div>
                        <div class="table-responsive">
                          <table id="users-list-datatable" class="table display w-100">
                            <thead>
                              <tr>
                                <th>
                                  <input type="checkbox" name="" id="" v-model="checlallbullk"
                                    :checked="checkboxStates[0]" @change="
                                      handleCheckboxChange(0), allchecked()
                                      " />
                                </th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>No. of Users</th>
                                <th>Created at</th>
                                <th>Updated at</th>
                                <th>Created by</th>
                                <th>Action</th>
                                <th>User</th>
                              </tr>
                            </thead>

                            <tbody>
                              <div class="w-100 h-100 d-flex justify-content-center py-5" v-if="isloading">
                                <div class="spinner-border text-primary" role="status">
                                  <span class="visually-hidden"></span>
                                </div>
                              </div>
                              <!-- { response } -->
                              <tr v-for="row in response" :key="row.id">
                                <!-- <tr > -->
                                <td>
                                  <input type="checkbox" name="" id="" class="checkbox" :checked="checkboxStates[row.id]"
                                    @change="handleCheckboxChange(row.id)" />
                                </td>
                                <td>{{ row.name }}</td>
                                <td>{{ row.desc }}</td>
                                <td>{{ row.noofuser }}</td>
                                <td>{{ row.date }}</td>
                                <td>{{ row.date }}</td>
                                <td>{{ row.createdby }}</td>
                                <td>
                                  <RouterLink :to="'/roles/' + row.id">
                                    <i class="icon-note table-icon"></i>
                                  </RouterLink>
                                  <RouterLink :to="'/roles/' + row.id">
                                    <i class="icon-trash table-icon"></i>
                                  </RouterLink>
                                </td>
                                <td>
                                  <router-link :to="'/user/?roles=' + row.id">
                                    <button class="btn btn-primary ">View user</button>
                                  </router-link>
                                </td>

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
      checlallbullk: false,
      checkboxStates: {},
      selectedItem: "",

      response: [
        {
          id: 1,
          name: "Admin",
          desc: "Description 1",
          date: "26-7-23",
          noofuser: "4",
          createdby: "John Doe",
        },
        {
          id: 2,
          name: "Author",
          desc: "Description 2",
          date: "26-7-23",
          noofuser: "6",
          createdby: "John Doe",
        },
        // Add more data objects here if needed
      ],

      // response: ''
    };
  },
  computed: {
    selectDisabled() {
      return Object.values(this.checkboxStates).every((state) => !state);
    },
  },
  mounted() {
    this.dataTable = this.initDataTable();
    console.log("zxzx", this.checlallbullk);
  },
  methods: {
    handleCheckboxChange(itemId) {
      this.checkboxStates[itemId] = !this.checkboxStates[itemId];
      this.selectedItem = "";
    },
    allchecked() {
      for (const item of this.response) {
        this.checkboxStates[item.id] = this.checlallbullk;
      }
    },
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

<style></style>