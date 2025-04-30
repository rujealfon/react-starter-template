import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/layout')({
  component: Layout,
});

function Layout() {
  return (
    <div>
      <h2>This is the /layout route!</h2>
      <Outlet />
    </div>
  );
}
