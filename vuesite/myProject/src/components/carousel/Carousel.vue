<template>
    <el-carousel :interval="4000" type="card" height="300px" :autoplay="true">
        <el-carousel-item v-for="item in Carousel" :key="item.id">
            <img :src="item.url" alt="">
        </el-carousel-item>
    </el-carousel>
</template>

<script>
// import Leancloud from '@/common/utils/leancloud'
import Carousel from '@/common/data/carousel'
export default {
    name: 'carousel',
    data() {
        return {
            Carousel: Carousel.Carousel
        }
    },
    created() {
    }
}

</script>


<style scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>