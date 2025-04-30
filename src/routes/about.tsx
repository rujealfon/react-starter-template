import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: About,
});

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is the about page using TanStack Router.</p>
    </div>
  );
}
