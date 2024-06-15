
import { useState } from 'react'
import './App.css'
import {DndContext, closestCorners} from '@dnd-kit/core'
import { Column } from './components/Column/Column'
import { arrayMove } from '@dnd-kit/sortable'
function App() {
  const [tasks, setTasks] = useState([
    {id:1, title: 'Task1'},
    {id:2, title: 'Task2'},
    {id:3, title: 'Task3'}

  ])
  const getTaskPos =  id => tasks.findIndex(tasks => tasks.id === id )
  const handleDragEnd = event =>{
    const {active,over} = event

    if(active.id === over.id) return;

    setTasks(tasks =>{
      const originalPos = getTaskPos(active.id)
      const newPos = getTaskPos(over.id)
      return arrayMove(tasks, originalPos,newPos)
    })

    
  }
  return (
    <div className='App'>
        <h1> To do </h1>
        <DndContext onDragEnd={handleDragEnd}  collisionDetection={closestCorners}>
          <Column tasks={tasks}/>
        </DndContext>
    </div>
  )
}

export default App
