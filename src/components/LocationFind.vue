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
          <button class="btn btn-success float-right pb-4">Search</button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="card shadow-lg p-3 mb-5 bg-white rounded">
        <div class="card-body">
          <h5 class="card-title text-success">Minimum distance from Anuradhapura to Gampaha is 198km</h5>
          <h5 class="card-title text-danger">Distance not found</h5>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="card shadow-lg p-3 mb-5 bg-white rounded">
        <h5 class="card-title text-left">Anuradhapura to</h5>
        <ul class="list-group text-left">
          <li class="list-group-item">
            <strong>Kurunagala</strong>&nbsp;(90km)
          </li>
          <li class="list-group-item">
            <strong>Anuradhapura</strong>&nbsp;(0km)
          </li>
          <li class="list-group-item">
            <strong>Galigamuwa</strong>&nbsp;(60km)
          </li>
          <li class="list-group-item">
            <strong>Ragama</strong>&nbsp;(210km)
          </li>
          <li class="list-group-item">
            <strong>Kalaniya</strong>&nbsp;(222km)
          </li>
          <li class="list-group-item">
            <strong>Colombo</strong>&nbsp;(243)
          </li>
          <li class="list-group-item">
            <strong>Galle</strong>&nbsp;(393km)
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style>
.list-group {
  max-height: 300px;
  margin-bottom: 10px;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
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