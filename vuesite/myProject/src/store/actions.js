import atypes from './action-types'
import types from './types'
import storage from '@/common/data/storage'

export default {
  [atypes.SIGN_OUT](context) {
    let signOutPromise = new Promise((resolve, reject) => {
      // 退出清理 store
      context.commit(types.CLEAR);

      // 清理浏览器 Storage 对象
      let storage_keys = Object.getOwnPropertyNames(storage);
      storage_keys.forEach(item => {
        localStorage.removeItem(item);
      });

      // 尝试获取缓存信息
      if (localStorage.getItem('userid') === null) {
        // 用户缓存清理成功返回信息
        resolve('用户缓存清除成功！');
      }else{
        reject('用户缓存清除失败！');
      }


    });

    // signOutPromise.then((result) => {
    //   // 运行成功！
    //   console.log(result);
    // });
    return signOutPromise;
  }
}
