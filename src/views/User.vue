
<template>
  <div class="wrapper">
    <div class="main-panel">
      <!-- BEGIN : Main Content-->
      <div class="main-content">
        <div class="content-overlay"></div>
        <div class="content-wrapper">
          <section class="users-list-wrapper my-4">
            <div class="d-flex justify-content-end my-3">
              <RouterLink
                to="/user/create"
                type="button"
                class="btn btn-success bg-light-success mb-1"
              >
                <i class="icon-pencil"></i> Add Roles
              </RouterLink>
            </div>
            <!-- Filter starts -->
            <div class="users-list-filter px-2">
              <form>
                <div class="row border rounded py-2 mb-2 mx-n2">
                  <div class="col-12 col-sm-6 col-lg-2">
                    <label for="users-list-verified">Name</label>
                    <fieldset class="form-group">
                      <input
                        id="users-list-verified"
                        placeholder="Name"
                        class="form-control"
                        v-model="selectedOption1"
                        @change="handleSelectChange('field1')"
                      />
                    </fieldset>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-2">
                    <label for="users-list-verified">Email</label>
                    <fieldset class="form-group">
                      <input
                        id="users-list-verified"
                        placeholder="Email"
                        class="form-control"
                        v-model="selectedOption2"
                        @change="handleSelectChange('field2')"
                      />
                    </fieldset>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-2">
                    <label for="users-list-verified">Phone Number</label>
                    <fieldset class="form-group">
                      <input
                        id="users-list-verified"
                        placeholder="Phone Number"
                        class="form-control"
                        v-model="selectedOption3"
                        @change="handleSelectChange('field3')"
                      />
                    </fieldset>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-2">
                    <label for="users-list-verified">Family Id</label>
                    <fieldset class="form-group">
                      <input
                        id="users-list-verified"
                        placeholder="Family Id"
                        class="form-control"
                        v-model="selectedOption4"
                        @change="handleSelectChange('field4')"
                      />
                    </fieldset>
                  </div>
                  <div class="col-12 col-sm-6 col-lg-2">
                    <label for="users-list-verified">Status</label>
                    <fieldset class="form-group">
                      <select
                        id="users-list-verified"
                        class="form-control"
                        @change="handleSelectChange('field5')"
                      >
                        <option value="">Active</option>
                        <option value="">Hold</option>
                        <option value="">Unhold</option>
                        <option value="">Block</option>
                      </select>
                    </fieldset>
                  </div>

                  <input
                    type="text"
                    v-model="selectedValue"
                    class="d-none"
                    readonly
                  />
                  <div
                    class="col-12 col-sm-6 col-lg-2 d-flex align-items-center"
                  >
                    <button
                      type="reset"
                      class="btn btn-primary btn-block users-list-clear glow mb-0 mt-2"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <!-- Filter ends -->
            <!-- Table starts -->
            <div class="users-list-table">
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-content">
                      <div class="card-body">
                        <!-- Datatable starts -->

                        <div class="table-responsive">
                          <select
                            class="form-control w-25"
                            v-model="selectedItem"
                            :disabled="selectDisabled"
                          >
                            <option value="">Hold</option>
                            <option value="">Delete</option>
                            <option value="">Block</option>
                          </select>
                          <br />

                          <table
                            id="users-list-datatable"
                            class="table display w-100"
                          >
                            <thead>
                              <tr>
                                <th>
                                  <input
                                    type="checkbox"
                                    name=""
                                    id=""
                                    v-model="checlallbullk"
                                    :checked="checkboxStates[0]"
                                    @change="
                                      handleCheckboxChange(0), allchecked()
                                    "
                                  />
                                </th>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Family Id</th>
                                <th>Hold</th>
                                <th>Status</th>
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
                                <td>
                                  <input
                                    type="checkbox"
                                    name=""
                                    id=""
                                    class="checkbox"
                                    :checked="checkboxStates[row.id]"
                                    @change="handleCheckboxChange(row.id)"
                                  />
                                </td>
                                <td>
                                  <label for="" class="pl-2">{{
                                    row.id
                                  }}</label>
                                </td>
                                <td>{{ row.name }}</td>
                                <td>{{ row.email }}</td>
                                <td>{{ row.famid }}</td>
                                <td>
                                  <div
                                    class="custom-switch custom-switch-danger custom-control-inline mb-1 mb-xl-0 d-block"
                                  >
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="color-switch-4"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label mr-1"
                                      for="color-switch-4"
                                    ></label>
                                  </div>
                                </td>
                                <td>
                                  <div
                                    class="custom-switch custom-switch-success custom-control-inline mb-1 mb-xl-0 d-block"
                                  >
                                    <input
                                      type="checkbox"
                                      class="custom-control-input"
                                      id="color-switch-3"
                                      checked=""
                                    />
                                    <label
                                      class="custom-control-label mr-1"
                                      for="color-switch-3"
                                    >
                                    </label>
                                  </div>
                                </td>

                                <td>
                                  <RouterLink :to="'/user/edit/' + row.id">
                                    <i class="icon-note table-icon"></i>
                                  </RouterLink>
                                  <RouterLink :to="'/roles/' + row.id">
                                    <i class="icon-trash table-icon"></i>
                                  </RouterLink>
                                  <RouterLink :to="'/user/show/' + row.id">
                                    <i class="icon-eye table-icon"></i>
                                  </RouterLink>
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
      checlallbullk: false,
      searchval: null,
      checkboxStates: {}, // Object to track checkbox states
      selectedItem: "",

      response: [
        {
          id: 1,
          famid: 1,
          name: "Admin",
          email: "Description 1",
          hold: "26-7-23",
          status: "Active",
        },
        {
          id: 2,
          famid: 1,
          name: "Admin",
          email: "Description 1",
          hold: "26-7-23",
          status: "Active",
        },
        {
          id: 3,
          famid: 1,
          name: "Admin",
          email: "Description 1",
          hold: "26-7-23",
          status: "Active",
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
      const table = $(".display").DataTable();
    },
    getDataFromServer() {
      // const response = await axios.get(
      //   "https://creativeitsols.com/system/public/api/coupon?key=app_UHYH9ImdcDEtGUK41jt4zlyOrNPE0Yfx5Q3uHhkr"
      // );
      // const
      // return response.data;
    },
    handleSelectChange(field) {
      let selectedValue;
      if (field === "field1") {
        selectedValue = this.selectedOption1;
      } else if (field === "field2") {
        selectedValue = this.selectedOption2;
      } else if (field === "field3") {
        selectedValue = this.selectedOption3;
      }

      // Update the selectedValue property
      this.selectedValue = selectedValue;

      const myval = $('[aria-controls="users-list-datatable"]')
        .eq(1)
        .val(this.selectedValue);

      myval.keypress();

      //   myval = this.selectedValue;
      console.log("selectedValue", myval);
    },
  },
};
</script>

<style>
</style>
   