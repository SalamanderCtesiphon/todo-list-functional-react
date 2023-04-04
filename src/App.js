import React, { useState } from 'react'
import Overview from './components/Overview'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [tasks, setTasks ] = useState([])
  const [todoEditing, setTodoEditing] = useState(null)
  const [editingText, setEditingText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text) {
      alert('Please add a task')
      return
    }
    addTask({text})

    setText('')
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }


  const submitEdits = (id) => {
    const updatedTasks = [...tasks].map((task) => {
      if (task.id === id) {
        task.text = editingText;
      } 
      return task;
    });
    setTasks(updatedTasks);
    setTodoEditing(null);
  }
  

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            placeholder='Add Task'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button>submit</button>
        </form>
      </div>
      <Overview 
        tasks={tasks} 
        deleteTask={deleteTask}
        setEditingText={setEditingText}
        submitEdits={submitEdits}
        todoEditing={todoEditing}
        setTodoEditing={setTodoEditing}
      /> 
    </div>
    
  );
}

export default App
