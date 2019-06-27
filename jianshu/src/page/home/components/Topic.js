import React, {Component} from 'react'
import {TopicWrapper, TopicItem} from '../style'
import {connect} from 'react-redux'

class Topic extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <TopicWrapper>
        {/*{*/}
        {/*  this.props.list.map(() =>)*/}
        {/*}*/}
      </TopicWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'topicList'])
})

export default connect(mapState, null)(Topic)
