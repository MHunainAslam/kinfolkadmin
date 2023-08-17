<template>
  <nav class="navbar navbar-expand-lg navbar-light header-navbar navbar-static">
    <div class="container-fluid navbar-wrapper">
      <div class="navbar-header d-flex">
        <div class="navbar-toggle menu-toggle d-xl-none d-block float-left align-items-center justify-content-center"
          data-toggle="collapse">
          <i class="ft-menu font-medium-3"></i>
        </div>
        <ul class="navbar-nav d-none">
          <li class="nav-item mr-2 d-none d-lg-block">
            <a class="nav-link apptogglefullscreen" id="navbar-fullscreen" href="javascript:;"><i
                class="ft-maximize font-medium-3"></i></a>
          </li>
        </ul>
        <div class="navbar-brand-center">
          <div class="navbar-header">
            <ul class="navbar-nav">
              <li class="nav-item">
                <div class="logo">
                  <router-link class="logo-text" to="/">
                    <div class="logo-img">
                      <img class="logo-img w-auto" alt="Apex logo" src="../app-assets/img/kinfolk-logo.png" />
                    </div>
                  </router-link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="navbar-container">
        <div class="collapse navbar-collapse d-block" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="dropdown nav-item">
              <a class="nav-link dropdown-toggle dropdown-notification p-0 mt-2" id="dropdownBasic1" href="javascript:;"
                data-toggle="dropdown"><i class="ft-bell font-medium-3"></i><span
                  class="notification badge badge-pill badge-danger">0</span></a>
              <ul class="notification-dropdown dropdown-menu dropdown-menu-media dropdown-menu-right m-0 overflow-hidden">
                <li class="dropdown-menu-header">
                  <div class="dropdown-header d-flex justify-content-between m-0 px-3 py-2 white bg-primary">
                    <div class="d-flex">
                      <i class="ft-bell font-medium-3 d-flex align-items-center mr-2"></i><span class="noti-title">0 New
                        Notification</span>
                    </div>
                    <span class="text-bold-400 cursor-pointer">Mark all as read</span>
                  </div>
                </li>
                <li class="scrollable-container">
                  <a class="d-flex justify-content-between" href="javascript:void(0)">
                    <div class="media d-flex align-items-center">
                      <div class="media-body">
                        <h6 class="m-0">
                          <span>No Notification Found</span>
                        </h6>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>

            <li class="dropdown nav-item mr-1">
              <a class="nav-link dropdown-toggle user-dropdown d-flex align-items-center" id="dropdownBasic2"
                href="javascript:;" data-toggle="dropdown">
                <div class="user d-md-flex d-none mr-2">
                  <span class="text-right">John Doe</span>
                </div>
                <img class="avatar" src="../app-assets/img/portrait/small/avatar-s-1.png" alt="avatar" height="35"
                  width="35" />
              </a>
              <div class="dropdown-menu text-left dropdown-menu-right m-0 pb-0" aria-labelledby="dropdownBasic2">
                <a class="dropdown-item" href="app-chat.html">
                  <div class="d-flex align-items-center">
                    <i class="ft-message-square mr-2"></i><span>Chat</span>
                  </div>
                </a>
                <a class="dropdown-item" href="page-user-profile.html">
                  <div class="d-flex align-items-center">
                    <i class="ft-edit mr-2"></i><span>Edit Profile</span>
                  </div>
                </a>
                <a class="dropdown-item" href="app-email.html">
                  <div class="d-flex align-items-center">
                    <i class="ft-mail mr-2"></i><span>My Inbox</span>
                  </div>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="auth-login.html">
                  <div class="d-flex align-items-center">
                    <i class="ft-power mr-2"></i><span>Logout</span>
                  </div>
                </a>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div
    class="header-navbar navbar-expand-sm navbar navbar-horizontal navbar-sticky navbar-light navbar-shadow menu-border navbar-brand-center bg-glass-2"
    role="navigation" data-menu="menu-wrapper">
    <!-- Horizontal menu content-->
    <div class="navbar-container main-menu-content center-layout" data-menu="menu-container">
      <!-- include ../../../includes/mixins-->

      <ul class="navigation-main nav navbar-nav" id="main-menu-navigation" data-menu="menu-navigation">
        <li class="dropdown nav-item" data-menu="dropdown">
          <router-link class="dropdown-toggle nav-link d-flex align-items-center" to="/" active-class="nav-active"
            data-toggle="dropdown"><i class="ft-user"></i><span data-i18n="Dashboard">Dashboard</span></router-link>
        </li>
     
        <li class="dropdown nav-item " data-menu="dropdown">
          <router-link class="dropdown-toggle nav-link d-flex align-items-center" to="" data-toggle="dropdown"><i
              class="icon-user"></i><span>User Management</span></router-link>
          <ul class="dropdown-menu">
            <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu">
              <router-link class="dropdown-item d-flex align-items-center" to="" 
                data-toggle="dropdown"><i class="ft-arrow-right submenu-icon"></i><span data-i18n="user">User</span></router-link>
              <ul class="dropdown-menu">
                <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu">
                  <router-link class="dropdown-item d-flex align-items-center" to="/user" active-class="submenu-active"
                  data-toggle="dropdown"><i class="ft-arrow-right submenu-icon"></i><span data-i18n="user">View
                    All</span></router-link>
                </li>
                <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu">
                  <router-link class="dropdown-item d-flex align-items-center" to="/user/create"  active-class="submenu-active"
                  data-toggle="dropdown"><i class="ft-arrow-right submenu-icon"></i><span data-i18n="user">Add New</span></router-link>
                </li>
               
              </ul>
            </li>
            <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu">
              <router-link class="dropdown-item d-flex align-items-center" to="" 
                data-toggle="dropdown"><i class="ft-arrow-right submenu-icon"></i><span data-i18n="user">Roles</span></router-link>
              <ul class="dropdown-menu">
                <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu">
                  <router-link class="dropdown-item d-flex align-items-center" to="/roles" active-class="submenu-active"
                  data-toggle="dropdown"><i class="ft-arrow-right submenu-icon"></i><span data-i18n="user">View
                    All</span></router-link>
                </li>
                <li class="dropdown dropdown-submenu" data-menu="dropdown-submenu">
                  <router-link class="dropdown-item d-flex align-items-center"  to="/roles/create" active-class="submenu-active"
                  data-toggle="dropdown"><i class="ft-arrow-right submenu-icon"></i><span data-i18n="user">Add New</span></router-link>
                </li>
               
              </ul>
            </li>
          </ul>
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {

      showMenu: false,
    };
  },
  methods: {
    showOffcanvasMenu() {
      this.showMenu ? (this.showMenu = false) : (this.showMenu = true);
    },
  },
};
</script>

<style scoped></style>