export default function applyMiddleware (...middlewares) {
  return createStore => reducer => {
    const store = createStore(reducer)

    // 原始dispatch
    let dispatch = store.dispatch

    const midApi = {
      getState: store.getState,
      dispatch: (actions, ...args)=> dispatch(actions, ...args)
    }

    const middlewaresChain = middlewares.map(middleware =>middleware(midApi))
    // 加强dispatch 聚合之后的dispatch一旦执行，所有中间件也要按照顺序执行，还要修改状态（store.dispatch）
    dispatch = compose(...middlewaresChain)(store.dispatch);
    return {
      ...store,
      dispatch
    }
  }
}
function compose(...funcs) {
  if(funcs.length === 0) {
    return args => args
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  // 返回聚合函数
  return funcs.reduce((a,b)=>(args)=>a(b(args)))
}