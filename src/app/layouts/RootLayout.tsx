// RootLayout: Provides app-wide layout and error boundary
import { ReactNode } from 'react';

export function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header
        style={{
          padding: '1rem',
          background: '#f8f8f8',
          borderBottom: '1px solid #eee',
        }}
      >
        <h1>My App</h1>
      </header>
      <main style={{ minHeight: '80vh', padding: '2rem' }}>{children}</main>
      <footer
        style={{
          padding: '1rem',
          background: '#f8f8f8',
          borderTop: '1px solid #eee',
          textAlign: 'center',
        }}
      >
        &copy; {new Date().getFullYear()} My App
      </footer>
    </div>
  );
}

// ErrorBoundary for the app
export function RootErrorBoundary({ error }: { error: Error }) {
  return (
    <div style={{ color: 'red', padding: '2rem' }}>
      <h2>Something went wrong!</h2>
      <pre>{error.message}</pre>
    </div>
  );
}
