import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DogImg from './components/DogImg';

function App() {
  return (
    <div className="app">
      <h1>Random Dog Game</h1>
      <DogImg />
    </div>
  );
}

export default App;