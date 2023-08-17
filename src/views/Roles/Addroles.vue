<template>
  <div>
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
                    <div class="card-content">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-6">
                            <fieldset class="form-group">
                              <label for="addrolesname">Name</label>
                              <input
                                type="text"
                                class="form-control"
                                id="addrolesname"
                                placeholder="Name"
                              />
                            </fieldset>
                          </div>
                          <div class="col-md-6">
                            <fieldset class="form-group">
                              <label for="addrolesname">Description</label>
                              <input
                                type="text"
                                class="form-control"
                                id="addrolesname"
                                placeholder="Name"
                              />
                            </fieldset>
                          </div>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <div class="col-12 users-module px-0">
                        <div class="table-responsive">
                          <div class="row mx-auto w-100">
                            <div class="card w-100 my-1">
                              <div class="card-body">
                                <p class="text-white font-weight-bold mb-0">Employee</p>
                              </div>
                            </div>
                          </div>
                          <table class="table mb-0 ">
                            <thead>
                              <tr>
                                <th class="col-2">Name</th>
                                <th class="col-5">Description</th>
                                <th>View</th>
                                <th>Edit</th>
                                <th>Create</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Users</td>
                                <td>Lorem ipsum dolor sit amet consectetur,</td>
                                <td>
                                  <div class="checkbox">
                                    <input
                                      type="checkbox"
                                      id="users-checkbox2"
                                    />
                                    <label for="users-checkbox2"></label>
                                  </div>
                                </td>
                                <td>
                                  <div class="checkbox">
                                    <input
                                      type="checkbox"
                                      id="users-checkbox3"
                                    />
                                    <label for="users-checkbox3"></label>
                                  </div>
                                </td>
                                <td>
                                  <div class="checkbox">
                                    <input
                                      type="checkbox"
                                      id="users-checkbox4"
                                      checked
                                    />
                                    <label for="users-checkbox4"></label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>Roles</td>
                                <td>Lorem ipsum dolor sit amet consectetur,</td>
                                <td>
                                  <div class="checkbox">
                                    <input
                                      type="checkbox"
                                      id="users-checkbox6"
                                      checked
                                    />
                                    <label for="users-checkbox6"></label>
                                  </div>
                                </td>
                                <td>
                                  <div class="checkbox">
                                    <input
                                      type="checkbox"
                                      id="users-checkbox7"
                                    />
                                    <label for="users-checkbox7"></label>
                                  </div>
                                </td>
                                <td>
                                  <div class="checkbox">
                                    <input
                                      type="checkbox"
                                      id="users-checkbox8"
                                      checked
                                    />
                                    <label for="users-checkbox8"></label>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>Staff</td>
                                <td>Lorem ipsum dolor sit amet consectetur,</td>
                                <td>
                                  <div class="checkbox">
                                    <input
                                      type="checkbox"
                                      id="users-checkbox10"
                                      checked
                                    />
                                    <label for="users-checkbox10"></label>
                                  </div>
                                </td>
                                <td>
                                  <div class="checkbox">
                                    <input
                                      type="checkbox"
                                      id="users-checkbox11"
                                    />
                                    <label for="users-checkbox11"></label>
                                  </div>
                                </td>
                                <td>
                                  <div class="checkbox">
                                    <input
                                      type="checkbox"
                                      id="users-checkbox12"
                                    />
                                    <label for="users-checkbox12"></label>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 my-3">
                    <div class="d-flex justify-content-end">
                      <button
                        type="button"
                        class="btn btn btn-primary mr-2 text-uppercase"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <!-- END : End Main Content-->

        <!-- Scroll to top button -->
        <button class="btn btn-primary scroll-top" type="button">
          <i class="ft-arrow-up"></i>
        </button>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {};
</script>
  

<style>
</style>