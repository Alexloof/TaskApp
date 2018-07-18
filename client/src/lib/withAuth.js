import React, { Component } from 'react'

export default WrappedComponent => {
  return class extends Component {
    state = {
      isAuth: false
    }

    componentDidMount() {
      const isAuth = localStorage.getItem('token')
      if (isAuth) {
        this.setState({ isAuth: true })
      } else {
        this.setState({ isAuth: false }, () => {
          this.props.history.replace('/login')
        })
      }
    }

    render() {
      if (!this.state.isAuth) {
        return null
      }
      return <WrappedComponent {...this.props} />
    }
  }
}
