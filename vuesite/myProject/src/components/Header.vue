<template>
  <header>
    <div class="logo">
      <h1>职业教育学院    <span>资源共享平台</span></h1>
      <div class="sign-search">
        <span><router-link to="/sign_in">登陆 | </router-link></span><span><router-link to="/sign_up">注册 | </router-link>  </span>
        <input type="" name="" placeholder="search">
      </div>
    </div>
    <!-- <div>
        <span>登录</span>
        <span>注册</span>
        <div>search</div>
    </div> -->
    <ul class="nav">
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/site_detail">网站概况</router-link></li>
      <li><router-link to="/person_space">个人空间</router-link></li>
      <li><router-link to="/resource_share">资源共享</router-link></li>
      <li><router-link to="/stu_linkup">交流学习</router-link></li>
      <li><router-link to="/msg_board">留言板</router-link></li>
    </ul>
  </header>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*
----------------------------------
Author: zhqGit
Updated: 8月9日



----------------------------------
 */


  /*---------------A--------------------*/
  body{
    font-weight: normal;
  }


  a{
    text-decoration: none;
  }

  a:link{
    color: #fff;
  }

  /*a:hover{
      color: #1e50ae;
  }*/

  a:visited{
    color: #fff;
  }

  /*-------------Header---------------*/

  header {
    width: 100%;
    position: relative;
  }

  .sign-search{
    position: absolute;
    top: 35px;
    right: 200px;
  }

  .sign-search a{
    color: #000;
  }

  .logo {
    width: 80%;
    margin: 0 auto;
  }

  .logo h1 {
    font-family: 微软雅黑;
    color: #1e50ae;
    font-size: 40px;
  }

  .logo h1 span {
    color: #cccccc;
    font-size: 30px;
  }

  .nav {
    list-style: none;
    /*width: 100%;*/
    background-color: #1e50ae;
    height: 50px;
    padding-left: 10%;
  }

  .nav li {
    display: inline-block;
    width: 100px;
    text-align: center;
    color: #ffffff;
    line-height: 50px;
    height: 50px;
    cursor: pointer;
  }

  .nav li a{
    display: inline-block;
    height: 50px;
    line-height: 50px;
    width: 100px;
  }

  .nav li:hover {
    background-color: #ffffff;
    /*color: #1e50ae;*/
  }


  .nav li:hover > a{
    color: #1e50ae;
  }

</style>
