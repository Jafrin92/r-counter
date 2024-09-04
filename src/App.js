import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { multiplay, division } from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          aria-label="Multiplay value"
          onClick={() => dispatch(multiplay())}
        >
          5*
        </button>
        <span>{count}</span>
        <button
          aria-label="division value"
          onClick={() => dispatch(division())}
        >
          4/
        </button>
      </div>
    </div>
  );
}

export default App;
