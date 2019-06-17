import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {

  constructor(props) {
    super(props);
    // 从这里绑定this指向，可以节省性能
    this.handleClick = this.handleClick.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps.content !== this.props.content;
  }

  render() {
    console.log('child render')
    const {content} = this.props
    return (
      <div onClick={this.handleClick}>
        {content}
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
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

export default TodoItem;
