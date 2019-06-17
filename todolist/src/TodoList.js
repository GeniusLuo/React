import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import './style.css'
import axios from 'axios'
class TodoList extends Component {

  constructor(props) {
    super(props);
    // 当组件的state或者props发生变化的时候，render函数就会重新执行
    this.state = { // 数据状态定义,负责存贮组件数据
      inputVal: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  render() { // jsx语法
    return (
      <Fragment>
        <label htmlFor="insertArea">输入内容</label> {/*这里htmlFor语法*/}
        <input id="insertArea"
               className="input"
               value={this.state.inputVal}
               onChange={this.handleInputChange}/> {/*绑定this方法1 -- 改变函数作用域*/}
        <button onClick={this.handleBtnClick}>提交</button>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  componentDidMount() {
    axios.get('/api/todolist')
      .then(() => {alert('success')})
      .catch(() => alert('error'))
  }

  getTodoItem() {
    // 可以这样生成jsx代码块，这里key值很重要
    return this.state.list.map((item, index) => {
      return (
        /*通过属性content传递item值给子组件*/
        <TodoItem content={item}
                  key={index}
                  index={index}
                  deleteItem={this.handleItemDelete}/>
      )
    })
  }

  /** 方法定义 **/
  handleInputChange(e) {
    // console.log(this); // this指TodoList组件
    // this.state.inputVal = e.target.value // 错误的设置方法
    /*this.setState({ // react修改数据的唯一方法,对象设置法
      inputVal: e.target.value
    })*/
    // 异步方式时，要将值保存在外面
    const value = e.target.value
    this.setState(() => ({ // 函数设置法，但是是异步的 可以提升性能
      inputVal: value
    }))
  }


  /** btn提交input val值 **/
  handleBtnClick() {
    /*this.setState({ // react修改数据的唯一方法
      list: [...this.state.list, this.state.inputVal],
      inputVal: ''
    })*/

    // prevState是前一个state状态，比this.state更好，避免直接改变this.state
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputVal],
      inputVal: ''
    }))
  }

  /** 点击item删除 **/
  handleItemDelete(idx) {
    // immutable
    // state 不允许我们直接做任何操作改变
    // const list = [...this.state.list]
    /*list.splice(idx, 1) // 数组删除数组下标为idx值
    this.setState({ // react修改数据的唯一方法
      list: [...list]
    })*/
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(idx, 1)
      return {list}
    })
  }
}

export default TodoList;
