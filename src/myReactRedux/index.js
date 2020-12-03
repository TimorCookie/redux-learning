import React, { useLayoutEffect, useReducer } from 'react';
// import { useSelector } from 'react-redux';
import { bindActionCreators } from '../myRedux'

// * step1: 创建 Context 对象
const Context = React.createContext();
// * step2: 通过 Provider 传递 value
export function Provider({ store, children }) {
  return <Context.Provider value={store}>{children}</Context.Provider>
}
// * step3: 子组件消费 value
export const connect = (mapStateToProps = state => state, mapDispatchToProps) => WrapperedComponent => props => {
  const store = React.useContext(Context)
  const { getState, dispatch } = store
  const stateProps = mapStateToProps(getState())
  let dispatchProps = { dispatch }

  if (typeof mapDispatchToProps === 'function') {
    dispatchProps = mapDispatchToProps(dispatch)
  } else if (typeof mapDispatchToProps === 'object') {
    dispatchProps = bindActionCreators(mapDispatchToProps, dispatch)
  }
  // ! 订阅更新 （ state 一旦改变，啧执行订阅函数（更新组件））
  const [, forceUpdate] = useReducer(x => x + 1, 0)
  useLayoutEffect(() => {
    const unSubscribe = store.subscribe(() => {
      forceUpdate()
    })
    return () => {
      unSubscribe()
    }
  }, [store])
  return <WrapperedComponent {...props} {...stateProps} {...dispatchProps} />
}


// ! hook 实现原理
function useStore() {
  const store = React.useContext(Context)
  return store
}
export function useSelector(selector) {
  const store = useStore()
  const { getState } = store;
  const [, forceUpdate] = useReducer(x => x + 1, 0)
  useLayoutEffect(() => {
    const unSubscribe = store.subscribe(() => {
      forceUpdate()
    })
    return () => unSubscribe()
  }, [store])
  const selectedState = selector(getState())
  return selectedState
}
export function useDispatch() {
  const store = useStore();
  return store.dispatch;
}