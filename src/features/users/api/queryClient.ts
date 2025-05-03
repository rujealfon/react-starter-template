// TanStack Query client setup for the Users domain
// This acts as a domain service (aggregate root for user data fetching)

import { QueryClient } from '@tanstack/react-query';

export const usersQueryClient = new QueryClient();
// Add user-specific query middleware, defaults, etc. here as needed
