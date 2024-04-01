import React, { useEffect, useState } from 'react'

interface Props {
  initialCount: number
}

const Counter: React.FC<Props> = props => {
  const [count, setCount] = useState(props.initialCount)
  console.log(count)

  useEffect(() => {
    ;(() => {
      console.log('do something')
    })()
  }, [])

  return (
    <main>
      <p className='text'>{count}</p>
      <div>
        <span onClick={() => setCount(count + 1)}>++</span>
        <button onClick={() => setCount(count - 1)}>--</button>
      </div>
      <p children="Text" />
      <div role="unknown" />
      <p>~</p>
      <p>〜</p>
    </main>
  )
}
export default Counter
