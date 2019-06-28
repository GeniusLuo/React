import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes'
import axios from 'axios'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('https://nei.netease.com/api/apimock/ef8bc043e20887e2c94ceeca7e7fee96/list').then((res) => {
      const data = res.data.list
      const action = initListAction(data)
      dispatch(action)
    })
  }
}
