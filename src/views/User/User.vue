
<template>
  <div class="wrapper">
    <div class="main-panel">
      <!-- BEGIN : Main Content-->
      <div class="main-content">
        <div class="content-overlay"></div>
        <div class="content-wrapper">
          <section class="users-list-wrapper my-4">
            <!-- Filter starts -->
            <div class="users-list-filter px-2">
              <form>
                <div class="row border rounded py-2 mb-2 mx-n2">
                  <div class="col-12 col-sm-6 col-lg">
                    <label for="users-list-verified">Name</label>
                    <fieldset class="form-group">
                      <input id="users-list-verified" placeholder="Name" class="form-control" v-model="selectedOption1"
                        @change="handleSelectChange('field1')" />
                    </fieldset>
                  </div>
                  <div class="col-12 col-sm-6 col-lg">
                    <label for="users-list-verified">Email</label>
                    <fieldset class="form-group">
                      <input id="users-list-verified" placeholder="Email" class="form-control" v-model="selectedOption2"
                        @change="handleSelectChange('field2')" />
                    </fieldset>
                  </div>
                  <div class="col-12 col-sm-6 col-lg">
                    <label for="users-list-verified">Phone Number</label>
                    <fieldset class="form-group">
                      <input id="users-list-verified" placeholder="Phone Number" class="form-control"
                        v-model="selectedOption3" @change="handleSelectChange('field3')" />
                    </fieldset>
                  </div>
                  <div class="col-12 col-sm-6 col-lg">
                    <label for="users-list-verified">Family Id</label>
                    <fieldset class="form-group">
                      <input id="users-list-verified" placeholder="Family Id" class="form-control"
                        v-model="selectedOption4" @change="handleSelectChange('field4')" />
                    </fieldset>
                  </div>
                  <div class="col-12 col-sm-6 col-lg">
                    <label for="users-list-verified">Status</label>
                    <fieldset class="form-group">
                      <select id="users-list-verified" class="form-control" @change="handleSelectChange('field5')">
                        <option value="">Active</option>
                        <option value="">Hold</option>
                        <option value="">Unhold</option>
                        <option value="">Block</option>
                      </select>
                    </fieldset>
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
                          <select class="form-control w-25" v-model="selectedItem" :disabled="selectDisabled">
                            <option value="">Hold</option>
                            <option value="">Delete</option>
                            <option value="">Block</option>
                          </select>
                          <br />

                          <table id="users-list-datatable" class="table w-100">
                            <thead>
                              <tr>
                                <th>
                                  <input type="checkbox" name="" id=""  />
                                </th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Family Id</th>
                                <th>Created At</th>
                                <th>Gender</th>
                                <th>address</th>
                                <th>Hold</th>
                                <th>Status</th>
                                <th>Action</th>
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
                                <td>{{ row.email }}</td>
                                <td>{{ row.famid }}</td>
                                <td>{{ row.createdat }}</td>
                                <td>{{ row.gender }}</td>
                                <td>{{ row.add }}</td>
                                <td>
                                  <div
                                    class="custom-switch custom-switch-danger custom-control-inline mb-1 mb-xl-0 d-block">
                                    <input type="checkbox" class="custom-control-input" :id="'hold-switch-' + row.id"
                                      :checked="row.hold" />
                                    <label class="custom-control-label mr-1" @click="openModal('hold', row)"></label>
                                  </div>
                                </td>
                                <td>
                                  <div
                                    class="custom-switch custom-switch-success custom-control-inline mb-1 mb-xl-0 d-block">
                                    <input type="checkbox" class="custom-control-input" :id="'status-switch-' + row.id"
                                      :checked="row.status" />
                                    <label class="custom-control-label mr-1" @click="openModal('status', row)">
                                    </label>
                                  </div>
                                </td>

                                <td class="d-flex">
                                  <div>
                                    <RouterLink :to="'/user/edit/' + row.id">
                                      <i class="icon-note table-icon"></i>
                                    </RouterLink>
                                  </div>
                                  <div>
                                    <RouterLink :to="'/user/show/' + row.id">
                                      <i class="icon-eye table-icon"></i>
                                    </RouterLink>
                                  </div>
                                  <div class="dropdown nav-item" data-menu="dropdown">
                                    <router-link class="bg-transparent nav-link d-flex align-items-center py-0" to=""
                                      data-toggle="dropdown">
                                      <i class="ft-more-vertical- text-white"></i></router-link>
                                    <ul class="dropdown-menu">
                                      <li data-menu="" class="">
                                        <router-link class="dropdown-item d-flex align-items-center"
                                          :to="'/roles/' + row.id" active-class="submenu-active"><span
                                            data-i18n="user">Delete</span></router-link>
                                      </li>
                                      <li data-menu="" class="">
                                        <router-link class="dropdown-item d-flex align-items-center"
                                          :to="'/resetpassword/' + row.id" active-class="submenu-active"><span
                                            data-i18n="user">Reset
                                            Password</span></router-link>
                                      </li>
                                      <li data-menu="" class="">
                                        <router-link class="dropdown-item d-flex align-items-center"
                                          :to="'/user/loginsessions/' + row.id" active-class="submenu-active"><span
                                            data-i18n="user">Login Session</span></router-link>
                                      </li>
                                      <li data-menu="" class="">
                                        <router-link class="dropdown-item d-flex align-items-center"
                                          :to="'/user/loginsessions/' + row.id" active-class="submenu-active"><span
                                            data-i18n="user">Send Message</span></router-link>
                                      </li>
                                      <li data-menu="" class="">
                                        <router-link class="dropdown-item d-flex align-items-center"
                                          :to="'/user/loginsessions/' + row.id" active-class="submenu-active"><span
                                            data-i18n="user">Send Notification</span></router-link>
                                      </li>
                                    </ul>
                                  </div>
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
        <pagination></pagination>
      </div>

      <button class="btn btn-primary scroll-top" type="button">
        <i class="ft-arrow-up"></i>
      </button>
    </div>
  </div>
  <modal :iamsuresend="iamsure" :showmodalsend="closetogglemodal" v-if="showmodal"></modal>
</template>
<script>
import axios from "axios";
import $ from "jquery";
import modal from '../../components/Confirmationmodal.vue';
import pagination from '../../components/Pagination.vue';
export default {
  components: {
    modal,
    pagination
  },
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
      // toggle start
      showmodal: false,
      rowToChange: null,
      actionToPerform: null,
      // toggle end
      response: [
        {
          id: 1,
          famid: 1,
          name: "Admin",
          email: "johndoe@gmail.com",
          createdat: "26-7-23",
          hold: true,
          status: true,
          gender: "male",
          add: "Texas, USA",
        },
        {
          id: 2,
          famid: 1,
          name: "Admin",
          email: "johndoe@gmail.com",
          createdat: "26-7-23",

          hold: false,
          status: true,
          gender: "male",
          add: "Texas, USA",
        },
        {
          id: 3,
          famid: 1,
          name: "Admin",
          createdat: "26-7-23",

          email: "johndoe@gmail.com",
          hold: true,
          status: false,
          gender: "male",
          add: "Texas, USA",
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
  // mounted() {
  //   this.dataTable = this.initDataTable();
  // },
  methods: {
    handleCheckboxChange(itemId) {
      this.checkboxStates[itemId] = !this.checkboxStates[itemId];
      this.selectedItem = "";
    },
    // toggle start
    openModal(action, row) {
      this.actionToPerform = action;
      this.rowToChange = row;
      this.showmodal = true;
    },
    iamsure() {
      if (this.actionToPerform === "hold" && this.rowToChange) {
        this.rowToChange.hold = !this.rowToChange.hold;
      } else if (this.actionToPerform === "status" && this.rowToChange) {
        this.rowToChange.status = !this.rowToChange.status;
      }
      this.showmodal = false;
      this.rowToChange = null;
      this.actionToPerform = null;
    },
    closetogglemodal() {
      this.showmodal = false
    },

    // toggle end
    allchecked() {
      for (const item of this.response) {
        this.checkboxStates[item.id] = this.checlallbullk;
      }
    },
    // initDataTable() {
    //   const table = $(".display").DataTable();
    // },
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
   