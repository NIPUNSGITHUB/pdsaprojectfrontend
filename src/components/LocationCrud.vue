<template>
  <div>
    <div class="container">
      <div class="card shadow-lg p-3 mb-5 bg-white rounded">
        <img class="card-img-top" src="holder.js/100x180/" alt />
        <div class="card-body">
          <h4 class="card-title">Manage Destinations</h4>
          <div class="col-md-10">
            <div class="row">
              <h6 class="mt-1 mr-2">Location</h6>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  name
                  id
                  aria-describedby="helpId"
                  placeholder="Enter location name"
                />
              </div>
              <button type="button" class="btn btn-success btn-sm ml-1">Submit</button>
              <button type="button" class="btn btn-primary btn-sm ml-1">Update</button>
            </div>
          </div>
          <h6 class="text-left">Location List</h6>
          <table class="table table-sm table-hover table-inverse">
            <thead class="thead-inverse">
              <tr>
                <th style="width:20%">#</th>
                <th style="width:40%">Name</th>
                <th style="width:40%">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Kottawa</td>
                <td>
                  <div class="row justify-content-center">
                    <Button class="btn btn-sm btn-danger">Delete</Button>
                    <button class="btn btn-sm btn-primary ml-1">Update</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Maharagama</td>
                <td>
                  <div class="row justify-content-center">
                    <Button class="btn btn-sm btn-danger">Delete</Button>
                    <button class="btn btn-sm btn-primary ml-1">Update</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
button {
  padding-bottom: 0px;
  border-bottom-width: 0px;
  padding-top: 0px;
  height: 31px;
}
</style>
<script>
export default {};
</script>