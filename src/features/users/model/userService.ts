// Domain Service: UserService (aggregate root for user business logic)
// Encapsulates user-related business rules, orchestrates calls to API, store, etc.

import { usersQueryClient } from '../api/queryClient';
import * as endpoints from '../api/endpoints';

export class UserService {
  static async fetchUserList() {
    // Example: fetch from API, could add caching, transformation, etc.
    return endpoints.fetchUsers();
  }
  static async fetchUserById(userId: string) {
    return endpoints.fetchUserById(userId);
  }
  // Add more business logic methods as needed
}
