import React, { useState, useMemo } from 'react';

export default function UseMemoPage(props) {
  const [count, setcount] = useState(0);
  const [value, setvalue] = useState('');
  const expensive = useMemo(() => {
    console.log('computed')
    let sum = 0
    for (let i = 0; i < count; i++) {
      sum += i
    }
    return sum
  }, [count])
  return (

    <div>
      <h3>UseMemoPage</h3>
      <p>count: {count}</p>
      <p>value: {value}</p>
      <p>expensive: {expensive}</p>
      <button onClick={() => setcount(count + 1)}>add</button>
      <input value={value} onChange={(event) => setvalue(event.target.value)} />
    </div>
  )
}