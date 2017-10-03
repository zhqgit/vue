<template>
  <div id="app">
    <div class="header">
      <div class="mask" v-if="mask" v-on:click="sidebar"></div>
      <div class="nav">
        <h1>zhqGit</h1>
        <a href="#" id="side-more" v-on:click="sidebar"></a>
      </div>
      <div class="nav-container" v-if="ok" v-on:click="sidebar">
        <div class="nav-list">
          <ul class="btn-group">
            <li><a href="/"><i class="fa fa-home"></i>&nbsp;&nbsp;<span>首页</span></a></li>
            <li><router-link to="/web"><i class="fa fa-code"></i>&nbsp;&nbsp;<span>作品集</span></router-link></li>
            <li><router-link to="/about"><i class="fa fa-qq"></i>&nbsp;&nbsp;<span>关于</span></router-link></li>
            <li><router-link to="/resume"><i class="fa fa-send"></i>&nbsp;&nbsp;<span>简历</span></router-link></li>
          </ul>
        </div>
        <hr>
        <h4>Contcat Me </h4>
        <div class="contact-list">
          <ul>
            <li v-on:mouseover="weichat" v-on:mouseout="weichat"><a href="#"> <i class="fa fa-weixin"></i></a></li>
            <li><a href="http://zhqgit.top/" target="_blank"><i class="fa fa-heart"></i></a></li>
            <li><a href="https://github.com/zhqgit" target="_blank"><i class="fa fa-github"></i></a></li>
            <li><a href="https://freecodecamp.cn/zhqgit" target="_blank"><i class="fa fa-free-code-camp"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <img src="./assets/weixin.jpg" v-bind:class="weixin">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      nav: {
        'btn': true
      },
      weixin: {
        'wei': true,
        'mask': true
      },
      ok: false,
      mask: false
    }
  },
  methods: {
    sidebar: function () {
      this.ok = !this.ok
      this.mask = !this.mask
    },
    maskToggle: function () {
      this.ok = !this.ok
      this.mask = !this.mask
    },
    weichat: function () {
      this.weixin.wei = !this.weixin.wei
    }
  }
}
</script>

<style>
/* @CSS Reset Styles
--------------------------------------------------------------------------*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

a:link,a:visited,a:hover,a:focus,a:active{
  text-decoration: none;
  color: inherit;
}

/* @header-nav Styles
---------------------------------------------------------------------------*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  font-size: 62.5%;
  width: 100%;
}

.header {
  font-size: 1.5em;
}

.nav {
  width: 100%;
  height: 3.5em;
  background-color: #090723;
}

.nav h1 {
  color: #fff;
  position: absolute;
  left: 8%;
  top: 2.2%;
}

.nav #side-more {
  display: inline-block;
  position: absolute;
  top: 1.5%;
  right: 2%;
  width: 3.2em;
  height: 3.2em;
  background: url(../src/assets/more.png) no-repeat;
}

.nav-container {
    background-color: #000;
    /*background-color:#8e7d7d;*/
    position: fixed;
    width: 20%;
    top: 3.5em;
    bottom: 0;
    right: 0;
    z-index: 100;
}

.nav-container a {
    text-decoration: none;
    color: #fff;
}

.nav-container .nav-list {
    /*padding: 10px;*/
    /*margin: 50px 0 0 0;*/
}

.nav-container .login-list {
    float: right;
}

.nav-container .btn-group,
.contact-list ul {
    padding: 0;
    list-style: none;
    width: 100%;
    margin: 0;
}

.nav-container .btn-group li {
    width: 100%;
}

.nav-container .btn-group li a {
    display: inline-block;
    line-height: 3.3em;
    width: 100%;
    padding: 0 0 0 3.3em;
    letter-spacing: .2em;
}

.nav-container .btn-group a:hover,
.contact-list li a:hover {
    color: #000;
    background: rgba(255, 255, 255, 0.99);
    letter-spacing: 0.14em;
}

.contact-list li a {
    display: inline-block;
    text-align: center;
    float: left;
    line-height: 3.3em;
    width: 50%;
    padding-left: 0;
    letter-spacing: .2em;
}

.nav-container h4 {
    padding-left: 2em;
    margin-bottom: 1.04em;
}

.mask {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 100;
}

.wei{
  position: absolute;
  display: none;
  bottom: 0;
  right: 0;
  z-index: 110;
  width: 20em;
  height: 20em;
}


</style>
