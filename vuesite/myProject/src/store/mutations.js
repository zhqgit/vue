// action 和 mutation 的区别
// 注：在 mutation 中混合异步调用会导致你的程序很难调试。
// 例如，当你能调用了两个包含异步回调的 mutation 来改变状态，你怎么知道什么时候回调和哪个先回调呢？
// 这就是为什么我们要区分这两个概念。在 Vuex 中，mutation 都是同步事务

// actions其实只是普通的函数(尤老大知乎原话)，正是因为不可以在mutation中进行异步操作才要action，但是他本质上就是普通的函数，
// 其实你不写actions也行的，只不过把常用的操作封装到actions里边用起来比较方便，也能在全局进行复用。

// 全局mutations的实现
import types from './types'

export default {
  [types.CLEAR] (state) {
    state.user = null
    console.log('用户数据已清空/还原')
  },
  [types.UPDATE_USER] (state, user) {
    // 用户登录后更新 sotre数据
    state.user.id = user.id
    state.user.username = user.username
    state.user.email = user.email
    state.user.grade = user.grade
    state.user.major = user.major
    state.user.avatar = user.avatar
  }
}
