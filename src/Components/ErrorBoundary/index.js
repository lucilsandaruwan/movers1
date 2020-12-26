import React, {Component} from 'react'

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMesaage: '',
        errorInfo: ''
    }

    componentDidCatch = (error, info) => {
        console.log(error, 'error_msg')
        this.setState({hasError: true, errorMesaage: error.toString(), errorInfo: info.componentStack})
    }

    render() {
        const {hasError, errorMesaage, errorInfo} = this.state
    return hasError ? <div> <h1>Error: {errorMesaage}</h1> <p>{errorInfo}</p> </div>: this.props.children
    }
}

export default ErrorBoundary;