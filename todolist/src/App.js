import React, {Component, Fragment} from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import './style.css'

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      list: []
    }
    this.handleAddItem = this.handleAddItem.bind(this)
  }


  render() {
    return (
      <Fragment>
        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition timeout={500}
                               classNames="fade"
                               unmountOnExit
                               appear={true}
                               key={index}
                               onEntered={el => el.style.color = 'blue'}>
                  <div>{item}</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={this.handleAddItem}>toggle</button>
      </Fragment>
    )
  }

  handleAddItem() {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, 'item']
      }
    })
  }
}

export default App
