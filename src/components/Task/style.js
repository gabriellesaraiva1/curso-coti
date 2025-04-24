import styled from '@emotion/styled'

export const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  border-bottom: 1px solid rgb(204, 204, 204);
  color: rgb(102, 102, 102);
  font-size: 18px;
`

export const RemoveTaskButton = styled.button`
  background-color: transparent;
  border: none;
  color: rgb(255, 85, 85);
  font-size: 30px;
  cursor: pointer;
`

export const TaskName = styled.div`
  color: ${props => props.color};
`
