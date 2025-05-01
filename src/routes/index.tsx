import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Welcome to TanStack Router!</h1>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Button variant="secondary">Click me</Button>
      </div>
    </div>
  );
}
