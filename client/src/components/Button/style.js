import styled from 'styled-components'

export const StyledButton = styled.button`
  font-weight: bold;
  padding: 10px 30px;
  background: #ff6a2e;
  min-height: 40px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  min-width: 100px;
  border-radius: 3px;
  box-shadow: 0px 2px 4px #7373734f;
  cursor: pointer;
  transition: 0.3s all ease;
  &:hover,
  &:active {
    background: #fda683;
  }
  &:focus {
    outline: none;
  }
`
