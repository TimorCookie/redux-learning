export default function thunk({ getState, dispatch }) {
  return next => action => {
    if (typeof action === 'function') {
      console.log(action)
      return action(dispatch, getState);
    }
    return next(action)
  }
}