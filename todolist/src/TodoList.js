import React, {Component, Fragment} from 'react';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = { // 数据状态定义,负责存贮组件数据
      inputVal: '',
      list: []
    }
  }

  render() { // jsx语法
    return (
      <Fragment>
        <input value={this.state.inputVal}
               onChange={this.handleInputChange.bind(this)}/> {/*绑定this方法1 -- 改变函数作用域*/}
        <button>提交</button>
        <ul>
          <li>学英语</li>
          <li>Learning React</li>
        </ul>
      </Fragment>
    )
  }

  /** 方法定义 **/
  handleInputChange(e) {
    // console.log(this); // this指TodoList组件
    // this.state.inputVal = e.target.value // 错误的设置方法
    this.setState({ // react修改数据的方法
      inputVal: e.target.value
    })
  }
}

export default TodoList;
