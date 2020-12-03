import React, { useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch, useSelector } from '../myReactRedux';

const ReactReduxHookPage = () => {
  console.log(useDispatch)
  const count = useSelector((count) => count)
  const dispatch = useDispatch()
  const add = useCallback(() => {
    dispatch({
      type: 'ADD'
    })
  }, [dispatch])
  const minus = useCallback(() => {
    dispatch({
      type: 'MINUS'
    })
  }, [])
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={add}>add</button>
      <button onClick={minus}>minus</button>
    </div>
  );
}

export default ReactReduxHookPage;
