import styled from 'styled-components'

export const SideMenu = styled.aside`
  background: #0bd0be;
  width: 230px;
  position: fixed;
  height: calc(100vh - 50px);
  top: 50px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  padding-top: 20px;
  box-shadow: 2px 4px 10px 0px #0000003b;
  transition: 0.5s all cubic-bezier(0.36, -0.01, 0.4, 1.35);
  transform: ${({ active }) =>
    active ? 'translateX(0px)' : 'translateX(-230px)'};
`
export const Title = styled.p`
  font-size: 18px;
  border-bottom: 1px solid #0000001f;
  padding-bottom: 15px;
  color: #464646;
  font-weight: 300;
`

export const ShowButton = styled.button`
  background: #0bd0be;
  width: 71px;
  height: 74px;
  position: absolute;
  border: 0;
  right: -37px;
  top: 26px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`
