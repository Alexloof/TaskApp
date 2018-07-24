import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Query } from 'react-apollo'

import USER_BOARDS from '../../api/queries/board/userBoards'

import Board from '../board'
import SideMenu from '../../components/SideMenu'
import withAuth from '../../lib/withAuth'

import { Container } from './style'

class Home extends Component {
  state = {
    activeMenu: true
  }

  toggleSideMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu
    })
  }

  render() {
    return (
      <Query query={USER_BOARDS}>
        {({ loading, error, data }) => {
          return (
            <Fragment>
              <SideMenu
                active={this.state.activeMenu}
                toggleSideMenu={this.toggleSideMenu}
              />
              <Container activeMenu={this.state.activeMenu}>
                {this.props.match.isExact ? (
                  'hemma'
                ) : (
                  <Switch>
                    <Route path="/boards/:id" exact component={Board} />
                    <Route component={NoMatch} />
                  </Switch>
                )}
              </Container>
            </Fragment>
          )
        }}
      </Query>
    )
  }
}

export default withAuth(Home)

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
)
