import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  margin-top: 5%;
  text-align: center;
  width: 740px;
  display: flex;
  flex-direction: column;
  height: 400px;
  max-height: 600px;
  padding: 30px;
`

export const FlexGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const BoardCard = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 150px;
  box-shadow: 0px 8px 20px 0px #00000032;
  cursor: pointer;
  border-radius: 50%;
  background-image: linear-gradient(164deg, #ff6a2e 20%, #ff47a1 100%);
  color: #f1f1f1;
  font-weight: bold;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  color: #353535;
  word-spacing: 4px;
  margin-bottom: 40px;
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
  margin-bottom: 60px;
  cursor: pointer;
`
