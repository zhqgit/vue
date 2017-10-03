<template>
  <footer>
    <ul class="footer-nav">
      <li>首页 |</li>
      <li>网络概况 |</li>
      <li>个人空间 |</li>
      <li>资源共享 |</li>
      <li>交流学习 |</li>
      <li>学术座谈</li>
    </ul>
    <ul class="friends">
      <li>手机版 |</li>
      <li>管理登陆 |</li>
      <li>职业教育学院 |</li>
      <li>华南师范大学</li>
    </ul>
  </footer>
</template>

<script>
  export default {
    name: 'footer',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*----------------Footer------------------*/
  footer {
    height: 150px;
    background-color: #0e3cb1;
  }

  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden
  }

  /*.clearfix {
      *+height: 1%;
  }*/

  footer ul{
    width: 80%;
    margin: 0 auto;
    padding: 0;
  }

  footer li{
    list-style: none;
    display: inline-block;
    color: #fff;
  }

  .footer-nav{
    padding-top: 20px;
  }

  .friends{
    padding-top:60px;
  }
</style>
