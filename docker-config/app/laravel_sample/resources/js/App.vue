<template>
  <div id="app">
    <v-app>
      <AppHeader />
      <v-main id="main">
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-main>
      <!-- <AppFooter /> -->
    </v-app>
  </div>
</template>
<script>
import AppHeader from "./components/common/AppHeader.vue";
// import AppFooter from "./components/common/AppFooter.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    AppHeader,
    // AppFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  background-color: rgb(53, 53, 53);
  width: 100%;
  height: 100%;
}

#main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  background-color: rgb(245, 245, 245);
  width: 100%;
  height: 100%;
}
</style>