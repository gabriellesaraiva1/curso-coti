import { useState } from "react"

export const useTasks = () => {
  const [tasks, setTasks] = useState([])

  const removeTask = (id) => {
    const tasksTemp = tasks.filter((_task, index) => index !== id)
    setTasks(tasksTemp)
    localStorage.setItem('tasksStored', JSON.stringify(tasksTemp))
  }

  const storedTasksToJson = () => {
    const result = localStorage.getItem('tasksStored')
    return JSON.parse(result) || []
  }

  /*
   * useCallback = serve para memorizar (estabilizar) uma função 
   * e evitar renderização desnecessária
   */
  // const storedTasksToJson = useCallback(() => {
  //   const result = localStorage.getItem('tasksStored')
  //   return JSON.parse(result) || []
  // }, [])

  const setItemToTask = (item, setItem) => {
      if (!item.trim()) return
  
      setTasks([
        ...tasks,
        item
      ])
  
      const localstorageTasks = storedTasksToJson()
  
      localstorageTasks.push(item)
  
      const localstorageTasksString = JSON.stringify(localstorageTasks)
  
      localStorage.setItem('tasksStored', localstorageTasksString)
  
      setItem('')
    }

  return {
    tasks,
    setTasks,
    removeTask,
    setItemToTask,
    storedTasksToJson,
  }
}

export default useTasks