import React from 'react';
import './App.css';
import HelloWorld1 from './HelloWorld';
import NewFoo from './Props';
import ToDo from './ToDoApp/ToDo';

function App() {
  return (
    <div className="App">
      {/* <HelloWorld textToDisplay={"React"} />
      <HelloWorld textToDisplay={"Is"} />
      <HelloWorld textToDisplay={"Best"} /> */}
      {/* <HelloWorld1 /> */}
      {/* <NewFoo newText={"this is from App component"}/> */}
      <ToDo title="My App" id="1"/>
    </div>
  );
}

export default App;
