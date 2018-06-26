import styled from 'styled-components'

export const Container = styled.div`
  /* margin-left: 40px;
  margin-top: 50px; */
  position: relative;
  left: ${({ activeMenu }) => (activeMenu ? '280px' : '50px')};
  top: 80px;
  display: flex;
  height: calc(100vh - 100px);
  width: ${({ activeMenu }) =>
    activeMenu ? 'calc(100vw - 280px)' : 'calc(100vw - 50px)'};
  overflow: auto;
  transition: 0.5s all ease;
  /* transform: ${({ activeMenu }) =>
    activeMenu ? 'translateX(230px)' : 'translateX(0px)'}; */
`

export const ListsWrapper = styled.div`
  display: flex;
`
