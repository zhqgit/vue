import api from '../keys/leancloud'

// 查找轮播图imgArr，如果没有，则返回空

export default {
  returnCarousel () {
    let query = new api.SDK.Query('Carousel')
    // 如果查询的数据为空，那么在data/carousel.js中查找并插入数据
    if (query) {
      console.log('haha')
      query.find().then(function (results) {
        // results 返回的就是有图片的 Todo 集合
        console.log(results)
      })
    } else {
      console.log('hehe')
    }
  }
}
