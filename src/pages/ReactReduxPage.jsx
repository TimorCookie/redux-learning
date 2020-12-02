// import React, { Component } from 'react'
// import { connect} from 'react-redux'

// const mapStateToProps = state => {
//   return {
//     num: state
//   }
// }

// const mapDispatchToProps = {
//   add: ()=> {
//     return {
//       type: 'ADD'
//     }
//   },
//   minus: ()=> {
//     return {
//       type: 'MINUS'
//     }
//   }
// }

// @connect(mapStateToProps, mapDispatchToProps)
// class ReactReduxPage extends Component {
//   render() {
//     const {num, add, minus} = this.props
//     return (
//       <div>
//         <h1>ReactReduxPage</h1>
//         <p>num:{num}</p>
//         <button onClick={add}>add</button>
//         <button onClick={minus}>minus</button>
//       </div>
//     )
//   }
// }

// export default ReactReduxPage


import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// const mapStateToProps = state => {
//   return {
//     num: state
//   }
// }

// const mapDispatchToProps = {
//   add: () => {
//     return {
//       type: 'ADD'
//     }
//   },
//   minus: () => {
//     return {
//       type: 'MINUS'
//     }
//   }
// }

@connect(
  state => {
    return {
      num: state
    }
  },
  dispatch => {
    let creators = {
      add: payload => {
        return {
          type: 'ADD',
          payload
        }
      },
      minus: () => {
        return {
          type: 'MINUS'
        }
      }
    }
    creators = bindActionCreators(creators, dispatch)
    return {
      dispatch,
      ...creators
    }
  }
)
class ReactReduxPage extends Component {

  render() {
    const { num, add, minus } = this.props
    return (
      <div>
        <h1>ReactReduxPage</h1>
        <p>num:{num}</p>
        <button onClick={add}>add</button>
        <button onClick={minus}>minus</button>
      </div>
    )
  }
}

export default ReactReduxPage