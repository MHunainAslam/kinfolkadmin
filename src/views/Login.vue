<template>
  
  <div class="wrapper">
    <div class="main-panel">
      <!-- BEGIN : Main Content-->
      <div class="main-content">
        <div class="content-overlay"></div>
        <div class="content-wrapper">
          <!--Login Page Starts-->
          <section id="login" class="auth-height">
            <div class="row full-height-vh m-0">
              <div
                class="col-12 d-flex align-items-center justify-content-center"
              >
                <div class="card overflow-hidden">
                  <div class="card-content">
                    <div class="card-body auth-img">
                      <div class="row m-0">
                        <div
                          class="col-lg-6 d-none d-lg-flex justify-content-center align-items-center auth-img-bg p-3"
                        >
                          <img
                            src="../app-assets/img/gallery/login.png"
                            alt=""
                            class="img-fluid"
                            width="300"
                            height="230"
                          />
                        </div>
                        <div class="col-lg-6 col-12 px-4 py-3">
                          <h4 class="mb-2 card-title">Login</h4>
                          <p>Welcome back, please login to your account.</p>
                          <input
                            type="text"
                            class="form-control mb-3"
                            placeholder="Username"
                          />
                          <input
                            type="password"
                            class="form-control mb-2"
                            placeholder="Password"
                          />
                          <div
                            class="d-sm-flex justify-content-between mb-3 font-small-2"
                          >
                            <div class="remember-me mb-2 mb-sm-0">
                              <div class="checkbox auth-checkbox">
                                <input type="checkbox" id="auth-ligin" />
                                <label for="auth-ligin"
                                  ><span>Remember Me</span></label
                                >
                              </div>
                            </div>
                            <router-link to="/forget"
                              >Forgot Password?</router-link
                            >
                          </div>
                          <div
                            class="d-flex justify-content-end flex-sm-row flex-column"
                          >
                            <!-- <router-link
                              to="/register"
                              class="btn bg-light-primary mb-2 mb-sm-0"
                              >Register</router-link
                            > -->
                            <a href="dashboard1.html" class="btn btn-primary"
                              >Login</a
                            >
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <!--Login Page Ends-->
        </div>
      </div>
      <!-- END : End Main Content-->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>