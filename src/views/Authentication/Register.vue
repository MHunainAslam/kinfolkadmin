
<template>
  <div class="wrapper">
    <div class="main-panel">
      <!-- BEGIN : Main Content-->
      <div class="main-content">
        <div class="content-overlay"></div>
        <div class="content-wrapper">
          <!--Registration Page Starts-->
          <section id="regestration" class="auth-height">
            <div class="row full-height-vh m-0">
              <div
                class="col-12 d-flex align-items-center justify-content-center"
              >
                <div class="card overflow-hidden">
                  <div class="card-content">
                    <div class="card-body auth-img">
                      <div class="row m-0">
                        <div
                          class="col-lg-6 d-none d-lg-flex justify-content-center align-items-center text-center auth-img-bg py-2"
                        >
                          <img
                            src="../../app-assets/img/gallery/register.png"
                            alt=""
                            class="img-fluid"
                            width="350"
                            height="230"
                          />
                        </div>
                        <div class="col-lg-6 col-md-12 px-4 py-3">
                          <h4 class="card-title mb-2">Create Account</h4>
                          <p>Fill the below form to create a new account.</p>
                          <input
                            type="text"
                            class="form-control mb-2"
                            placeholder="Name"
                          />
                          <input
                            type="email"
                            class="form-control mb-2"
                            placeholder="Email"
                          />
                          <input
                            type="password"
                            class="form-control mb-2"
                            placeholder="Password"
                          />
                          <input
                            type="password"
                            class="form-control mb-2"
                            placeholder="Confirm Password"
                          />
                          <div class="checkbox auth-checkbox font-small-2 mb-3">
                            <input type="checkbox" id="auth-ligin" />
                            <label for="auth-ligin"
                              ><span
                                >I accept the terms & conditions</span
                              ></label
                            >
                          </div>
                          <div
                            class="d-flex justify-content-between flex-sm-row flex-column"
                          >
                            <router-link
                              to="/login"
                              class="btn bg-light-primary mb-2 mb-sm-0"
                              >Back To Login</router-link
                            >
                            <router-link to="/login" class="btn btn-primary"
                              >Register</router-link
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
          <!--Registration Page Ends-->
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