<template>
  <div id="app">
    <nav v-if="logged" class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src="logo.png" width="30" height="30" class="d-inline-block align-top" alt />
        Shortest Path
      </a>

      <img
        id="phones"
        class="float-right rounded-circle"
        src="/avatar.png"
        width="50px"
        height="50px"
        alt
      />
      <div id="phones" class="pl-0 m-0">
        <h6 class="mb-1 text-left">Admin</h6>
        <button class="float-right btn btn-sm btn-success"  @click="logOut">Logout</button>
      </div>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" exact class="nav-link">Manage Station</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/location/distance" exact class="nav-link">Manage Distance</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/location/find" exact class="nav-link">Find Distance</router-link>
          </li>
        </ul>
      </div>

      <img
        id="desktops"
        class="float-right rounded-circle"
        src="/avatar.png"
        width="50px"
        height="50px"
        alt
      />
      <div id="desktops" class="pl-0 m-0">
        <h6 class="mb-1 text-left">Admin</h6>
        <button class="float-right btn btn-sm btn-success" @click="logOut">Logout</button>
      </div>
    </nav>

    <div>
       <notifications group="foo" />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.logged = localStorage.getItem("logged");
  },
  methods: {
    logOut() {
      localStorage.removeItem("logged");      
      this.$router.push({ name: "login" });  
      this.$router.go("login");
    }
  },
  data() {
    return {
      logged: false
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
