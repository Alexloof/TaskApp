import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Board from './views/board'

export default () => (
  <Router>
    <div>
      <div>Naven</div>
      <Switch>
        <Route path="/" exact component={Board} />

        <Route component={NoMatch} />
      </Switch>
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
