import styled from 'styled-components'

import { Avatar } from 'components'

export const CardContainer = styled.div`
  background: ${({ isDragging }) => (isDragging ? '#e8e8e8' : 'white')};
  padding: 10px;
  border-radius: 5px;
  margin: 0 0 8px 0;
  user-select: none;
  font-size: 14px;
  transition: 0.3s box-shadow ease;
  width: 93%;
  &:first-child {
    margin-top: 5px;
  }
  &&& {
    cursor: pointer;
  }
  &:hover {
    box-shadow: 0px 0px 7px 3px #00000030;
  }
`

export const LowerSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
`

export const MembersGroup = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

export const Member = styled(Avatar)`
  border: 2px solid white;
  width: 27px;
  height: 27px;
  transform: ${({ index, arrayLength }) => {
    if (index === 0) {
      return 'none'
    } else {
      return `translateX(${12 * index}px)`
    }
  }};
`
