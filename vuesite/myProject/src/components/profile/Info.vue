<template>
    <div class='profile-info'>
        <el-row>
            <el-col :span='4'>
                <ul>
                    <li><img v-bind:src='imgSrc' alt='avatar'></li>
                    <li>  
                        <input type='file' ref='inputer' id='inputer' hidden @change='changeAvatar'></input>                        
                        <el-button type='primary' @click='selectImg'>修改头像</el-button>
                    </li>  
                </ul>    
            </el-col>
            <el-col :span='20'>
                <ul>
                    <li><span>姓名</span><span class='my-profile'>{{form.username}}</span></li>
                    <li><span>学号</span><span class='my-profile'>{{form.id}}</span></li>
                    <li><span>邮箱</span><span class='my-profile'><el-input v-model='form.email' placeholder='请输入您的常用邮箱'></el-input></span></li>
                    <li><span>年级</span><span class='my-profile'>{{form.grade}}</span></li>
                    <li><span>专业</span><span class='my-profile'>{{form.major}}</span></li>
                    <li><el-button type='success' icon='setting' @click='saveProfile'>保存</el-button></li>
                </ul>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import qs from 'qs'
export default {
  name: 'info',
  data () {
    return {
      imgSrc: '',
      form: {
        username: '',
        id: '',
        email: '',
        grade: '',
        major: ''
      },
      token: ''
    }
  },
  methods: {
    selectImg (e) {
      if (this.$refs.inputer) {
        this.$refs.inputer.click()
      }
      // 该方法将通知 Web 浏览器不要执行与事件关联的默认动作
      e.preventDefault()
    },
    changeAvatar () {
      let self = this
      let files = self.$refs.inputer.files

      this.$common.utils.imageUtil
        .createImageURL(files)
        .then(result => {
          // result = e.target.result
          // 本地预览
          self.imgSrc = result
          this.$common.http
            .post(
              this.$common.api.GrantToken,
              qs.stringify({
                username: this.form.username,
                password: this.form.password
              })
            )
            .then(res => {
              // 获取token
              this.token = res.data
            })
            .catch(error => {
              // 获取token失败
              console.log(error)
            })
          this.$message({
            message: '已修改，请点击保存按钮',
            type: 'info'
          })
        })
        .catch(error => {
          // 不是图片和超出大小
          this.$message({
            message: error,
            type: 'error'
          })
        })
    },
    saveProfile () {
      // 先检查信息是否已经修改
      // 1.本地向node获取上传token
      // 2.本地向七牛云上传文件和token
      // 3.上传成功后七牛云向node通知
      // 4.node修改用户新头像
      let formdata = new FormData()
      const origin = 'http://ozanvleqv.bkt.clouddn.com/'
      let config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      }
      formdata.append('file', this.$refs.inputer.files[0])
      formdata.append('token', this.token)
      this.$common.http
        .post('http://upload.qiniu.com/', formdata, config)
        .then(res => {
          this.user.avatar = origin + res.data.imgSrc
          this.$message({
            message: '头像保存成功！',
            type: 'success'
          })
        })
        .catch(err => {
          console.log(err)
          this.$message({
            message: '头像保存失败！',
            type: 'error'
          })
        })
    }
  },
  created () {
    console.log(this.user)
    this.imgSrc = this.user.avatar
    this.form.username = this.user.username
    this.form.id = this.user.id
    this.form.grade = this.user.grade
    this.form.email = this.user.email
    this.form.major = this.user.major
  },
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    // 映射this.user到this.$store.user
    // 映射this.xxx到this.$store.getters.xxx
    ...mapGetters(['user'])
  }
}
</script>

<style scoped>
.el-col-4 ul {
  text-align: center;
  /* position: relative; */
}

.el-col-20 ul {
  padding-right: 2em;
}

.el-col-20 ul li {
  padding: 1em 0;
  border-bottom: 1px solid #cecad8;
}

.el-col-20 ul li:nth-last-child(1),
.el-col-20 ul li:nth-last-child(2) {
  border-bottom: 0;
}

.profile-info img {
  width: 6em;
  height: 6em;
  border-radius: 50%;
}

.profile-info-img {
}

/* #upload {
  width: 6em;
  height: 3em;
  opacity: 0;
  position: absolute;
  z-index: 1024;
} */

.my-profile {
  display: inline-block;
  margin-left: 8em;
}
</style>