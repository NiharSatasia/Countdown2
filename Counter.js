import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <h1>Counter Demo App</h1>
      <Counter />
      <Counter />
      <Counter />
      </div>
  );
}

function Counter({name}){
  const[value, setValue] = useState(0);
  return (
  <>
    <p>{value}</p>
    <button OnClick = {() => setValue(value + 1)}>Increment</button>
    <button OnClick = {() => setValue(value - 1)}>Decrement</button>

  </>
  )
}

export default App;
