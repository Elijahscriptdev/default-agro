import { Component, ErrorInfo } from 'react';



type Props = {
    children: React.ReactNode;
}

type State = { 
    hasError: boolean;
}



class ErrorBoundary extends Component<Props, State> {
    state: State = {
        hasError: false
    };

    static getDerivedStateFromError(_: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Sorry.. there was an error</h1>;
        }

        return this.props.children;
    }


}

export default ErrorBoundary;