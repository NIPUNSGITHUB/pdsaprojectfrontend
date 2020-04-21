<template>
  <div>
    <div class="container">
      <div class="card shadow-lg p-3 mb-5 bg-white rounded">
        <div class="card-body">
          <h4 class="card-title">Manage Destinations</h4>
          <div class="row">
            <div class="col-md-4">
              <div class="text-left">
                <label class="typo__label">From</label>
                <multiselect
                  v-model="value"
                  deselect-label="Can't remove this value"
                  track-by="name"
                  label="name"
                  placeholder="Select one"
                  :options="options"
                  :searchable="false"
                  :allow-empty="false"
                ></multiselect>
              </div>
            </div>
            <div class="col-md-4">
              <div class="text-left">
                <label class="typo__label">To</label>
                <multiselect
                  v-model="value"
                  deselect-label="Can't remove this value"
                  track-by="name"
                  label="name"
                  placeholder="Select one"
                  :options="options"
                  :searchable="false"
                  :allow-empty="false"
                ></multiselect>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group text-left">
                <label>Distance</label>
                <input
                  type="text"
                  class="form-control"
                  name
                  id
                  aria-describedby="helpId"
                  placeholder="Please enter distance"
                />
              </div>
            </div>
          </div>
          <button class="btn btn-success float-right pb-4">Submit</button>
        </div>
      </div>
    </div>
    <div class="container pt-0">
      <div class="card shadow-lg p-3 mb-5 bg-white rounded">
        <div class="card-body">
          <h4 class="card-title">Location List</h4>
          <table class="table table-sm table-hover table-inverse">
            <thead class="thead-inverse">
              <tr>
                <th style="width:10%">#</th>
                <th style="width:25%">From</th>
                <th style="width:25%">To</th>
                <th style="width:20%">Distance (KM)</th>
                <th style="width:20%">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Kottawa</td>
                <td>Maharagama</td>
                <td>3</td>
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
                <td>Maharagama</td>
                <td>3</td>
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
<script>
export default {
  data() {
    return {
      value: null,
      options: [
        { name: "Vue.js", language: "JavaScript" },
        { name: "Rails", language: "Ruby" },
        { name: "Sinatra", language: "Ruby" },
        { name: "Laravel", language: "PHP", $isDisabled: true },
        { name: "Phoenix", language: "Elixir" }
      ]
    };
  }
};
</script>