import React from 'react'

import { SideMenu, Title, ShowButton } from './style'

import Link from '../Link'
import NavLink from '../NavLink'
import Icon from '../Icon'

const renderBoardLinks = boards => {
  return boards.map(board => {
    return (
      <NavLink to={`/app/boards/${board._id}`} key={board._id}>
        {board.name}
      </NavLink>
    )
  })
}

export default ({ active, toggleSideMenu, boards }) => {
  return (
    <SideMenu active={active}>
      <Link to="/app">
        <Title>Boards</Title>
      </Link>
      {renderBoardLinks(boards)}
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
