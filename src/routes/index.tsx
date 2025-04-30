import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Welcome to TanStack Router!</h1>
    </div>
  );
}
