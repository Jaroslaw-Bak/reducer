import { useReducer } from 'react';
import './App.css';

const reducer = (number, action) => {
  switch (action.type) {
    case 'increment':
      return number + 1
    case 'decrement':
      return number -1
    case 'reset':
      return 0
    default: return number
  }
}
function App() {
  const [number, dispatch] = useReducer(reducer, 0 )

  const increment = () => {
    dispatch({type: 'increment'})
  }

  const decrement = () => {
    dispatch({type: 'decrement'})
  }

  const reset = () => {
    dispatch({type: 'reset'})
  }
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{number} </span>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default App;
