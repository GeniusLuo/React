import React from 'react'
import {connect} from 'react-redux'

// 改为无状态组件
const TodoList = (props) => {
  const {inputValue, list, changeInputValue, handleClick, handleDelete} = props;
  return (
    <div>
      <div>
        <input value={inputValue} onChange={changeInputValue}/>
        <button onClick={handleClick}>提交</button>
        <ul>
          {
            list.map((item, index) => {
              return <li onClick={() => {handleDelete(index)}} key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}


// 把store的dispatch方法挂载到props上
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    handleClick() {
      const action = {
        type: 'add_item'
      }
      dispatch(action)
    },
    handleDelete(index) {
      console.log('delete', index)
    }
  }
}

// 让TodoList与store连接起来
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
