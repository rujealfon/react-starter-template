// API functions for the Users domain

/**
 * Fetch all users
 */
export async function fetchUsers() {
  // Replace with your real API endpoint
  const res = await fetch('/api/users');
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
}

/**
 * Fetch a user by ID
 */
export async function fetchUserById(userId: string) {
  // Replace with your real API endpoint
  const res = await fetch(`/api/users/${userId}`);
  if (!res.ok) throw new Error('Failed to fetch user');
  return res.json();
}
