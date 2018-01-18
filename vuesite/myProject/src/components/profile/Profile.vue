<template>
  <div class="pro-container">
    <el-row class="tac">
      <el-col :span="4">
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-menu-item index="1"><i class="el-icon-message"></i><router-link to="/profile/info">个人信息</router-link></el-menu-item>
          <el-menu-item index="2"><i class="el-icon-menu"></i><router-link to="/profile/favorites">我的收藏</router-link></el-menu-item>
          <el-menu-item index="3"><i class="el-icon-setting"></i><router-link to="/profile/resource">我的资源</router-link></el-menu-item>
          <el-menu-item index="4"><i class="el-icon-setting"></i><router-link to="/profile/issue">我的帖子</router-link></el-menu-item>
        </el-menu>
      </el-col>
      <!-- <el-col :span="2"></el-col> -->
      <el-col :span="18" class="profile-container">
        <router-view></router-view>
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
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pro-container {
  margin: 0 auto;
  width: 86%;
  padding-top: 2em;
}

.pro-container a {
  color: #000000;
}

.profile-container {
  margin-left: 2em;
  background-color: #eef1f6;
}

/* .el-menu-item {
  height: 3.5em;
  line-height: 3.5em;
  font-size: 1em;
  padding: 0 1em;
  cursor: pointer;
  position: relative;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  box-sizing: border-box;
  white-space: nowrap;
} */

.el-menu-item a{
  display: inline-block;
  margin-left: -50px;
  padding-left: 50px;
  width: 172px;
}
</style>
