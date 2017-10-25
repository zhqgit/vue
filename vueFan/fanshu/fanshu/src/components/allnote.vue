<template>
    <el-row>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span style="line-height: 36px;">我的笔记{{ active }}</span>
                <el-button style="float: right;" type="primary">操作按钮</el-button>
            </div>
            <div v-for="item in todoList" :key="item.attributes.tid" class="text item" :data-id="item.attributes.tid" @click="change(item.attributes.tid)">
                <a href="">{{ item.attributes.title }}</a>
            </div>
        </el-card>
    </el-row>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    created() {
        let query = new this.$api.SDK.Query('Todo')
        let todo = []
        query.find().then(function(results) {
            todo = results
        }, function(error) {
            console.log('Error:' + error)
        })
    },
    computed: {
        active() {
            return this.$store.state.active
        },
        todoList() {
            return this.$store.state.todoList
        }
    },
    methods: {
        change(val) {
            this.$store.commit('change', val)
        }
    }
}
</script>

<style scoped>
.text {
    font-size: 14px;
}

.item {
    padding: 18px 0;
}

.item:hover {
    background-color: #f9f9f9;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}

.box-card {
    width: 480px;
}
</style>
