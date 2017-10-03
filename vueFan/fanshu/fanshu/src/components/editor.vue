<template>
    <div>
        <p>{{title}}</p>
        <p>{{content}}</p>
    </div>
</template>
<script>
export default {
    computed: {
        title() {
            let id = this.$store.state.active
            let arr = this.$store.state.todoList
            let some = arr.find(function(item){
                // 属性值要使用严格判断
                return item.id === id
            })
            return some.title
        },
        content() {
            let id = this.$store.state.active
            let arr = this.$store.state.todoList
            let some = arr.find(function(item){
                // 属性值要使用严格判断
                return item.id === id
            })
            return some.content
            
        }
    }
}
</script>