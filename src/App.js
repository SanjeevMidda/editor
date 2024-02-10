import { useState } from 'react';
import './index.css';

function App() {

  const [userInput, setUserInput] = useState("");

  function addUserInput(e){
    setUserInput(e.target.value)
  }

  console.log(userInput);

  return (
    <div className="App" onKeyDown={addUserInput}>
      <h1>TEXT EDITOR</h1>
      <textarea name="" id="" cols="100" rows="1700" value={userInput} onChange={addUserInput}></textarea>
    </div>
  );
}

export default App;
