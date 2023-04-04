import React, { useState } from 'react'
import Overview from './components/Overview'
import './App.css'

function App() {
  const [tasks, setTasks ] = useState([])

  

  return (
    <div className="App">
      <div>
        <form>
          <label></label>
          <input/>
          <button>submit</button>
        </form>
      </div>
      <Overview />
    </div>
    
  );
}

export default App
