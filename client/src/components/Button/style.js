import styled from 'styled-components'

export const StyledButton = styled.button`
  font-weight: bold;
  padding: 10px 30px;
  background-image: linear-gradient(166deg, #ffae35 10%, #ff6a2e 100%);
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
    background-image: linear-gradient(166deg, #ffc56e 10%, #ff9970 100%);
  }
  &:focus {
    outline: none;
  }
`
