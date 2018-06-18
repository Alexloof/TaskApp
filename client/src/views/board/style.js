import styled from 'styled-components'

export const Container = styled.div`
  margin-left: 40px;
  margin-top: 50px;
  padding: 30px;
  display: flex;
  height: calc(100vh - 50px);
  width: ${({ activeMenu }) =>
    activeMenu ? 'calc(100vw - 270px)' : 'calc(100vw - 40px)'};
  overflow: auto;
  transition: 0.5s all ease;
  transform: ${({ activeMenu }) =>
    activeMenu ? 'translateX(230px)' : 'translateX(0px)'};
`

export const ListsWrapper = styled.div`
  display: flex;
`
