import { useState } from 'react'
import './App.css'
import WeatherAPP from './WeatherApp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <WeatherAPP/>
    </div>
  )
}

export default App
