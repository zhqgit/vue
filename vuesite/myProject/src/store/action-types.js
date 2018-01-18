// action 使用dispathc，异步
// 诸如向数据库修改需要延迟的都建议使用异步
// 存放 action 函数名
// dispatch atype
// commit type
// this.$store.dispatch(atypes.SIGN_OUT).then()
// this.$store.commit(types.fn,{})
// [types.fn](state,user){ state.user = user },那么调用的时候commit传入的对象就需要和state.user具有相同的对象属性和方法
export default {
  SIGN_OUT: 'SIGN_OUT'
}
