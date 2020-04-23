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
                  v-if="isEdit == false"
                  v-model="fromStation"
                  deselect-label="Can't remove this value"
                  track-by="id"
                  label="name"
                  placeholder="Select one"
                  :options="stations"
                  :searchable="false"
                  :allow-empty="false"
                ></multiselect>
                <h5 v-else>{{ fromStation }}</h5>
              </div>
            </div>
            <div class="col-md-4">
              <div class="text-left">
                <label class="typo__label">To</label>
                <multiselect
                  v-if="isEdit == false"
                  v-model="toStation"
                  deselect-label="Can't remove this value"
                  track-by="id"
                  label="name"
                  placeholder="Select one"
                  :options="stations"
                  :searchable="false"
                  :allow-empty="false"
                ></multiselect>
                <h5 v-else>{{ toStation }}</h5>
              </div>
            </div>
            <div class="col-md-4">
            
            </div>
          </div>
          <button class="btn btn-success float-right pb-4" @click="shortestPath">Search</button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="card shadow-lg p-3 mb-5 bg-white rounded">
        <div class="card-body">
          <h5 v-if="pathDetails != ''" class="card-title text-success">Minimum distance from {{ fromStation.name }} to {{ toStation.name }} is {{ minDistance }}km</h5>
          <h5 v-else class="card-title text-danger">Distance not found</h5>
        </div>
      </div>
    </div>
    <div v-if="pathDetails != ''" class="container">
      <div class="card shadow-lg p-3 mb-5 bg-white rounded">
        <h5  class="card-title text-left">{{ fromStation.name }} to</h5>
        <ul class="list-group text-left">
          <li v-for="pathDetail in pathDetails" :key="pathDetail.key" class="list-group-item">
            <strong>{{ pathDetail.key }}</strong>&nbsp;({{ pathDetail.value }})
           <strong style="visibility:hidden" v-if="toStation.name == pathDetail.key">{{ minDistance = pathDetail.value }}</strong>
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
      stationId: null,
      stationName: null,
      stations: [],
      isEdit: false,
      fromStation: null,
      toStation: null,
      pathDetails:[],
      minDistance:0.0
    };
  },
  mounted() {
    this.populateStations();
  },
  methods: {
    populateStations() {
      this.axios
        .get("/Station")
        .then(res => {
          console.log(res);
          this.stations = res.data;
          // this.formReset();
        })
        .catch(error => {
          console.log(error);
        });
    },
    shortestPath() {
       if (
        this.fromStation != null &&
        this.toStation != null 
      ) {
        this.axios
        .post("/ShortestPath", {
          id: this.id,
          fromLocation: this.fromStation.name,
          toLocation: this.toStation.name
        })
        .then(res => {
          console.log(res);
          if (res.status == 200) {
            this.pathDetails = res.data;
          }
        })
        .catch(error => {
          alert(error)
          console.log(error);
        });
      }else {
        alert("Select the locations");
      }
    }
  }
};
</script>