import { createRootRoute, Outlet, Link } from '@tanstack/react-router';
import reactLogo from '@/assets/react.svg';

export const Route = createRootRoute({
  component: RootLayout,
});

export function RootLayout() {
  return (
    <div>
      <div className="mb-4">
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <nav style={{ marginBottom: 24 }}>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Outlet />
    </div>
  );
}
