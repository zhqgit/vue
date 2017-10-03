<template>
    <div>
        <p>{{count}}
            <button @click="inc">+</button>
            <button @click="dec">-</button>
        </p>
        <h1>{{sayName}}</h1>
        <button @click="changeName">换名子</button>
        <bar></bar>
        <carousel></carousel>
    </div>
</template>

<script>
import Bar from '../components/bar'
import Carousel from '../components/carousel'
import { mapState } from 'vuex'
export default {
    components: {
        Bar,
        Carousel
    },
    computed: mapState({
        // count函数返回store状态值
        count: state => state.count,
        sayName: state => state.sayName,
    }),
    methods: {
        inc() {
            // 提交给store对象，触发store对象的inc方法
            this.$store.commit('inc')
        },
        dec() {
            // 提交给store对象，触发store对象的dec方法
            this.$store.commit('dec')
        },
        changeName() {
            this.$store.commit('changeName')
        }
    }
}
</script>