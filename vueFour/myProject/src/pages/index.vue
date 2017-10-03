<template>
  <div>
    <div class="container" v-if="about" v-on:click="doSth1">
      <!-- <div class="row text-center">
        <h1 class="dark">博主正在拼命赶来的路上...</h1>
      </div>
      <div class="span">
        <div class="typing_loader"></div>
      </div> -->
      <div class="row">
        <div class="col-md-12">
          <div class="loader">
            <span class="loader-inner">点我试试!</span>
          </div>
        </div>
      </div>
    </div>
    <div class="pic-container" v-if="pic">
      <div class="show" id="pic-1">
      <div class="box">
        <img src="../assets/1.jpg" height="601" width="600" alt="">
      <div class="over-layer">
      <p class="description">入坑前端一年，自学HTML，CSS，JS，NodeJs，然而并没有实现什么有用的轮子。</p>
      <p class="description">大三下学期的每天几乎上满8节课，现在码代码已经成为一种奢望了。</p>
      <p class="description">创建这个博客就是为了写各种各样好玩的教程，尽管学业繁重，但是我会尽量多写的。</p>
      <ul class="social-links">
        <li><a href="#" class="fa fa-download"></a></li>
        <li><a href="#" class="fa fa-link"></a></li>
        <li><a href="#" class="fa fa-search"></a></li>
      </ul>
      </div>
      </div>
    </div>
    <div class="show" id="pic-2">
      <div class="box">
        <img src="../assets/2.jpg" height="601" width="600" alt="">
      <div class="over-layer">
      <h3 class="title">哈喽～</h3>
      <p class="description">哈喽～</p>
      <p class="description">欢迎来到我的博客～</p>
      <p class="description">博主姓庄小名洪泉，广东潮汕普宁人士。大三前端狗，就读于华南师范大学</p>
      <ul class="social-links">
        <li><a href="#" class="fa fa-download"></a></li>
        <li><a href="#" class="fa fa-link"></a></li>
        <li><a href="#" class="fa fa-search"></a></li>
      </ul>
      </div>
      </div>
    </div>
    <div class="show" id="pic-3">
      <div class="box">
        <img src="../assets/3.jpg" height="601" width="600" alt="">
      <div class="over-layer">
      <h3 class="title">Web designer</h3>
      <p class="description">欢迎在我的博客留言或者给我的邮箱发信息(zhqzywy@163.com)</p>
      <p class="description">最后，少逛知乎多读书～</p>
      <p class="description">我们括苍山见！</p>
      <ul class="social-links">
        <li><a href="#" class="fa fa-download"></a></li>
        <li><a href="#" class="fa fa-link"></a></li>
        <li><a href="#" class="fa fa-search"></a></li>
      </ul>
      </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data: function () {
    return {
      'about': true,
      'pic': false
    }
  },
  methods: {
    doSth1: function () {
      this.about = !this.about
      this.pic = !this.pic
    }
  }
}
</script>

<style>
.container{
  font-size: 1.5em;
  position: absolute;
  top: 50%;
  left:50%;
  margin-top: -103.5px;
  margin-left: -88.5px;
}


.loader{
    width: 128px;
    height: 128px;
    line-height: 128px;
    border-radius: 50%;
    border-top: 5px solid #eb6c18;
    color: #fff;
    text-align: center;
    position: relative;
    margin: 30px auto;
    -webkit-animation: 2s loading1 ease-in-out infinite;
    animation: 2s loading1 ease-in-out infinite;
}
.loader:before,
.loader:after{
    content: "";
    display: block;
    width: 128px;
    height: 128px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    left: 0;
}
.loader:before{
    border-top: 5px solid #c3c659;
    -webkit-transform: rotate(120deg);
    transform: rotate(120deg)
}
.loader:after{
    border-top: 5px solid #b93be6;
    -webkit-transform: rotate(240deg);
    transform: rotate(240deg)
}
.loader .loader-inner{
    display: block;
    width: 128px;
    height: 128px;
    position: absolute;
    top: -5px;
    left: 0;
    color: #000;
    -webkit-animation: 2s loading2 linear infinite;
    animation: 2s loading2 linear infinite;
}
@-webkit-keyframes loading1{
    50% {
        -webkit-transform: rotate(180deg)
    }
    100% {
        -webkit-transform: rotate(360deg)
    }
}
@keyframes loading1{
    50% {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg)
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}
@-webkit-keyframes loading2{
    50% {
        -webkit-transform: rotate(-180deg)
    }
    100% {
        -webkit-transform: rotate(-360deg)
    }
}
@keyframes loading2{
    50% {
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg)
    }
    100% {
        -webkit-transform: rotate(-360deg);
        transform: rotate(-360deg)
    }
}



/*Typing Loader*/
.span{
  background-color: #000;
}
.typing_loader{
    width: 6px;
    height: 6px;
    border-radius: 50%;
    -webkit-animation: typing 1s linear infinite alternate;
       -moz-animation: Typing 1s linear infinite alternate;
       -ms-animation: Typing 1s linear infinite alternate;
            animation: typing 1s linear infinite alternate;
    margin: 46px auto; /* Not necessary- its only for layouting*/
    position: relative;
    left: -12px;
}
@-webkit-keyframes typing{
    0%{
        background-color: rgba(255,255,255, 1);
        box-shadow: 12px 0px 0px 0px rgba(255,255,255,0.2),
                    24px 0px 0px 0px rgba(255,255,255,0.2);
      }
    25%{
        background-color: rgba(255,255,255, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(255,255,255,2),
                    24px 0px 0px 0px rgba(255,255,255,0.2);
    }
    75%{ background-color: rgba(255,255,255, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(255,255,255,0.2),
                    24px 0px 0px 0px rgba(255,255,255,1);
      }
}

@-moz-keyframes typing{
   0%{
        background-color: rgba(255,255,255, 1);
        box-shadow: 12px 0px 0px 0px rgba(255,255,255,0.2),
                    24px 0px 0px 0px rgba(255,255,255,0.2);
      }
    25%{
        background-color: rgba(255,255,255, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(255,255,255,2),
                    24px 0px 0px 0px rgba(255,255,255,0.2);
    }
    75%{ background-color: rgba(255,255,255, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(255,255,255,0.2),
                    24px 0px 0px 0px rgba(255,255,255,1);
      }
}

@keyframes typing{
   0%{
        background-color: rgba(255,255,255, 1);
        box-shadow: 12px 0px 0px 0px rgba(255,255,255,0.2),
                    24px 0px 0px 0px rgba(255,255,255,0.2);
      }
    25%{
        background-color: rgba(255,255,255, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(255,255,255,2),
                    24px 0px 0px 0px rgba(255,255,255,0.2);
    }
    75%{ background-color: rgba(255,255,255, 0.4);
        box-shadow: 12px 0px 0px 0px rgba(255,255,255,0.2),
                    24px 0px 0px 0px rgba(255,255,255,1);
      }
}

/* @pic Styles
-----------------------------------------------------------------------*/
.pic-container{
  width: 100%;
  /*height: 500px;*/
  margin: 0 auto;
  color: #000;
  font-size: 1.5em;
}

#pic-1{
  margin-left: 100px;
}

.show{

  width: 25%;
  /*height: 25%;*/
  float: left;
  margin: 0 50px;
}

.box{
  margin-top: 8em;
    position: relative;
    perspective: 1000px;
}
.box img{
    width: 100%;
    height: auto;
    opacity:1;
    transform: translateY(0) rotateX(0);
    transition: all 0.6s ease-in-out 0s;
}
.box:hover img{
    transform: translateY(-100%) rotateX(90deg);
    transform-origin: center bottom 0;
    opacity:0;
}
.box .over-layer{
    position: absolute;
    top:0;
    left:0;
    /*width:100%;*/
    height:100%;
    opacity:0;
    background:#333d4b;
    /*text-align:center;*/
    text-indent:30px;
    padding: 0 20px;
    transition: all 0.60s ease-in-out 0s;
}
.box:hover .over-layer{
    opacity:1;
}

.box p{
  /*margin: 5px 0;*/
  line-height: 20px;
}

.box .title,
.box .description,
.box .social-links{
    position: relative;
    top: 11%;
    color: #d3d3d3;
}
.box .title{
    text-transform: capitalize;
}
.box .title:after,
.box .description:after{
    content:"";
    width: 50%;
    display: block;
    margin: 10px auto 0;
    /*border-bottom: 1px solid #fff;*/
}
.box .social-links{
    padding:0;
    margin:0;
    list-style: none;
}
.box .social-links li{
    margin: 10px;
    display: inline-block;
}
.box .social-links li a{
    color: #fff;
    font-size: 20px;
}
.box .social-links li a:hover{
    color: #d3d3d3;
    text-decoration: none;
}
@media only screen and (max-width: 990px){
    .box{  margin-bottom:20px; }
}
</style>
