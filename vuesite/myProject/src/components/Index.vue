<template>
  <main>
    <div class="banner clearfix">
      <div class="slider">
        <div class='carousel-wrap' id='carousel'>
          <transition-group tag='ul' class='slide-ul' name='list'>
            <li v-for='(list,index) in slideList' :key='index' v-show='index===currentIndex' @mouseenter='stop'
                @mouseleave='go'>
              <a :href='list.clickUrl'>
                <img :src='list.image' :alt='list.desc'>
              </a>
            </li>
          </transition-group>
          <div class='carousel-items'>
            <span v-for='(item,index) in slideList.length' :class="{'active':index===currentIndex}"
                  @mouseover='change(index)'></span>
          </div>
        </div>
      </div>
      <div class="hot">
        <div class="category">
          <h2>资源分类</h2>
          <!--这里不需要.length，那前面为什么要加呢-->
          <h3 v-for='item in resCategories'>{{item.res_name}}
            <ul>
              <li v-for='res_set in item.res_category_set'>{{res_set}}</li>
            </ul>
          </h3>
        </div>
      </div>
    </div>
    <button @click='fn("../123")'>提交</button>
  </main>
</template>

<script>
  import Axios from 'axios'

  export default {
    name: 'index',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        slideList: [
          {
            'clickUrl': '#',
            'desc': 'nhwc',
            'image': 'http://oliwae5lt.bkt.clouddn.com/22.png'
          },
          {
            'clickUrl': '#',
            'desc': 'hxrj',
            'image': 'http://oliwae5lt.bkt.clouddn.com/22.png'
          },
          {
            'clickUrl': '#',
            'desc': 'rsdh',
            'image': 'http://oliwae5lt.bkt.clouddn.com/22.png'
          }
        ],
        resCategories: '',
        currentIndex: 0,
        timer: ''
      }
    },
    methods: {
      go () {
        this.timer = setInterval(() => {
          this.autoPlay()
        }, 4000)
      },
      stop () {
        clearInterval(this.timer)
        this.timer = null
      },
      change (index) {
        this.currentIndex = index
      },
      autoPlay () {
        this.currentIndex++
        if (this.currentIndex > this.slideList.length - 1) {
          this.currentIndex = 0
        }
      },
      fn: function () {
        let _this = this
        Axios.get('./data/index.json')
          .then(function (res) {
            _this.msg = res.data.name
            console.log(_this.msg)
            console.log(res.data.res_categories)
            // 获得返回的json数据
            _this.resCategories = res.data.res_categories
          })
      }
    },
    created () {
      this.$nextTick(() => {
        this.timer = setInterval(() => {
          this.autoPlay()
        }, 4000)
      })
    }
  }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  /*
  -----------------------------------------------------------
  @fn 轮播图样式
  -----------------------------------------------------------
  */
  .carousel-wrap {
    position: relative;
    height: 453px;
    width: 100%;
    overflow: hidden;
    background-color: #fff;
  }

  .slide-ul {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  .slide-ul li {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .slide-ul li img {
    width: 100%;
    height: 100%;
  }

  .carousel-items {
    position: absolute;
    z-index: 10;
    top: 380px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    font-size: 0;

  }

  .carousel-items span {
    display: inline-block;
    height: 6px;
    width: 30px;
    margin: 0 3px;
    background-color: #b2b2b2;
    cursor: pointer;
  }

  .carousel-items .active {
    background-color: red;
  }

  .list-enter-active {
    transition: all 1s ease;
    transform: translateX(0)
  }

  .list-leave-active {
    transition: all 1s ease;
    transform: translateX(-100%)
  }

  .list-enter {
    transform: translateX(100%)
  }

  .list-leave {
    transform: translateX(0)
  }

  /*
  ----------------------------------------------
  @style main样式
  ----------------------------------------------
  */

  /*
  ---------------------------------------------
  @style main banner 样式
  ---------------------------------------------
  */

  main {
    width: 80%;
    margin: 0 auto;
  }

  .banner .slider {
    width: 60%;
    height: 500px;
    /* 容器内图片向左浮动，超出部分不显示 */
    overflow: hidden;
    position: relative;
    /* border: 1px solid #000; */
    float: right;
  }

  .hot {
    float: left;
    /*padding-left: 50px;*/
    width: 30%;
  }

  .hot h3 {
    background: url(../assets/images/tips.png) left center no-repeat;
    text-indent: 15px;
    font-weight: normal;
    font-size: 16px;
    color: #1e50ae;
    line-height: 29px;
    height: 40px;
    margin-top: 10px;
    padding-bottom: 8px;
    border-bottom: 1px solid #000;
  }

  .hot hr {
    width: 400px;
  }

  .hot h3 {
    margin-bottom: 0;
  }

  .hot ul {
    display: inline-block;
    padding: 0;
    margin-bottom: 0;
    margin-top: 10px;
  }

  .hot li {
    list-style: none;
    display: inline-block;
    font-size: 12px;
  }

</style>
