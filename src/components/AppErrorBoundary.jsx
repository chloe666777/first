import { ErrorBoundary } from 'react-error-boundary';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="error-boundary" role="alert">
      <AlertTriangle size={28} />
      <h1>页面暂时无法显示</h1>
      <p>{error?.message || '组件加载时发生异常，请刷新后重试。'}</p>
      <button className="btn btn--primary" type="button" onClick={resetErrorBoundary}>
        <RefreshCcw size={16} />
        重新加载
      </button>
    </div>
  );
}

export default function AppErrorBoundary({ children }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}
