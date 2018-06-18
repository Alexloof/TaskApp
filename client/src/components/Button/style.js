import styled from 'styled-components'

export const StyledButton = styled.button`
  font-weight: bold;
  padding: 10px 30px;
  background: #fb8f64;
  height: 40px;
  color: white;
  border: 0;
  font-size: 15px;
  min-width: 100px;
  border-radius: 3px;
  box-shadow: 0px 3px 0px #737373;
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
