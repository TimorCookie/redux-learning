import React, { useState, useMemo, useCallback, PureComponent } from 'react'
export default function UseCallbackPage() {
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
  const addClick = useCallback(() => {
    let sum = 0
    for (let i = 0; i < count * 100; i++) {
      sum += i
    }
    return sum
  }, [count])
  return (

    <div>
      <h3>UseCallbackPage</h3>
      <p>count: {count}</p>
      <p>value: {value}</p>
      <p>expensive: {expensive}</p>
      <button onClick={() => setcount(count + 1)}>add</button>
      <input value={value} onChange={(event) => setvalue(event.target.value)} />
      <Child addClick={addClick} />
    </div>
  )
}

class Child extends PureComponent {
  render() {
    console.log("child render");
    const { addClick } = this.props; 
    return (
      <div>
        <h3>Child</h3>
        <button onClick={() => console.log(addClick())}>add</button>
      </div>
    );
  }
}