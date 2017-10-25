<template>
  <!-- <el-button type="text" @click="open">点击打开 Message Box</el-button> -->
  <div>haha</div>
</template>

<script>
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
  }
};
</script>

<style scoped>

</style>
