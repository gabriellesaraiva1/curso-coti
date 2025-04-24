import styled from '@emotion/styled'

export const ContentContainer = styled.div`
    background-color: rgb(255, 255, 255);
    max-width: 600px;
    box-shadow: rgb(221, 221, 221) 5px 5px 10px;
    margin: 40px auto;
    padding: 30px;
    box-sizing: border-box;
    border-radius: 10px;
`

export const Form = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
`

export const ContentForm = styled.div``

export const TaskName = styled.input`
  flex-grow: 1;
  height: 54px;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid rgb(204, 204, 204);
  font-size: 18px;
`

export const NewTaskButton = styled.button`
  width: 105px;
  background-color:rgb(211, 211, 211) ;
  color: rgb(255, 255, 255);
  border-radius: 5px;
  border: black;
  font-size: 18px;
  cursor: pointer;
`

