import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 5%;
  text-align: center;
  width: 720px;
  display: flex;
  flex-direction: column;
  height: 400px;
  max-height: 600px;
  padding: 30px;
`

export const FlexGrid = styled.div`
  display: flex;
  flex-direction: row;
`

export const BoardCard = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 200px;
  box-shadow: 0px 2px 6px #0000004f;
  cursor: pointer;
  background-image: linear-gradient(164deg, #81fbb8 10%, #20a39e33 100%);
  border-radius: 12px;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 35px;
  color: #353535;
  word-spacing: 4px;
  margin-bottom: 20px;
`

export const SubTitle = styled.h2`
  color: #909090;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1px;
  margin-bottom: 20px;
`

export const CreateBoardLink = styled.a`
  text-decoration: underline;
  margin-bottom: 10px;
  cursor: pointer;
`
