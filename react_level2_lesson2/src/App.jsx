import "./App.css";
import "./color.css";
import { useReducer } from "react";

const initialTodos = { name: "Naser Zaghwan", age: 40, countstart: 0, theme: "light" }

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE-NAME":
      return { ...state, name: action.newValue };
    case "CHANGE-AGE":
      return { ...state, age: action.newValue };
    case "CHANGE-ACOUNT":
      return { ...state, countstart: action.newValue };
    case "CHANGE-THEME":
      return { ...state, theme: action.newValue };

    default:
      return state;
  }
};

function App() {
  const [allData, dispatch] = useReducer(reducer, initialTodos);
  return (
    <div className={`App ${allData.theme}`}>
      <button onClick={() => {
        dispatch({ type: "CHANGE-THEME", newValue: allData.theme == "Light" ? "Dark" : "Light" });
      }}
        style={{ marginRight: "26px" }}>Toggle Theme</button>
      <br />
      {/* switch key */}
      <div onChange={() => {
        dispatch({ type: "CHANGE-THEME", newValue: allData.theme == "Light" ? "Dark" : "Light" });
      }}
        className="btn-container">
        <i className="fa fa-sun-o" aria-hidden="true" />
        <label className="switch btn-color-mode-switch">
          <input type="checkbox" name="color_mode" id="color_mode" defaultValue={1} />
          <label
            htmlFor="color_mode"
            data-on="Dark"
            data-off="Light"
            className="btn-color-mode-switch-inner"
          />
        </label>
        <i className="fa fa-moon-o" aria-hidden="true" />
        <p className="by">
        </p>
      </div>

      <br />
      <br />
      <div>
        <button onClick={() => {
          dispatch({ type: "CHANGE-THEME", newValue: "Light" });
        }} style={{ marginRight: "26px" }}>Light</button>
        <button onClick={() => {
          dispatch({ type: "CHANGE-THEME", newValue: "Dark" });
        }} style={{ marginRight: "26px" }}>Dark</button>
        <button onClick={() => {
          dispatch({ type: "CHANGE-THEME", newValue: "Grey" });
        }} style={{ marginRight: "26px" }}>Grey</button>

        <button onClick={() => {
          dispatch({ type: "CHANGE-THEME", newValue: "Pink" });
        }}
          style={{ marginRight: "26px" }}>Pink</button>

        <h2>My Name is {allData.name}</h2>
        <button onClick={() => {
          dispatch({ type: "CHANGE-NAME", newValue: "NasZag" });
        }}>Change Name</button>
      </div>
      <br />
      <br />
      <h2>My Age is {allData.age} </h2>
      <button onClick={() => {
        dispatch({ type: "CHANGE-AGE", newValue: 50 });
      }} > Change Age</button>

      <br />
      <br />
      <br />
      <br />
      <button onClick={() => {
        dispatch({ type: "CHANGE-ACOUNT", newValue: allData.countstart + 1 });
      }}>count is {allData.countstart} </button>
    </div>
  );
}

export default App;
