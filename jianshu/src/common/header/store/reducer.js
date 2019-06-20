import * as constants from './constants'
import {fromJS} from 'immutable'

// 将普通js对象转化为immutable对象
const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state = defaultState, action) => {
  switch (action.type) {
    // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
    case constants.SEARCH_FOCUS:
      return state.set('focused', true)
    case constants.SEARCH_BLUR:
      return state.set('focused', false)
    case constants.CHANGE_LIST:
      return state.set('list', action.data).set('totalPage',action.totalPage)
    default:
      return state
  }
}
