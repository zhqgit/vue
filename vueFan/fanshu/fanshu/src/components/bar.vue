<template>
    <div>
        {{ msg }}
        <h1>{{ name }}</h1>
        <button @click="sayHello">sayHello</button>
    </div>
</template>

<script>
export default {
    name: 'bar',
    data() {
        return {
            msg: 'Hello Bar'
        }
    },
    computed: {
        name() {
            return this.$store.state.bar.name
        }
    },
    methods: {
        sayHello() {
            this.$store.commit('sayHello')
        }
    }
}
</script>
