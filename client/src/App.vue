<template>
  <div>
    <login v-if="!this.$auth.token()"></login>
    <dashboard v-if="this.$auth.token()"></dashboard>

  </div>
</template>

<script>
import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'
export default {
  name: 'App',
  components: {
    'dashboard': Dashboard,
    'login': Login
  },
  data () {
    return {

    }
  },
  mounted(){
    if (!this.$auth.token()) {
      console.log('rerouting...')
      this.$router.push('/')
    }
  }
}
</script>

<style>
body{
  margin: 0;
  box-sizing: border-box;
}
#app{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* min-height: 100vh;
  padding-bottom: 56px;
  box-sizing: border-box;
  position: relative; */
}

h1{
  font-size: 35px;
}

h2{
  font-size: 25px;
}
</style>
