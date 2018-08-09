import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Modal from './components/Modal'
import Home from './views/home'
import Login from './views/login'

export default () => (
  <Router>
    <Fragment>
      <Switch>
        <Route path="/" exact component={ROOT} />
        <Route path="/app" component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/authcallback" component={Authcallback} />
        <Route component={NoMatch} />
      </Switch>
      <Modal />
    </Fragment>
  </Router>
)

const ROOT = () => {
  return localStorage.getItem('token') ? (
    <Redirect to="/app" />
  ) : (
    <Redirect to="/login" />
  )
}

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
