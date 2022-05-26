import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Uncaught Error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='text-center'>
          <div variant='danger'>A Serious Error Occured. Please Contact Administrator</div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
