<template>
  <div class="container">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <!-- <el-form-item label="身份">
        <el-radio-group v-model="form.role">
          <el-radio label="0">学生</el-radio>
          <el-radio label="1">教师</el-radio>
        </el-radio-group>
      </el-form-item> -->
      <el-form-item>
    <!-- <el-button type="primary" @click="onSubmit">登录</el-button> -->
    <el-button type="primary" @click="sub">登录</el-button>
  </el-form-item>
    </el-form>
    <div class="bg"></div>
  </div>
  
</template>
<script>
import types from '@/store/types'
import qs from 'qs'
export default {
  created () {
    // this.$alert('欢迎您！', '职业教育学院资源共享平台', {
    //   confirmButtonText: '确定',
    //   callback: action => {
    //     this.$message({
    //       type: 'info',
    //       message: '请登录'
    //     })
    //   }
    // })
  },
  data () {
    return {
      form: {
        username: '',
        password: ''
        // role: "0"
      }
    }
  },
  methods: {
    sub () {
      // let params = new URLSearchParams();
      // params.append("userid", this.form.userid);
      // params.append("role", this.form.role);
      // params.append("password", this.form.password);

      // console.log(params)

      this.$common.http
        .post(
          this.$common.api.Login,
          qs.stringify({
            userMessage: this.form.username,
            // role: this.form.role,
            password: this.form.password
          })
        )
        .then(response => {
          console.log(response)
          if (response.data !== null) {
            console.log('Here!')
            console.log(response.data.data)
            let user = response.data.data

            // 登录成功后将用户数据存储到浏览器本地
            // TODO:有没有简便的方法存储一整个user，或者其他的遍历方法
            localStorage.setItem('USER_ID', user.userNumber)
            localStorage.setItem('USER_USERNAME', user.username)
            localStorage.setItem('USER_EMAIL', user.email)
            localStorage.setItem('USER_GRADE', user.grade)
            localStorage.setItem('USER_MAJOR', user.major)
            localStorage.setItem('USER_AVATAR', user.avatar)

            // 登录成功，消息提示
            this.$notify({
              title: '成功',
              message: '登录成功！',
              type: 'success'
            })

            // 更新 store 状态，将整个user存入store.user中
            this.$store.commit(types.UPDATE_USER, {
              id: user.userNumber,
              email: user.email,
              username: user.username,
              grade: user.grade,
              major: user.major,
              avatar: user.avatar
            })

            // 路由跳转
            this.$router.replace('/')
          } else {
            this.$notify.error({
              title: '错误',
              message: '用户名或密码错误！'
            })
          }
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.5);
  color: #ffffff;
}

/*.bg{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,.75);
}
*/
.el-form {
  width: 40%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1024;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
