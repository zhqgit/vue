<template>
  <div class="bg">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="form.userid"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="身份">
        <el-radio-group v-model="form.role">
          <el-radio label="0">学生</el-radio>
          <el-radio label="1">教师</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
    <!-- <el-button type="primary" @click="onSubmit">登录</el-button> -->
    <el-button type="primary">登录</el-button>
    <el-button @click="sub">默认按钮</el-button>
    <el-button>{{ form.role }}</el-button>
  </el-form-item>
    </el-form>
  </div>
  
</template>
<script>
import types from '@/store/types'

export default {
  created() {
    this.$alert("欢迎您！", "职业教育学院资源共享平台", {
      confirmButtonText: "确定",
      callback: action => {
        this.$message({
          type: "info",
          message: "请登录"
        });
      }
    });
  },
  data() {
    return {
      form: {
        userid: "",
        password: "",
        role: "0"
      }
    };
  },
  methods: {
    sub() {
      let params = new URLSearchParams();
      params.append("userid", this.form.userid);
      params.append("role", this.form.role);
      params.append("password", this.form.password);

      console.log(params);

      this.$common.http
        .post(this.$common.api.Login, params)
        .then(response => {
          if (response.data !== null) {
            let user = response.data;

            // 登录成功后将用户数据存储到浏览器本地
            localStorage.setItem('userid',user.userid);
            localStorage.setItem('role',user.role);
            localStorage.setItem('password',user.password);

            // 登录成功，消息提示
            this.$notify({
              title: "成功",
              message: "登录成功！",
              type: "success"
            });

            // 更新 store 状态
            this.$store.commit(types.UPDATE_USER,user);

            // 路由跳转
            this.$router.replace('/');
          } else {
            this.$notify.error({
              title: "错误",
              message: "用户名或密码错误！"
            });
          }
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.bg{
  background: rgba(0, 0, 0,0.2);
  width: 50%;
  margin: 0 auto;
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
