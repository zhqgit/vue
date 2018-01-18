<template>
    <div class="container">
        <app-header></app-header>
        <!-- <button @click="btn">修改</button> -->
        <router-view></router-view>
        <!-- <app-footer></app-footer> -->
    </div>
</template>

<style scoped>

</style>

<script>
import AppHeader from '@/components/common/Header'
import AppFooter from '@/components/common/Footer'

export default {
  name: 'Home',
  data () {
    return {}
  },
  components: {
    AppHeader,
    AppFooter
  },
  methods: {}
}
</script>

<style scoped>
.container {
  background: rgba(0, 0, 0, 0.65);
  min-height: 100vh;
}
</style>
