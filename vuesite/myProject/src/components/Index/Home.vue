<template>
    <div>
        <app-header></app-header>
        <!-- <button @click="btn">修改</button> -->
        <router-view></router-view>
            <app-footer></app-footer>
    </div>
</template>

<style scoped>

</style>

<script>
import AppHeader from "@/components/common/Header";
import AppFooter from "@/components/common/Footer";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    AppHeader,
    AppFooter
  },
  methods: {
    // btn() {
    //     let params = new URLSearchParams()
    //     params.append('userid', '20143703048')
    //     params.append('opwd', '3048')
    //     params.append('npwd', 'ddd')
    //     console.log(params)
    //     console.log(params.keys())
    //     console.log(params.keys().next())
    //     console.log(params.has('userid'))
    //     this.$common.http.post('change_password', params).then(function(response) {
    //         console.log(response);
    //     })
    //         .catch(function(error) {
    //             console.log(error);
    //         })
    // }
  }
};
</script>
