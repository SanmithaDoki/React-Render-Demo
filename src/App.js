import logo from "./logo.svg";
import "./App.css";
import UseState from "./components/UseState/UseState";
import UseReducer from "./components/UseReducer/UseReducer";
import ObjectUseState from "./components/ImmutableState/ObjectUseState";
import ArrayUseState from "./components/ImmutableState/ArrayUseState";
import Parent from "./components/Parent Child/Parent";
import ParentOne from "./components/Optimization/ParentOne";
import ChildOne from "./components/Optimization/ChildOne";
import GrandParent from "./components/Optimization/GrandParent";
import ParentTwo from "./components/Optimization/ParentTwo";
import ParentThree from "./components/Incorrect Optimizations/ParentThree";
import ParentFour from "./components/Incorrect Optimizations/ParentFour";
import ContextParent from "./components/Context/ContextParent";
import { ChildA } from "./components/Context/ContextChildren";

function App() {
  return (
    <div className="App">
      <ContextParent>
        <ChildA />
      </ContextParent>
      {/* <ParentFour /> */}
      {/* <ParentThree /> */}
      {/* <ParentTwo /> */}
      {/* <GrandParent /> */}
      {/* <Parent /> */}
      {/* <ArrayUseState /> */}
      {/* <ObjectUseState /> */}
      {/* <UseState /> */}
      {/* <UseReducer /> */}
    </div>
  );
}

export default App;
