import { useState } from "react";
import { data } from "./data";
import './App.css';


function App() {

  const [toDo, setToDo] = useState(data);
  const removeItem = (id) => {

  let newToDo = toDo.filter(toDo => toDo.id !== id)
  setToDo(newToDo)
  }

  return (
<div>
    <div className="container">
      <h1>The {toDo.length} Best Places To Visit In Paris</h1>
    </div>

      {toDo.map((place => {
      const {id, toVisit, image} = place;

      return(<div key={id}>
        <div className="container">
          <h2>{id} - {toVisit}</h2>
        </div>

        <div className="container">
          <img src={image} width="300px"/>
        </div>

        <div className="container">
          <button onClick={() => removeItem(id)}>Remove</button>
        </div>


  </div>)
      }))}
      <div className="container">
      <button onClick={() => setToDo([])}>Delete All</button>
    </div>
    </div>

  )
}

export default App;