export default function createStore(reducer,enhancer) {
  // 加强中间件的使用
  if(enhancer) {
    return enhancer(createStore)(reducer)
  }
  let currentState;
  let currentListeners = []
  function getState() {
    return currentState;
  }
  function dispatch(action) {
    currentState = reducer(currentState, action)
    currentListeners.forEach(listener => listener())
  }
  function subscribe(listener) {
    currentListeners.push(listener)
    return () => {
      // 取消订阅
      const index = currentListeners.indexOf(listener)
      currentListeners.splice(index, 1)
    }
  }
  dispatch({type: '提莫队长正在待命！'})
  return {
    getState,
    dispatch,
    subscribe
  }
}