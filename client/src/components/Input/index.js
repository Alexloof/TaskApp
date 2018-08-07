import styled from 'styled-components'

export default styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  background: white;
  box-shadow: 0 0px 0px 1px rgba(0, 0, 0, 0.15);
  border: 0;
  height: 40px;
  &:focus {
    outline-style: initial;
    border: 1px solid #ff6a2e;
  }
`
