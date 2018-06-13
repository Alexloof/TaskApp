import styled from 'styled-components'

export const ListContainer = styled.div`
  width: 280px;
  background: ${({ isDraggingOver }) =>
    isDraggingOver ? '#a9cfff' : '#d1dce8'};
  border-radius: 5px;
  margin: 0 5px;
  padding: 15px;
  box-shadow: 0px 2px 8px 0px #00000030;
`
export const Title = styled.h2`
  font-weight: bold;
  font-size: 18px;
`

export const MetaInfo = styled.p`
  color: gray;
  font-size: 14px;
`
