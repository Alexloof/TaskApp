import styled from 'styled-components'

export default styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 3px;
  background: white;
  resize: none;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0.37);
  &:focus {
    outline-style: initial;
    border: 1px solid #ff6a2e;
  }
`
