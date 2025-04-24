// import style from './index.module.css'
import * as S from './style'

export const Task = ({ task, id, onRemoveTask }) => {
  return <S.TaskContainer>
    <S.TaskName color={id % 2 === 0 ? 'goldenrod' : 'blue'}>{task}</S.TaskName>
    <S.RemoveTaskButton
      onClick={() => onRemoveTask(id)}
    >X</S.RemoveTaskButton>
  </S.TaskContainer>
}

export default Task