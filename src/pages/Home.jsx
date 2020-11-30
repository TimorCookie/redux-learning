import React, { Component } from 'react';
import store from '../store'
class HomePage extends Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }
  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unSubscribe()
    }
  }
  add = () => {
    store.dispatch({
      type: 'ADD'
    })
  }
  asyncMinus = () => {
    store.dispatch((dispatch, getState) => {
      setTimeout(() => {
        dispatch({ type: 'MINUS' })
      }, 1000)
    })
  }
  render() {
    return (
      <>
        <h2>当前 count 值为：{store.getState()}</h2>
        <button onClick={this.add}>add one</button>
        <button onClick={this.asyncMinus}>async minus one</button>
      </>
    )
  }
}


export default HomePage