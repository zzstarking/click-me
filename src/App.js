import {useState} from 'react'
export default function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <button onClick={() =>
        setCounter(counter+1)
        }>  Guess What? </button>
      <h1>  Chicken butt: {counter}</h1>
    </div>
  )
}

