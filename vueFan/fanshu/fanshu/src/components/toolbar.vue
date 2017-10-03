<template>
    <el-row>
        <el-col :span="24">
            <div class="grid-content bg-purple-dark">
                <div class="tool-content">
                    <a href="">
                        <i class="el-icon-plus"></i>
                    </a>
                </div>
                <div class="tool-content">
                    <a href="">
                        <i class="el-icon-star-on"></i>
                    </a>
                </div>
                <div class="tool-content" @click="del">
                    <a href="">
                        <i class="el-icon-delete"></i>
                    </a>
                </div>
            </div>
        </el-col>
    </el-row>
</template>
<script>
export default {
    methods: {
        del() {
            this.$store.commit('del')
        }
    }
}
</script>

<style>
.tool-content {
    height: 50px;
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