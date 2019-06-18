import React, {Component} from 'react';
import {Input, Button, List} from 'antd';
import store from './store';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators'

class TodoList extends Component {

  constructor(props, context) {
    super(props, context);
    // store.getState() 是获取store中的state
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    // 订阅store,当store改变时，会执行里面的函数
    store.subscribe(this.handleStoreChange)
  }


  render() {
    return (
      <div style={{marginTop: 10, marginLeft: 10}}>
        <div>
          <Input value={this.state.inputValue}
                 placeholder="todo info"
                 onChange={this.handleInputChange}
                 style={{width: 300, marginRight: 10}}/>
          <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
        </div>
        <List
          style={{marginTop: 10, width: 300}}
          size="small"
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>}
        />
      </div>
    )
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
