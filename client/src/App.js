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
        <Route component={NoMatch} />
      </Switch>
      <Modal />
    </div>
  </Router>
)

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
)
