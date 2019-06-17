import React, {Component, Fragment} from 'react'
import './style.css'

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: true
    }
    this.handleToggle = this.handleToggle.bind(this)
  }


  render() {
    return (
      <Fragment>
        <div className={this.state.show ? 'show' : 'hide'}>hello</div>
        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    )
  }

  handleToggle() {
    this.setState({
      show: !this.state.show
    })
  }
}

export default App
