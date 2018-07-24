import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Modal from './components/Modal'
import Navbar from './components/Navbar'
import Home from './views/home'
import Login from './views/login'

export default () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Bajs} />
        <Route path="/app" component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/authcallback" component={Authcallback} />
        <Route component={NoMatch} />
      </Switch>
      <Modal />
    </div>
  </Router>
)

const Bajs = () => {
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
