import { Outlet } from '@tanstack/react-router';

export function LayoutPage() {
  return (
    <div>
      <h2>This is the /layout route!</h2>
      <Outlet />
    </div>
  );
}
