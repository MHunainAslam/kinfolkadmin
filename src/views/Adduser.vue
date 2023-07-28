<template>
    <div class="wrapper">
      <div class="main-panel">
        <!-- BEGIN : Main Content-->
        <div class="main-content">
          <div class="content-overlay"></div>
          <div class="content-wrapper">
            <section id="basic-input">
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-header">
                      <h4 class="card-title">Create User</h4>
                    </div>
                    <div class="card-content">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-12">
                            <fieldset class="form-group">
                              <label for="addusername">Name</label>
                              <input
                                type="text"
                                class="form-control"
                                id="addusername"
                                placeholder="Name"
                              />
                            </fieldset>
                          </div>
                          <div class="col-md-12">
                            <fieldset class="form-group">
                              <label for="addruseremail">Email</label>
                              <input
                                type="text"
                                class="form-control"
                                id="addruseremail"
                                placeholder="Email"
                              />
                            </fieldset>
                          </div>
                          <div class="col-md-12">
                            <fieldset class="form-group">
                              <label>Roles</label>
                            </fieldset>
                            <div class="roles-checkbox">
                              <fieldset class="form-group d-flex">
                                <input
                                  type="checkbox"
                                  class="custom-control custom-checkbox"
                                  id="v"
                                  placeholder="Name"
                                />
                                <label for="useradmin">Admin</label>
                              </fieldset>
                              <fieldset class="form-group d-flex">
                                <input
                                  type="checkbox"
                                  class="custom-control custom-checkbox"
                                  id="userauthor"
                                  placeholder="Name"
                                />
                                <label for="userauthor">Author</label>
                              </fieldset>
                             
                            </div>
                          </div>
                          <div class="col-md-12">
                              <div class="d-flex justify-content-end">
                              <button type="button" class="btn btn-info mr-1 mb-1 text-uppercase">Submit</button>
                          </div>
                      </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
  export default {};
  </script>
  
  <style>
  </style>vue