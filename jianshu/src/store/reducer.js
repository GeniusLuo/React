import {combineReducers} from 'redux-immutable'
import {reducer as headerReducer} from '../common/header/store'


// 组合各个组件的reducer
const reducer = combineReducers({
  header: headerReducer
})

export default reducer
