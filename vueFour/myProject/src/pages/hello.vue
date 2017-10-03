<template>
  <div>
  	<div class="pic-container">
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

<style>
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
