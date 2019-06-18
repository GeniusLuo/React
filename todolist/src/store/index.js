import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

// 为了显示chrome的redux插件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);
// 创建store，要传入reducer
const store = createStore(reducer, enhancer,);

export default store;
