import React, {Component} from 'react';
import store from './store';
import {getInitList ,getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators'
import TodoListUI from "./TodoListUI";

class TodoList extends Component {

  constructor(props, context) {
    super(props, context);
    // store.getState() 是获取store中的state
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    // 订阅store,当store改变时，会执行里面的函数
    store.subscribe(this.handleStoreChange)
  }


  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}/>
    )
  }

  componentDidMount() {
    const action = getInitList()
    store.dispatch(action)
  }

  // input值改变时，更新store对应的值
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  // store变化时，更新组件state
  handleStoreChange() {
    this.setState(store.getState())
  }

  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList;
