import styled from 'styled-components'

export default styled.img`
  width: ${props => props.size || '25px'};
  height: ${props => props.size || '25px'};
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
`
