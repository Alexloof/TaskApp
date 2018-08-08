import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  left: ${({ activeMenu }) => (activeMenu ? '300px' : '80px')};
  top: 50px;
  height: calc(100vh - 50px);
  width: ${({ activeMenu }) =>
    activeMenu ? 'calc(100vw - 300px)' : 'calc(100vw - 80px)'};
  overflow: auto;
  transition: 0.5s all cubic-bezier(0.36, -0.01, 0.4, 1.35);
`
