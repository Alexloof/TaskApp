import styled from 'styled-components'

export const MembersGroup = styled.div`
  display: flex;
  align-items: center;
`

export const MemberBox = styled.ul`
  height: 140px;
  overflow-x: hidden;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: fit-content;
  min-width: 280px;
  overflow-y: auto;
  border: 1px solid darkgray;
  border-radius: 3px;
`

export const MemberListItem = styled.li`
  border-bottom: 1px solid #c7c7c7;
  padding-bottom: 5px;
  padding: 8px;
  cursor: pointer;
  transition: 0.2s all ease;
  display: flex;
  justify-content: space-between;
  background: ${({ alreadyMember }) =>
    alreadyMember ? '#e5f9e5' : 'transparent'};
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background: #e6e6e6;
  }
`
