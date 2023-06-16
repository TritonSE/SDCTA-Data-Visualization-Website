import React from 'react'
import { Error404 } from '../components/404'

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { error: false }
  }

  static getDerivedStateFromError (error) {
    return { error: error }
  }

  render () {
    if (this.state.error) {
      return <Error404 />
    }

    return this.props.children
  }
}

export default ErrorBoundary
