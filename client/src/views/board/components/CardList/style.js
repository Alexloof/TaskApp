import styled from 'styled-components'

export const ListContainer = styled.div`
  width: 280px;
  background: ${({ isDraggingOver }) =>
    isDraggingOver ? '#a9cfff' : '#9fcecc8a;'};
  border-radius: 5px;
  margin: 0 5px;
  padding: 15px 0px;
  box-shadow: 0px 2px 8px 0px #00000030;
  height: fit-content;
  &&& {
    cursor: pointer;
  }
`
export const Title = styled.h2`
  font-weight: bold;
  font-size: 18px;
  padding: 0px 15px;
`

export const MetaInfo = styled.p`
  color: gray;
  font-size: 14px;
  padding: 0px 15px;
`

export const AddCardLink = styled.p`
  color: #484848;
  padding: 0px 15px;
  &:hover,
  &:active {
    text-decoration: underline;
  }
`

export const CardsWrapper = styled.div`
  overflow: auto;
  max-height: calc(100vh - 204px);
  margin: 5px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ::-webkit-scrollbar {
    width: 0.5em;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #9a9a9a;
    outline: 1px solid slategrey;
    border-radius: 5px;
  }
`
