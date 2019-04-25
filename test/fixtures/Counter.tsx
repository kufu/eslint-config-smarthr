import React, { useState } from 'react'

interface Props {
  initialCount: number
}

const Counter: React.FC<Props> = props => {
  const [count, setCount] = useState(props.initialCount)
  return (
    <main>
      <p>{count}</p>
      <div>
        <span onClick={() => setCount(count + 1)}>++</span>
        <button onClick={() => setCount(count - 1)}>--</button>
      </div>
    </main>
  )
}
export default Counter
