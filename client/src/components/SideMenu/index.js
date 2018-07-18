import React from 'react'

import { SideMenu, Title, ShowButton } from './style'

import Link from '../Link'
import Icon from '../Icon'

const renderBoardLinks = boards => {
  return boards.map(board => {
    return (
      <Link to="/" key={board._id}>
        {board.name}
      </Link>
    )
  })
}

export default ({ active, toggleSideMenu, boards }) => {
  return (
    <SideMenu active={active}>
      <Title>Boards</Title>
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
