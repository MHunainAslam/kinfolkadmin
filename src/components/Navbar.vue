<template>
  
  <nav class="navbar navbar-expand-lg navbar-light header-navbar navbar-static">
    <div class="container-fluid navbar-wrapper">
      <div class="navbar-header d-flex">
        <div
          class="navbar-toggle menu-toggle d-xl-none d-block float-left align-items-center justify-content-center"
          data-toggle="collapse"
        >
          <i class="ft-menu font-medium-3"></i>
        </div>
        <ul class="navbar-nav d-none">
          <li class="nav-item mr-2 d-none d-lg-block">
            <a
              class="nav-link apptogglefullscreen"
              id="navbar-fullscreen"
              href="javascript:;"
              ><i class="ft-maximize font-medium-3"></i
            ></a>
          </li>
         
        </ul>
        <div class="navbar-brand-center">
          <div class="navbar-header">
            <ul class="navbar-nav">
              <li class="nav-item">
                <div class="logo">
                  <a class="logo-text" href="index.html">
                    <div class="logo-img">
                      <img
                        class="logo-img w-auto"
                        alt="Apex logo"
                        src="../app-assets/img/kinfolk-logo.png"
                      />
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="navbar-container">
        <div
          class="collapse navbar-collapse d-block"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav">
       
            <li class="dropdown nav-item">
              <a
                class="nav-link dropdown-toggle dropdown-notification p-0 mt-2"
                id="dropdownBasic1"
                href="javascript:;"
                data-toggle="dropdown"
                ><i class="ft-bell font-medium-3"></i
                ><span class="notification badge badge-pill badge-danger"
                  >4</span
                ></a
              >
              <ul
                class="notification-dropdown dropdown-menu dropdown-menu-media dropdown-menu-right m-0 overflow-hidden"
              >
                <li class="dropdown-menu-header">
                  <div
                    class="dropdown-header d-flex justify-content-between m-0 px-3 py-2 white bg-primary"
                  >
                    <div class="d-flex">
                      <i
                        class="ft-bell font-medium-3 d-flex align-items-center mr-2"
                      ></i
                      ><span class="noti-title">7 New Notification</span>
                    </div>
                    <span class="text-bold-400 cursor-pointer"
                      >Mark all as read</span
                    >
                  </div>
                </li>
                <li class="scrollable-container">
                  <a
                    class="d-flex justify-content-between"
                    href="javascript:void(0)"
                  >
                    <div class="media d-flex align-items-center">
                      <div class="media-left">
                        <div class="mr-3">
                          <img
                            class="avatar"
                            src="../app-assets/img/portrait/small/avatar-s-20.png"
                            alt="avatar"
                            height="45"
                            width="45"
                          />
                        </div>
                      </div>
                      <div class="media-body">
                        <h6 class="m-0">
                          <span>Kate Young</span
                          ><small class="grey lighten-1 font-italic float-right"
                            >5 mins ago</small
                          >
                        </h6>
                        <small class="noti-text">Commented on your photo</small>
                        <h6 class="noti-text font-small-3 m-0">
                          Great Shot John! Really enjoying the composition on
                          this piece.
                        </h6>
                      </div>
                    </div> </a
                  ><a
                    class="d-flex justify-content-between"
                    href="javascript:void(0)"
                  >
                    <div class="media d-flex align-items-center">
                      <div class="media-left">
                        <div class="mr-3">
                          <img
                            class="avatar"
                            src="../app-assets/img/portrait/small/avatar-s-11.png"
                            alt="avatar"
                            height="45"
                            width="45"
                          />
                        </div>
                      </div>
                      <div class="media-body">
                        <h6 class="m-0">
                          <span>Andrew Watts</span
                          ><small class="grey lighten-1 font-italic float-right"
                            >49 mins ago</small
                          >
                        </h6>
                        <small class="noti-text"
                          >Liked your album: UI/UX Inspo</small
                        >
                      </div>
                    </div> </a
                  ><a
                    class="d-flex justify-content-between read-notification"
                    href="javascript:void(0)"
                  >
                    <div class="media d-flex align-items-center py-0 pr-0">
                      <div class="media-left">
                        <div class="mr-3">
                          <img
                            src="../app-assets/img/icons/sketch-mac-icon.png"
                            alt="avatar"
                            height="45"
                            width="45"
                          />
                        </div>
                      </div>
                      <div class="media-body">
                        <h6 class="m-0">Update</h6>
                        <small class="noti-text">MyBook v2.0.7</small>
                      </div>
                      <div class="media-right">
                        <div class="border-left">
                          <div class="px-4 py-2 border-bottom">
                            <h6 class="m-0 text-bold-600">Update</h6>
                          </div>
                          <div class="px-4 py-2 text-center">
                            <h6 class="m-0">Close</h6>
                          </div>
                        </div>
                      </div>
                    </div> </a
                  ><a
                    class="d-flex justify-content-between read-notification"
                    href="javascript:void(0)"
                  >
                    <div class="media d-flex align-items-center">
                      <div class="media-left">
                        <div class="avatar bg-primary bg-lighten-3 mr-3 p-1">
                          <span class="avatar-content font-medium-2">LD</span>
                        </div>
                      </div>
                      <div class="media-body">
                        <h6 class="m-0">
                          <span>Registration done</span
                          ><small class="grey lighten-1 font-italic float-right"
                            >6 hrs ago</small
                          >
                        </h6>
                      </div>
                    </div>
                  </a>
                  <div class="cursor-pointer">
                    <div
                      class="media d-flex align-items-center justify-content-between"
                    >
                      <div class="media-left">
                        <div class="media-body">
                          <h6 class="m-0">New Offers</h6>
                        </div>
                      </div>
                      <div class="media-right">
                        <div class="custom-control custom-switch">
                          <input
                            class="switchery"
                            type="checkbox"
                            checked
                            id="notificationSwtich"
                            data-size="sm"
                          />
                          <label for="notificationSwtich"></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="d-flex justify-content-between cursor-pointer read-notification"
                  >
                    <div class="media d-flex align-items-center">
                      <div class="media-left">
                        <div class="avatar bg-danger bg-lighten-4 mr-3 p-1">
                          <span class="avatar-content font-medium-2"
                            ><i class="ft-heart text-danger"></i
                          ></span>
                        </div>
                      </div>
                      <div class="media-body">
                        <h6 class="m-0">
                          <span>Application approved</span
                          ><small class="grey lighten-1 font-italic float-right"
                            >18 hrs ago</small
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <a
                    class="d-flex justify-content-between read-notification"
                    href="javascript:void(0)"
                  >
                    <div class="media d-flex align-items-center">
                      <div class="media-left">
                        <div class="mr-3">
                          <img
                            class="avatar"
                            src="../app-assets/img/portrait/small/avatar-s-6.png"
                            alt="avatar"
                            height="45"
                            width="45"
                          />
                        </div>
                      </div>
                      <div class="media-body">
                        <h6 class="m-0">
                          <span>Anna Lee</span
                          ><small class="grey lighten-1 font-italic float-right"
                            >27 hrs ago</small
                          >
                        </h6>
                        <small class="noti-text">Commented on your photo</small>
                        <h6 class="noti-text font-small-3 text-bold-500 m-0">
                          Woah!Loving these colors! Keep it up
                        </h6>
                      </div>
                    </div>
                  </a>
                  <div
                    class="d-flex justify-content-between cursor-pointer read-notification"
                  >
                    <div class="media d-flex align-items-center">
                      <div class="media-left">
                        <div class="avatar bg-info bg-lighten-4 mr-3 p-1">
                          <div class="avatar-content font-medium-2">
                            <i class="ft-align-left text-info"></i>
                          </div>
                        </div>
                      </div>
                      <div class="media-body">
                        <h6 class="m-0">
                          <span>Report generated</span
                          ><small class="grey lighten-1 font-italic float-right"
                            >35 hrs ago</small
                          >
                        </h6>
                      </div>
                    </div>
                  </div>
                  <a
                    class="d-flex justify-content-between read-notification"
                    href="javascript:void(0)"
                  >
                    <div class="media d-flex align-items-center">
                      <div class="media-left">
                        <div class="mr-3">
                          <img
                            class="avatar"
                            src="../app-assets/img/portrait/small/avatar-s-7.png"
                            alt="avatar"
                            height="45"
                            width="45"
                          />
                        </div>
                      </div>
                      <div class="media-body">
                        <h6 class="m-0">
                          <span>Oliver Wright</span
                          ><small class="grey lighten-1 font-italic float-right"
                            >2 days ago</small
                          >
                        </h6>
                        <small class="noti-text"
                          >Liked your album: UI/UX Inspo</small
                        >
                      </div>
                    </div>
                  </a>
                </li>
                <li class="dropdown-menu-footer">
                  <div
                    class="noti-footer text-center cursor-pointer primary border-top text-bold-400 py-1"
                  >
                    Read All Notifications
                  </div>
                </li>
              </ul>
            </li>
            <li class="dropdown nav-item mr-1">
              <a
                class="nav-link dropdown-toggle user-dropdown d-flex align-items-center"
                id="dropdownBasic2"
                href="javascript:;"
                data-toggle="dropdown"
              >
                <div class="user d-md-flex d-none mr-2">
                  <span class="text-right">John Doe</span
                  
                  >
                </div>
                <img
                  class="avatar"
                  src="../app-assets/img/portrait/small/avatar-s-1.png"
                  alt="avatar"
                  height="35"
                  width="35"
                />
              </a>
              <div
                class="dropdown-menu text-left dropdown-menu-right m-0 pb-0"
                aria-labelledby="dropdownBasic2"
              >
                <a class="dropdown-item" href="app-chat.html">
                  <div class="d-flex align-items-center">
                    <i class="ft-message-square mr-2"></i><span>Chat</span>
                  </div> </a
                ><a class="dropdown-item" href="page-user-profile.html">
                  <div class="d-flex align-items-center">
                    <i class="ft-edit mr-2"></i><span>Edit Profile</span>
                  </div> </a
                ><a class="dropdown-item" href="app-email.html">
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
    role="navigation"
    data-menu="menu-wrapper"
  >
    <!-- Horizontal menu content-->
    <div
      class="navbar-container main-menu-content center-layout"
      data-menu="menu-container"
    >
      <!-- include ../../../includes/mixins-->
      <ul
        class="navigation-main nav navbar-nav"
        id="main-menu-navigation"
        data-menu="menu-navigation"
      >
        <li class="dropdown nav-item" data-menu="dropdown">
          <router-link
            class="dropdown-toggle nav-link d-flex align-items-center"
            to="/"
            active-class="nav-active"
            data-toggle="dropdown"
            ><i class="ft-home"></i
            ><span data-i18n="Dashboard">Dashboard</span></router-link
          >
        </li>
        <li class="dropdown nav-item" data-menu="dropdown">
          <router-link
            class="dropdown-toggle nav-link d-flex align-items-center"
            to="/roles"
            active-class="nav-active"
            data-toggle="dropdown"
            ><i class="icon-user"></i><span data-i18n="Roles">Roles</span></router-link
          >
        </li>
        <li class="dropdown nav-item" data-menu="dropdown">
          <router-link
            class="dropdown-toggle nav-link d-flex align-items-center"
            to="/user"
            active-class="nav-active"
            data-toggle="dropdown"
            ><i class="icon-user"></i><span data-i18n="User">User</span></router-link
          >
        </li>
      
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  data(){
        return {
          showMenu: false
        }
    },
    methods: {
        showOffcanvasMenu(){
            this.showMenu ? this.showMenu = false : this.showMenu = true;
        }
    }
};
</script>

<style scoped>

</style>