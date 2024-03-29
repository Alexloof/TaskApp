import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Query } from 'react-apollo'

import GET_USER from 'api/queries/user/user'

import Board from '../board'
import SideMenu from 'components/SideMenu'
import Navbar from 'components/Navbar'
import BoardsOverview from './components/BoardsOverview'
import withAuth from 'lib/withAuth'

import { Container } from './style'

class Home extends Component {
  state = {
    activeMenu: JSON.parse(localStorage.getItem('activeMenu'))
  }

  toggleSideMenu = () => {
    this.setState(
      {
        activeMenu: !this.state.activeMenu
      },
      () => {
        localStorage.setItem('activeMenu', this.state.activeMenu)
      }
    )
  }

  render() {
    return (
      <Query query={GET_USER}>
        {({ loading, error, data }) => {
          console.log(data)
          return (
            <Fragment>
              <Navbar user={data.user || {}} />
              <SideMenu
                active={this.state.activeMenu}
                toggleSideMenu={this.toggleSideMenu}
                boards={(data.user && data.user.boards) || []}
              />
              <Container activeMenu={this.state.activeMenu}>
                {error && <h1>Something happend, try refresh the page...</h1>}
                {!loading &&
                  !error &&
                  (this.props.match.isExact ? (
                    <BoardsOverview boards={data.user.boards} />
                  ) : (
                    <Switch>
                      <Route path="/app/boards/:id" exact component={Board} />
                      <Route component={NoMatch} />
                    </Switch>
                  ))}
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
