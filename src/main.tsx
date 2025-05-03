// Entry point for the app (Feature-Based, Domain-Driven)
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createRouter, RouterProvider } from '@tanstack/react-router';
// Import the route tree from the new location in the app layer
import { routeTree } from './app/router/routeTree.gen';

import './styles/global.css';

// Create the router using the domain-driven route tree
const router = createRouter({
  routeTree,
});

// Augment TanStack Router types for type safety
// This ensures correct type inference across the app
// (see: https://tanstack.com/router/v1/docs/guide/typescript)
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
