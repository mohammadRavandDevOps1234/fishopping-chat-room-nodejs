<template>

<!-- App.vue -->
<v-app>

  <!-- Sizes your content based upon application components -->
  <v-main>
  <app-bar></app-bar>
    <!-- Provides the application the proper gutter -->
    <v-container class="full-height" fluid>
          
      <!-- If using vue-router -->
      <router-view></router-view>

    </v-container>
  </v-main>


</v-app>

  
</template>


<script>
import AppBar from './components/Layout/AppBar.vue'
export default {
  data(){
    return {
      drawer:true
    }
  },
  methods: {
    
  },
  computed:{

  },
  components: { AppBar },
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
