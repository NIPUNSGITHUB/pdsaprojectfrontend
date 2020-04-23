<template>
  <div>
    <div class="container">
      <div class="card shadow-lg p-3 mb-5 bg-white rounded"> 
        <div class="card-body">
          <h4 class="card-title">Manage Station</h4>
          <div class="col-md-10">
            <div class="row">
              <h6 class="mt-1 mr-2">Station</h6>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control form-control-sm"
                  v-model="stationName"
                  aria-describedby="helpId"
                  placeholder="Enter station name"
                />
              </div>
              <button
                type="button"
                v-if="isEdit"
                class="btn btn-primary btn-sm ml-1"
                @click="updateStation()"
              >Update</button>
              <button
                type="button"
                v-else
                class="btn btn-success btn-sm ml-1"
                @click="createStation"
              >Submit</button>
              <Button class="btn btn-sm btn-info btn-sm ml-1" @click="formReset()">Cancel</Button>
            </div>
          </div>
          <h6 class="text-left">Location List</h6>
          <table class="table table-sm table-hover table-inverse" style="overflow:auto;">
            <thead class="thead-inverse">
              <tr>
                <th style="width:20%">#</th>
                <th style="width:40%">Name</th>
                <th style="width:40%">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="station in stations" :key="station.id">
                <td>{{ station.id }}</td>
                <td>{{ station.name }}</td>
                <td>
                  <div class="row justify-content-center">
                    <button class="btn btn-sm btn-primary ml-1" @click="setToUpdate(station)">Update</button>
                    <Button class="btn btn-sm btn-danger" @click="removeStation(station)">Delete</Button>
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
export default {
  data() {
    return {
      stationId: null,
      stationName: null,
      stations: [],
      isEdit: false
    };
  },
  mounted() {
    this.populateStations();
  },
  methods: {
    formReset() {
      this.stationName = null;
      this.isEdit = false;
    },
    setToUpdate(station) {
      this.isEdit = true;
      this.stationId = station.id;
      this.stationName = station.name;
    },
    createStation() {
      if (this.stationName != null) {
        this.axios
          .post("/Station", {
            Name: this.stationName
          })
          .then(res => {
            console.log(res);
            if (res.status == 200) {
              this.populateStations();

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
        alert("Please enter station name");
      }
    },
    updateStation() {
      this.axios
        .post("/Station", {
          Id: this.stationId,
          Name: this.stationName
        })
        .then(res => {
          console.log(res);
          if (res.status == 200) {
            this.formReset();
            this.populateStations();

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
    removeStation(station) {
      var r = confirm("Press a button!");
      if (r == true) {
        this.axios
          .post("/Station/Delete",station)
          .then(res => {
            console.log(res);
            if (res.status == 200) {
              this.populateStations();

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
      }
    }
  }
};
</script>