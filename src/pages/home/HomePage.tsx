import { Button } from '../../shared/ui/button';

export function HomePage() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Welcome to TanStack Router!</h1>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Button variant="default">Click me</Button>
      </div>
    </div>
  );
}
