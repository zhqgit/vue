<template>
    <el-row>
        <el-col :span="2">
            <div class="grid-content bg-purple">
                <toolbar></toolbar>
            </div>
        </el-col>
        <el-col :span="11">
            <div class="grid-content bg-purple-light">
                <allnote></allnote>
            </div>
        </el-col>
        <el-col :span="11">
            <div class="grid-content bg-purple">
                <!-- <editor></editor> -->
            </div>
        </el-col>
    </el-row>
</template>
<script>
    import Toolbar from '../components/toolbar'
    import Allnote from '../components/allnote'
    import Editor from '../components/editor'
    export default{
        components: {
            Toolbar,
            Allnote,
            Editor
        }
    }
</script>
<style>
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
      height: 500px;
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
