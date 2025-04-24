import Task from '../Task'

export const TaskContainer = ({ task, id, onRemoveTask }) => {
  return <Task
    task={task}
    id={id}
    onRemoveTask={(id) => onRemoveTask(id)}
  />
}

export default TaskContainer