import "./App.css";
import "./color.css";
import { useState } from "react";
function App() {
  const [person, changeName] = useState("Naser Zaghwan");
  const [old, setOld] = useState("28");
  const [num, setNum] = useState(1)
  const [color, setColor] = useState("")
  return (
    <div className={`App ${color}`}>
      <button onClick={() => {
        setColor(color == "" ? "Dark" : "");
      }} style={{ marginRight: "26px" }}>Toggle Theme</button>
      <br />
      <br />
      <div>
        <button onClick={() => {
          setColor("light")
        }} style={{ marginRight: "26px" }}>Light</button>
        <button onClick={() => {
          setColor("Dark")
        }} style={{ marginRight: "26px" }}>Dark</button>
        <button onClick={() => {
          setColor("Grey")
        }} style={{ marginRight: "26px" }}>Grey</button>
        <button onClick={() => {
          setColor("Pink")
        }} style={{ marginRight: "26px" }}>Pink</button>
        <h2>My Name is {person}</h2>
        <button onClick={() => {
          changeName("NasZag")
        }}>Change Name</button>
      </div>
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
        setNum(num + 1)
      }}>count is {num}</button>
    </div>
  );
}

export default App;
