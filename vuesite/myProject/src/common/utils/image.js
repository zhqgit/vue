/**
 * @fn 图片操作方法
 */

export default {
  /**
   * @desc 将图片转换为 base64 格式，以base64格式嵌入页面
   * @param {*}
   * @return {promise}
   */
  convertImageToBase64 (file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)

      reader.onloadstart = e => {
        console.log('开始获取图片...')
      }

      reader.onloadend = e => {
        console.log('图片获取成功！')
        resolve(e.target.result)
      }

      reader.onerror = e => {
        console.log('图片获取失败！')
        reject('图片获取失败！')
      }

      reader.onabort = e => {
        console.log('图片获取中断！')
        reject('图片获取中断！')
      }
    })
  },

  /**
   * @desc 图片预览的另一种方法，生成本地图片的url地址
   * @param {File&&Blob} file
   * @return {URL}
   */
  createImageURL (files) {
    let fileObj = files[0]
    return new Promise((resolve, reject) => {
      window.URL = window.URL || window.webkitURL
      if (!files.length) {
        reject('没有选择任何图片！')
      } else {
        // 判断file的类型是不是图片类型。
        if (!/image\/\w+/.test(fileObj.type)) {
          // this.$message({
          //   message: '头像必须是图片！',
          //   type: 'error'
          // })
          reject('头像必须是图片！')
        }

        // 在此限制图片的大小
        let imgSize = fileObj.size
        console.log(imgSize)
        // 35160  计算机存储数据最为常用的单位是字节(B)
        // 在此处我们限制图片大小为2M
        if (imgSize > 2 * 1024 * 1024) {
          // this.$message({
          //   message: '上传的图片的大于2M,请重新选择！',
          //   type: 'error'
          // })
          reject('头像必须小于2M,请重新选择！')
        }
        resolve(window.URL.createObjectURL(fileObj))
      }
    })
  }
}
