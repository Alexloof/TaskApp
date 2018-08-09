import React from 'react'
import { Trail, animated } from 'react-spring'

import { SideMenu, Title, ShowButton } from './style'

import { Icon, NavLink, Link } from 'components'

export default ({ active, toggleSideMenu, boards }) => {
  return (
    <SideMenu active={active}>
      <Link to="/app">
        <Title>Boards</Title>
      </Link>

      <Trail
        native
        from={{ x: active ? -100 : 0 }}
        to={{ x: active ? 0 : -100 }}
        keys={boards.map(board => board._id)}
      >
        {boards.map(board => ({ x }) => (
          <animated.div
            style={{
              transform: x.interpolate(x => `translate3d(${x}%,0,0)`),
              padding: '8px 0px'
            }}
          >
            <NavLink to={`/app/boards/${board._id}`} key={board._id}>
              {board.name}
            </NavLink>
          </animated.div>
        ))}
      </Trail>

      <ShowButton onClick={toggleSideMenu}>
        {active ? (
          <Icon name="times" size="24px" style={{ marginLeft: '20px' }} />
        ) : (
          <Icon name="bars" size="20px" style={{ marginLeft: '24px' }} />
        )}
      </ShowButton>
    </SideMenu>
  )
}
