import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Optionally log errorInfo
    // console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold text-red-600 mb-2">Something went wrong{this.props.label ? ` in ${this.props.label}` : ''}.</h2>
          <p className="text-gray-600 text-sm">{String(this.state.error)}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;


