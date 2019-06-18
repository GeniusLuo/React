import React from 'react'
import {Input, Button, List} from 'antd';

// 无状态组件
const TodoListUI = (props) => {
  return (
    <div style={{marginTop: 10, marginLeft: 10}}>
      <div>
        <Input value={props.inputValue}
               placeholder="todo info"
               onChange={props.handleInputChange}
               style={{width: 300, marginRight: 10}}/>
        <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      </div>
      <List
        style={{marginTop: 10, width: 300}}
        size="small"
        bordered
        dataSource={props.list}
        renderItem={(item, index) => <List.Item onClick={()=> {props.handleItemDelete(index)}}>{item}</List.Item>}
      />
    </div>
  )
}

export default TodoListUI
