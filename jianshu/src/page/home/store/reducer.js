import {fromJS} from 'immutable'

// 将普通js对象转化为immutable对象
const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/7290998/f64f5ef0-def0-4b26-beb3-b9d88f060ba0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
    {
      id: 2,
      title: '手绘',
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/7290998/f64f5ef0-def0-4b26-beb3-b9d88f060ba0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
  ]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
    default:
      return state
  }
}
