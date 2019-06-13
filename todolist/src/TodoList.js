import React, {Component, Fragment} from 'react';
import './style.css'

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
        <label htmlFor="insertArea">输入内容</label>  {/*这里htmlFor语法*/}
        <input id="insertArea"
               className="input"
               value={this.state.inputVal}
               onChange={this.handleInputChange.bind(this)}/> {/*绑定this方法1 -- 改变函数作用域*/}
        <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        <ul>
          {
            // 可以这样生成jsx代码块，这里key值很重要
            this.state.list.map((item, index) => {
              return (
                <li key={index}
                    onClick={this.handleItemDelete.bind(this, index)}
                    dangerouslySetInnerHTML={{__html: item}}/> // 这样写不会被转义，但是无法阻止xss攻击
                /*<li key={index}
                      onClick={this.handleItemDelete.bind(this, index)}>{item}</li>*/
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  /** 方法定义 **/
  handleInputChange(e) {
    // console.log(this); // this指TodoList组件
    // this.state.inputVal = e.target.value // 错误的设置方法
    this.setState({ // react修改数据的唯一方法
      inputVal: e.target.value
    })
  }


  /** btn提交input val值 **/
  handleBtnClick() {
    this.setState({ // react修改数据的唯一方法
      list: [...this.state.list, this.state.inputVal],
      inputVal: ''
    })
  }

  /** 点击item删除 **/
  handleItemDelete(idx) {
    // immutable
    // state 不允许我们直接做任何操作改变
    const list = [...this.state.list]
    list.splice(idx, 1) // 数组删除数组下标为idx值
    this.setState({ // react修改数据的唯一方法
      list: [...list]
    })
  }
}

export default TodoList;
