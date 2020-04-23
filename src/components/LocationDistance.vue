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
              <div class="form-group text-left">
                <label>Distance (km)</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="DistanceKm"
                  aria-describedby="helpId"
                  placeholder="Please enter distance"
                />
              </div>
            </div>
          </div>
          <button class="btn btn-info float-right pb-4 ml-1" @click="formReset">Cancel</button>
          <button
            class="btn btn-success float-right pb-4"
            v-if="isEdit"
            @click="updateDistance"
          >Update</button>
          <button class="btn btn-success float-right pb-4" v-else @click="addDistance">Submit</button>
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
              <tr v-for="stationDistance in stationDistances" :key="stationDistance.id">
                <td>{{ stationDistance.id }}</td>
                <td>{{ stationDistance.fromStation }}</td>
                <td>{{ stationDistance.toStation }}</td>
                <td>{{ stationDistance.distanceKm }}</td>
                <td>
                  <div class="row justify-content-center">
                    <Button
                      class="btn btn-sm btn-danger"
                      @click="removeStation(stationDistance)"
                    >Delete</Button>
                    <button
                      class="btn btn-sm btn-primary ml-1"
                      @click="setToUpdate(stationDistance)"
                    >Update</button>
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
      fromStation: null,
      id: null,
      toStation: null,
      DistanceKm: null,
      isEdit: false,
      stations: [],
      stationDistances: []
    };
  },
  mounted() {
    this.populateStations();
    this.populateStationDistances();
  },
  methods: {
    formReset() {
      this.fromStation = null;
      this.toStation = null;
      this.DistanceKm = null;
      this.isEdit = false;
    },
    setToUpdate(stationDistance) {
      this.isEdit = true;
      this.fromStation = stationDistance.fromStation;
      this.toStation = stationDistance.toStation;
      this.DistanceKm = stationDistance.distanceKm;
      this.id = stationDistance.id;
    },
    populateStations() {
      this.axios
        .get("/Station")
        .then(res => {
          console.log(res);
          this.stations = res.data;
          this.formReset();
        })
        .catch(error => {
          this.$notify({
            group: "foo",
            type: "danger",
            title: "Important message",
            text: error
          });
          console.log(error);
        });
    },
    populateStationDistances() {
      this.axios
        .get("/Distance")
        .then(res => {
          console.log(res);
          this.stationDistances = res.data;
          this.formReset();
        })
        .catch(error => {
          this.$notify({
            group: "foo",
            type: "danger",
            title: "Important message",
            text: error
          });
          console.log(error);
        });
    },
    addDistance() {
      if (
        this.fromStation != null &&
        this.toStation != null &&
        this.DistanceKm != null
      ) {
        if (this.fromStation.id != this.toStation.id) {
          this.axios
            .post("/Distance", {
              fromStation: this.fromStation.name,
              toStation: this.toStation.name,
              DistanceKm: this.DistanceKm
            })
            .then(res => {
              console.log(res);
              if (res.status == 200) {
                this.populateStationDistances();
                this.$notify({
                  group: "foo",
                  type: "success",
                  title: "Important message",
                  text: "Successfull!"
                });
              }
            })
            .catch(error => {
              this.$notify({
                group: "foo",
                type: "danger",
                title: "Important message",
                text: error
              });
            });
        } else {
          alert("can't use same location for from and to stations");
        }
      } else {
        alert("Please fill the feilds");
      }
    },
    updateDistance() {
      if (this.DistanceKm != null) {
        this.axios
          .post("/Distance", {
            id: this.id,
            fromStation: this.fromStation,
            toStation: this.toStation,
            DistanceKm: this.DistanceKm
          })
          .then(res => {
            console.log(res);
            if (res.status == 200) {
              this.populateStationDistances();
              this.$notify({
                group: "foo",
                type: "success",
                title: "Important message",
                text: "Successfull!"
              });
            }
          })
          .catch(error => {
            this.$notify({
              group: "foo",
              type: "danger",
              title: "Important message",
              text: error
            });
            console.log(error);
          });
      } else {
        alert("Please fill the feilds");
      }
    },
    removeStation(stationDistance) {
      var r = confirm("Press a button!");
      if (r == true) {
        this.axios
          .post("/Distance/Delete", {
            id: stationDistance.id
          })
          .then(res => {
            console.log(res);
            if (res.status == 200) {
              this.populateStationDistances();
              this.$notify({
                group: "foo",
                type: "success",
                title: "Important message",
                text: "Successfull!"
              });
            }
          })
          .catch(error => {
            this.$notify({
              group: "foo",
              type: "danger",
              title: "Important message",
              text: error
            });
          });
      }
    }
  }
};
</script>