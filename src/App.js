import './App.css';
import { UseState } from "./UseState";
import { ClassState } from "./ClassState";
import { UseReducer } from "./UseReducer";

function App() {
  return (
    <div className="App">
       <UseState name="UseState"/>
       <ClassState name="Classtate"/>
       <UseReducer name="Use Reducer"/>
    </div>
  );
}

export default App;
