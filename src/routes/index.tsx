import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Welcome to TanStack Router!</h1>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <a href="/about">Go to About</a>
      </div>
    </div>
  );
}
