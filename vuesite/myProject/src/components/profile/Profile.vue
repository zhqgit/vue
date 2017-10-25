<template>
  <div class="container">
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <img src="http://oliwae5lt.bkt.clouddn.com/vuesite/img/avatar/me.png" alt="">
        </div>
      </el-col>
      <el-col :span="18"><div class="grid-content bg-purple-light">ddd</div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 1140px;
  padding: 0 30px;
  margin: 0 auto;
}

@media (max-width: 1140px) {
  .container,
  .page-container {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .container,
  .page-container {
    padding: 0 20px;
  }
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
