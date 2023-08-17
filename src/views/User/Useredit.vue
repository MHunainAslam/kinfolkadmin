<template>
  <div class="wrapper">
    <div class="main-panel">
      <!-- BEGIN : Main Content-->
      <div class="main-content">
        <div class="content-overlay"></div>
        <div class="content-wrapper">
          <section class="page-user-profile">
            <div class="row profile-info-posts">
              <!-- Profile posts and info starts -->
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <div class="row justify-content-end">
                      <div class="custom-switch custom-switch-danger custom-control-inline mb-1 mb-xl-0">
                        <input type="checkbox" class="custom-control-input" id="color-switch-4" checked="" />
                        <label class="custom-control-label mr-1" for="color-switch-4">
                          <span>Hold</span>
                        </label>
                      </div>
                      <div class="custom-switch custom-switch-success custom-control-inline mb-1 mb-xl-0">
                        <input type="checkbox" class="custom-control-input" id="color-switch-3" checked="" />
                        <label class="custom-control-label mr-1" for="color-switch-3">
                          <span>Status</span>
                        </label>
                      </div>
                      <RouterLink to="/roles/1" class=""><i class="icon-trash table-icon"></i></RouterLink>
                      <RouterLink to="/user/edit/1" class=""><i class="icon-eye table-icon"></i></RouterLink>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 1st column starts -->
              <div class="col-lg-4 col-12">
                <div class="row">
                  <!-- profile -->
                  <div class="col-12">
                    <div class="card user-profile-page">
                      <!-- user profile body start -->
                      <div class="card-content">
                        <div class="card-body">
                          <div class="d-flex">
                            <div class="user-profile-images">
                              <img v-if="imageSrc" :src="imageSrc" class="rounded position-relative"
                                alt="User Profile Image" height="140" width="140" />
                              <label class="upload-img-label" for="addimg">
                                <div>
                                  <i class="ft-camera"></i>
                                </div>
                              </label>
                            </div>
                            <div class="pl-3 my-auto">
                              <div class="user-profile-text">
                                <h4 class="profile-text-color mb-0">
                                  Martina Ash
                                </h4>
                                <small>@martinaash</small>
                              </div>
                            </div>
                          </div>
                          <div class="col pl-0 d-none">
                            <fieldset class="form-group mb-0">
                              <input type="file" class="form-control" id="addimg" placeholder="Upload Image"
                                @change="onFileChange" />
                            </fieldset>
                          </div>
                        </div>
                        <!-- user profile body ends -->
                      </div>
                    </div>
                  </div>
                  <!-- profile end -->

                  <!-- DOB starts -->
                  <div class="col-12">
                    <div class="card">
                      <div class="card-header d-flex justify-content-between align-items-center">
                        <h4 class="card-title m-0">Basic Info</h4>
                      </div>
                      <div class="card-content educational-sec">
                        <div class="card-body">
                          <ul class="list-unstyled mb-0">

                            <li class="d-flex mb-3 align-items-center">
                              <div class="col pl-0">
                                <fieldset class="form-group mb-0">
                                  <input type="text" class="form-control" id="addrolesname" placeholder="First Name" />
                                </fieldset>
                              </div>
                            </li>
                            <li class="d-flex mb-3 align-items-center">
                              <div class="col pl-0">
                                <fieldset class="form-group mb-0">
                                  <input type="text" class="form-control" id="addrolesname" placeholder="Last Name" />
                                </fieldset>
                              </div>
                            </li>
                            <li class="d-flex mb-3 align-items-center">
                              <div class="col pl-0">
                                <fieldset class="form-group mb-0">
                                  <input type="text" class="form-control" id="addrolesname" placeholder="Email" />
                                </fieldset>
                              </div>
                            </li>
                            <li class="d-flex mb-3 align-items-center">
                              <div class="col pl-0">
                                <fieldset class="form-group mb-0">
                                  <input type="text" class="form-control" id="addrolesname" placeholder="Birthday" />
                                </fieldset>
                              </div>
                            </li>
                            <li class="d-flex mb-3 align-items-center">
                              <div class="col pl-0">
                                <fieldset class="form-group mb-0">
                                  <input type="text" class="form-control" id="addrolesname" placeholder="City" />
                                </fieldset>
                              </div>
                            </li>
                            <li class="d-flex mb-3 align-items-center">
                              <div class="col pl-0">
                                <fieldset class="form-group mb-0">
                                  <input type="text" class="form-control" id="addrolesname" placeholder="Country" />
                                </fieldset>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- DOB ends -->
                  <!-- BIO starts -->
                  <div class="col-12">
                    <div class="card">
                      <div class="card-header d-flex justify-content-between align-items-center">
                        <h4 class="card-title m-0">Bio</h4>
                      </div>
                      <div class="card-content">
                        <div class="card-body">
                          <textarea id="basic-form-9" rows="4" class="form-control" name="comment"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- BIO ends -->
                </div>
              </div>
              <!-- 1st column ends -->
              <!-- 2nd column starts -->
              <div class="col-lg-8 col-12">
                <div class="row">
                  <!-- placed starts -->
                  <div class="col-12">
                    <div class="card">
                      <div class="card-header d-flex justify-content-between align-items-center">
                        <h4 class="card-title m-0">Place Lived</h4>
                      </div>
                      <div class="card-content educational-sec">
                        <div class="card-body">
                          <ul class="list-unstyled mb-0">
                            <div class="row mt-3">
                              <div class="col-md-6">
                                <fieldset class="form-group">
                                  <input type="text" class="form-control" id="addrolesname" placeholder="Location" />
                                </fieldset>
                              </div>
                              <div class="col-md-3">
                                <fieldset class="form-group">
                                  <input type="text" class="form-control" id="addrolesname" placeholder="From" />
                                </fieldset>
                              </div>
                              <div class="col-md-3">
                                <fieldset class="form-group">
                                  <input type="text" class="form-control" id="addrolesname" placeholder="To" />
                                </fieldset>
                              </div>
                            </div>
                            <div class="row mt-3">
                              <div class="col-md-6">
                                <fieldset class="form-group">
                                  <input type="text" class="form-control" id="addrolesname" placeholder="Location" />
                                </fieldset>
                              </div>
                              <div class="col-md-3">
                                <fieldset class="form-group">
                                  <input type="text" class="form-control" id="addrolesname" placeholder="From" />
                                </fieldset>
                              </div>
                              <div class="col-md-3">
                                <fieldset class="form-group">
                                  <input type="text" class="form-control" id="addrolesname" placeholder="To" />
                                </fieldset>
                              </div>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- placed ends -->
                  <!-- Educational starts -->
                  <div class="col-12">
                    <div class="card">
                      <div class="card-header d-flex justify-content-between align-items-center">
                        <h4 class="card-title m-0">Work History</h4>
                      </div>
                      <div class="card-content educational-sec">
                        <form class="card-body">
                          <div class="row mt-3">
                            <div class="col-md-6">
                              <fieldset class="form-group">
                                <input type="text" class="form-control" id="addrolesname" placeholder="Company Name" />
                              </fieldset>
                            </div>
                            <div class="col-md-3">
                              <fieldset class="form-group">
                                <input type="text" class="form-control" id="addrolesname" placeholder="From" />
                              </fieldset>
                            </div>
                            <div class="col-md-3">
                              <fieldset class="form-group">
                                <input type="text" class="form-control" id="addrolesname" placeholder="To" />
                              </fieldset>
                            </div>
                          </div>

                          <div class="row mt-3">
                            <div class="col-md-6">
                              <fieldset class="form-group">
                                <input type="text" class="form-control" id="addrolesname" placeholder="Company Name" />
                              </fieldset>
                            </div>
                            <div class="col-md-3">
                              <fieldset class="form-group">
                                <input type="text" class="form-control" id="addrolesname" placeholder="From" />
                              </fieldset>
                            </div>
                            <div class="col-md-3">
                              <fieldset class="form-group">
                                <input type="text" class="form-control" id="addrolesname" placeholder="To" />
                              </fieldset>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <!-- Educational ends -->ٖ
                  <!-- Educational starts -->
                  <div class="col-12">
                    <div class="card">
                      <div class="card-header d-flex justify-content-between align-items-center">
                        <h4 class="card-title m-0">Education History</h4>
                      </div>
                      <div class="card-content educational-sec">
                        <form class="card-body">
                          <div class="row mt-3">
                            <div class="col-12">
                              <fieldset class="form-group">
                                <input type="text" class="form-control" id="addrolesname"
                                  placeholder="Degree or Programee" />
                              </fieldset>
                            </div>
                            <div class="col-6">
                              <fieldset class="form-group">
                                <input type="text" class="form-control" id="addrolesname" placeholder="Location" />
                              </fieldset>
                            </div>
                            <div class="col-6">
                              <fieldset class="form-group">
                                <input type="text" class="form-control" id="addrolesname" placeholder="Period" />
                              </fieldset>
                            </div>
                          </div>

                          <div class="row mt-3">
                            <div class="col-12">
                              <fieldset class="form-group">
                                <input type="text" class="form-control" id="addrolesname"
                                  placeholder="Degree or Programee" />
                              </fieldset>
                            </div>
                            <div class="col-6">
                              <fieldset class="form-group">
                                <input type="text" class="form-control" id="addrolesname" placeholder="Location" />
                              </fieldset>
                            </div>
                            <div class="col-6">
                              <fieldset class="form-group">
                                <input type="text" class="form-control" id="addrolesname" placeholder="Period" />
                              </fieldset>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <!-- Educational ends -->
                </div>
              </div>
              <!-- 2nd column ends -->
            </div>
            <!-- Profile posts and info ends -->
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
</template>
    
<script>
export default {
  data() {
    return {
      imageSrc: 'https://demos.pixinvent.com/apex-angular-admin-template/demo-1/assets/img/portrait/small/avatar-s-12.png',
    };
  },
  methods: {
    onFileChange(event) {
      const selectedFile = event.target.files[0];
      if (!selectedFile) {
        return;
      }
      this.imageSrc = URL.createObjectURL(selectedFile);
    },
  },
};
</script>
    
  
<style></style>