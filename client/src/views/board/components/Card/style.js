import styled from 'styled-components'

export const CardContainer = styled.div`
  background: ${({ isDragging }) => (isDragging ? '#e8e8e8' : 'white')};
  padding: 10px;
  border-radius: 5px;
  margin: 0 0 8px 0;
  user-select: none;
  font-size: 14px;
`
