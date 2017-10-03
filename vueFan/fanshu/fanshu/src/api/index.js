import AV from 'leancloud-storage'

const APP_ID = 'VMCJXIpIV28CSWsYIa3HHr6a-gzGzoHsz';
const APP_KEY = 'cbqYarHMOlS0jnAyUDCaukRz';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

// 创建数据表 TestObject
// let TestObject = AV.Object.extend('TestObject');

// // 生成一条新的数据
// let testObject = new TestObject();


// testObject.save({
//     // 保存数据，数据包含的字段
//   words: 'Hello World!'
// }).then(function(object) {
//     // 保存成功之后的操作
//   alert('LeanCloud Rocks!');
// })

// // 声明一个 Todo 类型
// let Todo = AV.Object.extend('Todo');
// // 新建一个 Todo 对象
// let todo = new Todo();
// let timestamp = Date.parse(new Date());
// timestamp = timestamp / 1000;
// todo.set('tid', timestamp);
// todo.set('title', '工程师周会');
// todo.set('content', '每周工程师会议，周一下午2点');
// todo.save().then(function (todo) {
//   // 成功保存之后，执行其他逻辑.
//   console.log('New object created with objectId: ' + todo.id);
// }, function (error) {
//   // 异常处理
//   console.error('Failed to create new object, with error message: ' + error.message);
// });



export default { SDK: AV };