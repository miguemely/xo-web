import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link, Route, IndexLink, IndexRoute } from 'react-router'
import { ReduxRouter } from 'redux-router'


import About from './about'
import Home from './home'

class XoApp extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render () {
    return (
      <div>
        <ul>
          <li><Link to='/about'>About</Link></li>
          <li><IndexLink to='/'>Home</IndexLink></li>
          <li><button onClick={ this._do({ type: 'INCREMENT' }) }>Increment</button></li>
          <li><button onClick={ this._do({ type: 'DECREMENT' }) }>Decrement</button></li>
        </ul>

        <p>{ this.props.counter }</p>

        { this.props.children }
      </div>
    )
  }

  _do (action) {
    return () => this.props.dispatch(action)
  }
}

XoApp = connect(state => state)(XoApp)

export default () => <div>
  <h1>Xen Orchestra</h1>

  <ReduxRouter>
    <Route path='/' component={ XoApp }>
      <IndexRoute component={ Home } />
      <Route path='/about' component={ About } />
    </Route>
  </ReduxRouter>
</div>
