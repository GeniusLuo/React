import {createStore} from 'redux';
import reducer from './reducer';

// 创建store，要传入reducer
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // 为了显示chrome的redux插件
);

export default store;
