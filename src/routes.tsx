import {
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router';
import { RootLayout } from './pages/home/RootLayout';
import { AboutPage } from './pages/about/AboutPage';
import { HomePage } from './pages/home/HomePage';
import { LayoutPage } from './pages/layout/LayoutPage';

// 1. Create the root route
const rootRoute = createRootRoute({
  component: RootLayout,
});

// 2. Define child routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/layout',
  component: LayoutPage,
});

// 3. Build the route tree
const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, layoutRoute]);

// 4. Create the router
export const router = createRouter({ routeTree });
