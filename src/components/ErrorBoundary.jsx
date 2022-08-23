import React, { Component } from 'react';
// import DraftIcon from "@mui/icons-material/";

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
        <main className='flex flex-col items-center' id="error-page-content">
          {/* <DraftIcon className="text-red-500" /> */}
          <span variant='danger' className=''>A Serious Error Occured. Please Contact Administrator</span>
        </main>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
