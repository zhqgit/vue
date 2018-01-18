<template>
  <header class="header">
    <div class="logo">
        <h1>职业教育学院
          <span>资源共享平台</span>
        </h1>
      </div>
    <div class="nav-container">
      <el-menu theme="dark" :default-active="activeIndex" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/site_detail">网站概况</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to="/resource_share">资源共享</router-link></el-menu-item>
      <el-menu-item index="4"><router-link to="/stu_linkup">交流学习</router-link></el-menu-item>
      <el-menu-item index="5"><router-link to="/msg_board">留言板</router-link></el-menu-item>
      <el-menu-item index="6" class="login" @click="signOut">
        退出
      </el-menu-item>
      <router-link to="/profile"><vue-letter-avatar class="login" name="aide" size="40" :rounded="true" /></router-link>
    </el-menu>
    </div>
  </header>
</template>

<script>
// import store from "@/store";
// import types from '@/store/types'
import atypes from '@/store/action-types'
export default {
  name: 'header',
  // created() {
  //   if (this.$store.getters.user !== null) {
  //     this.isLogin = !this.isLogin;
  //   }
  // },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    signOut () {
      this.$confirm('退出登录, 是否继续?', '提示', {
        confirmButtonText: '继续退出',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$store
            .dispatch(atypes.SIGN_OUT)
            // SIGN_OUT返回了一个promise，then接收，data接收了promise返回的resolve函数中的参数
            .then(data => {
              this.$message({
                type: 'success',
                message: '退出成功!'
              })
              // data输出 用户缓存清除成功！
              console.log(data)

              // 清除缓存成功0.5秒后跳转
              setTimeout(() => {
                this.$router.push('login')
              }, 500)
            })
            // data接收了promise返回的reject函数中的参数
            .catch(data => {
              console.log(data)
            })
        })
        .catch(() => {
          // 取消退出，无操作
        })
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



/*-------------Header---------------*/

.header {
  position: relative;
}

.nav-container {
  background-color: #324157;
  padding: 0 6em;
}

.logo {
  padding: 0 6em;
}

.logo h1 {
  font-family: 微软雅黑;
  color: #1e50ae;
  font-size: 2.8em;
  margin: 0;
  padding: .67em 0;
}

.logo h1 span {
  color: #cccccc;
  font-size: 0.7em;
}

.login {
  float: right;
}

.el-menu li{
  width: 6em;
  text-align: center;
  padding: 0;
}

.el-menu li a{
  display: inline-block;
  width: 100%;
}
</style>
