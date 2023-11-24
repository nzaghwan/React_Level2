import "./App.css";
import { useState } from "react";
function App() {
  const [person, changeName] = useState("Naser Zaghwan");
  const [old, setOld] = useState("28");
  const [num, setNum] = useState(1)
  return (
    <div className="App">
      <h2>My Name is {person}</h2>
      <button onClick={() => {
        changeName("NasZag")
      }}>Change Name</button>
      <br />
      <br />
      <h2>My Age is {old}</h2>
      <button onClick={() => {
        setOld("33")
      }}> Change Age</button>

      <br />
      <br />
      <br />
      <br />
      <button onClick={() => {
        setNum(num+1)
      }}>count is {num}</button>
    </div>
  );
}

export default App;
