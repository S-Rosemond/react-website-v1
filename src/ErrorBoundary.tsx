import React, { Component, ErrorInfo } from 'react';
import { Link } from 'react-router-dom';

interface Error {
  name: string;
  message: string;
  stack?: string;
}

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorInfo: null,
    error: null,
  };

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({ hasError: true, errorInfo: info, error });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>An error has occurred</h1>
          <p>
            <Link to='/'>Return Home</Link>
          </p>
          <p>
            <Link to='/errors'>View Detailed Error</Link>
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

//from medium article by Simon Holdorf, w/ modifications
// not part of the app but include as a template starter
// ref here for potential use
