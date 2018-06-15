import styled from 'styled-components'

export const ListContainer = styled.div`
  width: 280px;
  background: ${({ isDraggingOver }) =>
    isDraggingOver ? '#a9cfff' : '#d1dce8'};
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
`

export const MetaInfo = styled.p`
  color: gray;
  font-size: 14px;
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

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #9a9a9a;
    outline: 1px solid slategrey;
    border-radius: 5px;
  }
`
