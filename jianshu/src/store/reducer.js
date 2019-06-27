import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from '../common/header/store'
import {reducer as homeReducer} from '../page/home/store'

// 组合各个组件的reducer
const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer
})

export default reducer
