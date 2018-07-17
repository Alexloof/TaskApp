import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Modal from './components/Modal'
import Navbar from './components/Navbar'
import Board from './views/board'
import Login from './views/login'

export default () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Board} />
        <Route path="/login" exact component={Login} />
        <Route path="/authcallback" component={Authcallback} />
        <Route component={NoMatch} />
      </Switch>
      <Modal />
    </div>
  </Router>
)

const Authcallback = ({ history, location: { search } }) => {
  if (search.slice(1, 6) === 'token') {
    const token = search.slice(7)
    localStorage.setItem('token', token)
    history.replace('/')
  } else {
    history.replace('/login')
  }
  return <div />
}

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
)
