<template>
  <div>
    <div class="container mt-5">
      <div class="card shadow-lg p-3 mb-5 bg-white rounded">
        <center>
          <img
            class="rounded-circle"
            src="https://www.bestilling.medco-bht.no/assets/img/avatar.png"
            width="250rem"
            height="250rem"
            alt
          />
        </center>
        <div class="card-body">
          <h4 class="card-title font-weight-bold">Login</h4>

          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
              <div class="form-group text-left">
                <input
                  type="text"
                  class="form-control"
                  v-model="username"
                  aria-describedby="helpId"
                  placeholder="Username"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  v-model="password"
                  class="form-control"
                  aria-describedby="helpId"
                  placeholder="Password"
                />
              </div>
              <input name id class="btn btn-success" type="button" @click="login" value="Login" />
            </div>
            <div class="col-md-4"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "admin",
      password: "12345678"
    };
  },
  mounted() {
    localStorage.setItem("username", "admin");
    localStorage.setItem("password", "12345678");
  },
  methods: {
    login() {
      if (this.username == "admin" && this.password == "12345678") {
        console.log(localStorage.getItem("username"));
        localStorage.setItem("logged", "true"); 
        this.$router.push({ name: "ManageLocation" });  
        this.$router.go("ManageLocation"); 
      }
      else
      {
        alert("Invalid username or password")
      }
    },
 
  }
};
</script> 