import * as React from 'react';
import { useDynamicApp, RemoteSystem } from './useDynamicApp';
import { ErrorBoundary } from 'react-error-boundary';

const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}

export function DynamicApp(props: RemoteSystem) {
    const [App, { readyToUse, scriptStatus }] = useDynamicApp<RemoteSystem>(props);

    if (scriptStatus === 'failed') {
        return <ErrorFallback />;
    }

    return readyToUse ? (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <App {...props} />
        </ErrorBoundary>
    ) : null;
}
