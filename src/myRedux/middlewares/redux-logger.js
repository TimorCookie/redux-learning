export default function logger({ getState, dispatch }) {
  return next => action => {
    console.log('-------------------------------')
    let prevState = getState()
    console.log('previous State', prevState);
    const returnValue = next(action);

    let nextState = getState();
    console.log("next state", nextState);
    console.log("-------------------------------");
    return returnValue;
  }
}