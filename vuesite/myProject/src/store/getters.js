// getters的用处
// 1.有时候我们需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数
// 2.mapGetters函数，映射 `this.user` 为 `store.getters.user`
export default {
  user: state => state.user
}
