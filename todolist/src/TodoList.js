import React, {Component} from 'react'

class TodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <input type="text"/>
          <button>提交</button>
          <ul>
            <li>Dell</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default TodoList
