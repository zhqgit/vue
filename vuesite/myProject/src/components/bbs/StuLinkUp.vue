<template>
  <div class="bbs-container">
    <!-- <div class="class-container">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div> -->
    <div class="class-container">
      <ul class="issue-class">
        <li class="item"><a href=""><el-tag>学习</el-tag></a></li>
        <li class="item"><a href=""><el-tag type="gray">科研</el-tag></a></li>
        <li class="item"><a href=""><el-tag type="primary">考研</el-tag></a></li>
        <li class="item"><a href=""><el-tag type="success">就业实习</el-tag></a></li>
        <li class="item"><a href=""><el-tag type="warning">实用软件</el-tag></a></li>
        <li class="item"><a href=""><el-tag type="danger">职教动态</el-tag></a></li>
      </ul>
    </div>
    <el-row class="issue-main-container">
      <el-col :span="17" class="issue-content-container">
        <el-row class="issue-content">
          <el-col :span="2"><div class="grid-content bg-purple"><span class="reply-count">dd</span></div></el-col>
          <el-col :span="22"><div class="grid-content bg-purple-light"><span class="issue-title"><router-link to="/stu_linkup/:id">大家一起祝勒布朗詹姆斯31岁生日快乐！</router-link></span></div></el-col>
        </el-row>
        <el-row class="issue-content">
          <el-col :span="2"><div class="grid-content bg-purple"><span class="reply-count">dd</span></div></el-col>
          <el-col :span="22"><div class="grid-content bg-purple-light"><span class="issue-title"><a href="">大家一起祝勒布朗詹姆斯31岁生日快乐！</a></span></div></el-col>
        </el-row>
        <el-row class="issue-content">
          <el-col :span="2"><div class="grid-content bg-purple"><span class="reply-count">dd</span></div></el-col>
          <el-col :span="22"><div class="grid-content bg-purple-light"><span class="issue-title"><a href="">大家一起祝勒布朗詹姆斯31岁生日快乐！</a></span></div></el-col>
        </el-row>
        <el-row class="issue-content">
          <el-col :span="2"><div class="grid-content bg-purple"><span class="reply-count">dd</span></div></el-col>
          <el-col :span="22"><div class="grid-content bg-purple-light"><span class="issue-title"><a href="">大家一起祝勒布朗詹姆斯31岁生日快乐！</a></span></div></el-col>
        </el-row>
        <el-row class="issue-content">
          <el-col :span="2"><div class="grid-content bg-purple"><span class="reply-count">dd</span></div></el-col>
          <el-col :span="22"><div class="grid-content bg-purple-light"><span class="issue-title"><a href="">大家一起祝勒布朗詹姆斯31岁生日快乐！</a></span></div></el-col>
        </el-row>
        <el-row class="issue-content">
          <el-col :span="2"><div class="grid-content bg-purple"><span class="reply-count">dd</span></div></el-col>
          <el-col :span="22"><div class="grid-content bg-purple-light"><span class="issue-title"><a href="">大家一起祝勒布朗詹姆斯31岁生日快乐！</a></span></div></el-col>
        </el-row>
        <el-row class="issue-content">
          <el-col :span="2"><div class="grid-content bg-purple"><span class="reply-count">dd</span></div></el-col>
          <el-col :span="22"><div class="grid-content bg-purple-light"><span class="issue-title"><a href="">大家一起祝勒布朗詹姆斯31岁生日快乐！</a></span></div></el-col>
        </el-row>
        <el-row class="issue-content">
          <el-col :span="2"><div class="grid-content bg-purple"><span class="reply-count">dd</span></div></el-col>
          <el-col :span="22"><div class="grid-content bg-purple-light"><span class="issue-title"><a href="">大家一起祝勒布朗詹姆斯31岁生日快乐！</a></span></div></el-col>
        </el-row>
        <el-row class="issue-content">
          <el-col :span="2"><div class="grid-content bg-purple"><span class="reply-count">dd</span></div></el-col>
          <el-col :span="22"><div class="grid-content bg-purple-light"><span class="issue-title"><a href="">大家一起祝勒布朗詹姆斯31岁生日快乐！</a></span></div></el-col>
        </el-row>
        <el-row class="issue-content">
          <el-col :span="2"><div class="grid-content bg-purple"><span class="reply-count">dd</span></div></el-col>
          <el-col :span="22"><div class="grid-content bg-purple-light"><span class="issue-title"><a href="">大家一起祝勒布朗詹姆斯31岁生日快乐！</a></span></div></el-col>
        </el-row>
        <el-row class="issue-content">
          <el-col :span="2"><div class="grid-content bg-purple"><span class="reply-count">dd</span></div></el-col>
          <el-col :span="22"><div class="grid-content bg-purple-light"><span class="issue-title"><a href="">大家一起祝勒布朗詹姆斯31岁生日快乐！</a></span></div></el-col>
        </el-row>
        <el-row class="issue-content">
          <el-col :span="2"><div class="grid-content bg-purple"><span class="reply-count">dd</span></div></el-col>
          <el-col :span="22"><div class="grid-content bg-purple-light"><span class="issue-title"><a href="">大家一起祝勒布朗詹姆斯31岁生日快乐！</a></span></div></el-col>
        </el-row>
        <el-row class="issue-content">
          <el-col :span="2"><div class="grid-content bg-purple"><span class="reply-count">dd</span></div></el-col>
          <el-col :span="22"><div class="grid-content bg-purple-light"><span class="issue-title"><a href="">大家一起祝勒布朗詹姆斯31岁生日快乐！</a></span></div></el-col>
        </el-row>
      </el-col>
      <el-col :span="5" class="issue-hot-container">
        <div class="issue-hot-title"><span>热议榜</span></div>
          <ul class="issue-hot-list">
            <li><span class="issue-hot-top">1</span><a href="">双11剁手战利品</a></li>
            <li><span class="issue-hot-top">2</span><a href="">江歌案</a></li>
            <li><span class="issue-hot-top">3</span><a href="">林志玲言承旭复合</a></li>
            <li><span class="issue-hot-flag">4</span><a href="">丽江客栈:蚊子是宠物</a></li>
            <li><span class="issue-hot-flag">5</span><a href="">你的快递还好吗？</a></li>
          </ul>
      </el-col>
      <el-col :span="2">
        ddd
      </el-col>
    </el-row> 
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bbs-container {
  width: 85%;
  margin: 0 auto;
}

.class-container{
  background-color: #eef1f6;
  margin-bottom: 1em;
}

/* .issue-main-container{
  
} */

.issue-content-container{
  border-right: 1px solid #e4e6eb;
}

.issue-content-container,.issue-hot-container{
  background-color: #ffffff;
}

.issue-content{
  height: 3em;
  border-bottom: 1px dotted #e4e6eb;
  
}

.issue-hot{

}

.el-col-4,.el-col-20{
  height: 3em;
}

.issue-class li {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  margin: 5px 1em;
}

.bg-purple{
  background: url('/static/image/bbs/reply_bg.png') no-repeat 50% -50%;
  text-align: center;
}

.grid-content{
  height: 3em;
  line-height: 3em;
  /* vertical-align: middle; */
}

.issue-title a{
  color: #2d64b3;
  font-size: 1em;
}

.issue-title a:hover{
  text-decoration: underline;
}


a {
    background-color: transparent;
}

.issue-hot-container{
  min-height: 25em;
}

.issue-hot-container .issue-hot-title{
  margin-top: .8em;
}

.issue-hot-container .issue-hot-title span{
  padding-left: .8em;

}


.issue-hot-container .issue-hot-list{
  padding-left: 1em;
}

.issue-hot-list li{
  margin: .8em 0;
  font-size: 0.75em;
  
}

.issue-hot-list li a{
  color: #666;
  vertical-align: middle;
  text-overflow: ellipsis;
}

.issue-hot-list li a:hover{
  text-decoration: underline;
}

.issue-hot-container .issue-hot-list .issue-hot-top{
  background: #FF7F42;
  color: #FFF;
  padding: 1px 4px;
  margin-right: 7px;
}

.issue-hot-container .issue-hot-list .issue-hot-flag{
  padding: 1px 4px;
  margin-right: 7px;
}
</style>
