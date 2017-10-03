<template>
  <div id="app">
    <app-header></app-header>
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppHeader from '@/components/Header'
  import AppFooter from '@/components/Footer'
  export default {
    name: 'app',
    components: {
      AppHeader,
      AppFooter
    }
}
</script>

<style>
  @import '../static/css/normalize.css';
  @import '../static/css/common.css';

  #app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}

</style>
