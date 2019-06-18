import {put, takeEvery} from 'redux-saga/effects'
import {GET_INIT_LIST} from './actionTypes'
import axios from 'axios'
import {initListAction} from "./actionCreators";

function* getInitList() {
  // try catch为了防止异步请求失败
  try {
    const res = yield axios.get('https://nei.netease.com/api/apimock/ef8bc043e20887e2c94ceeca7e7fee96/list')
    const action = initListAction(res.data.list)
    yield put(action)
  } catch (e) {
    console.log('list网络请求失败')
  }

}

// generator 函数
// 能监听所有的action
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
