import { useState } from 'react'
import '../../App.css'

function Counter() {
  const [count, setCount] = useState(0)
  
  console.log(count);

  return (
    <>
      <section id="center">
        <div>
          <h1>Get started</h1>
        </div>
        <button
          className="counter"
          onClick={function (){setCount(100)}}
        >
          Count is {count}
        </button>
      </section>
    </>
  )
}

export default Counter
