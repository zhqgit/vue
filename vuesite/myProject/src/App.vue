<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
@import '../static/css/normalize.css';
@import '../static/css/common.css';
#app,body,html{
	width: 100%;
  font-size: 16px;
  height:100%;overflow:auto;margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* background: url('http://ozanvleqv.bkt.clouddn.com/win10.jpg') center;
  background-size: 100% 100%; */
  /* min-height: 100vh; */
  /* -webkit-transform: translateZ(0);   */
  background-image: url('http://ozanvleqv.bkt.clouddn.com/image/jpg/banner.jpg');
  background-size: cover;
  background-attachment: fixed;
}

/*---------------A--------------------*/

a {
  text-decoration: none;
}

a:link {
  color: #fff;
}

/*a:hover{
      color: #1e50ae;
  }*/

a:visited {
  color: #fff;
}
</style>
