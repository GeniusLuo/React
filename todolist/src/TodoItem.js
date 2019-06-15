import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {

  constructor(props) {
    super(props);
    // 从这里绑定this指向，可以节省性能
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    const {content, test} = this.props

    return (
      <div onClick={this.handleClick}>
        {content} - {test}
      </div>
    )
  }

  /** 子组件方法定义 **/
  handleClick() {
    const {deleteItem, index} = this.props
    deleteItem(index)
  }
}

/** 组件传值类型定义 **/
TodoItem.propTypes = {
  test: PropTypes.string.isRequired, // isRequired是必须传
  content: PropTypes.arrayOf(PropTypes.number, PropTypes.string),
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

/** 组件传值默认值 **/
TodoItem.defaultProps = {
  test: 'hello world'
}

export default TodoItem;
