<template>
  <Navbar  v-if="!showNavbar"/>
  <router-view />
</template>
<script>
import "./app-assets/css/bootstrap.css";

import "./app-assets/css/main.css";
import "./app-assets/css/bootstrap-extended.css";
import "./app-assets/css/colors.css";
import "./app-assets/css/themes/layout-dark.css";
import "./app-assets/css/pages/authentication.css";
import "./app-assets/fonts/simple-line-icons/style.css";
import "./app-assets/fonts/font-awesome/css/font-awesome.min.css";
import "./app-assets/vendors/css/perfect-scrollbar.min.css";
import "./app-assets/vendors/css/prism.min.css";
import "./app-assets/vendors/css/switchery.min.css";
import "./app-assets/css/components.css";
import "./app-assets/fonts/feather/style.css";
import "./app-assets/vendors/css/datatables/dataTables.bootstrap4.min.css";
import 'datatables.net-bs4';
import 'jquery';
import 'popper.js';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js'

import Navbar from './components/Navbar.vue'


export default {
  components:{
    Navbar
  },
  computed: {
    showNavbar() {
      return this.$route.meta.showNavbar === true;
    },
  },
};
</script>
<style>
</style>
