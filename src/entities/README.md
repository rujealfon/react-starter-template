# entities

Business domain models and logic. Reusable across features and widgets. Example: user, product, order, etc.

## Project Folder Structure

```plaintext
src/
├── entities/
│   ├── user/
│   └── product/
└── ...
```

## Example: Entity Model
```ts
// src/entities/user/model.ts
export interface User {
  id: string;
  name: string;
  email: string;
}
```

## Example: Entity API (with error handling)
```ts
// src/entities/user/api.ts
import { httpGet } from '@/shared/api/httpClient';
import { User } from './model';

export async function fetchUser(id: string): Promise<User> {
  const user = await httpGet<User>(`/users/${id}`);
  if (!user) throw new Error('User not found');
  return user;
}
```

## Example: Entity Store (Zustand)
```ts
// src/entities/user/store.ts
import { create } from 'zustand';
import { User } from './model';

type UserState = {
  user: User | null;
  setUser: (user: User | null) => void;
};

export const useUserStore = create<UserState>(set => ({
  user: null,
  setUser: (user) => set({ user })
}));
```

---

## Advanced/Real-World Entity Testing

### Unit Test (with vitest)
```ts
// src/entities/user/api.spec.ts
import { describe, it, expect, vi } from 'vitest';
import * as api from './api';

global.fetch = vi.fn().mockResolvedValue({
  ok: true,
  json: async () => ({ id: '1', name: 'Test', email: 'test@example.com' }),
});

describe('fetchUser', () => {
  it('returns user data', async () => {
    const user = await api.fetchUser('1');
    expect(user.name).toBe('Test');
  });
});
```

### Mocking API for Entity Tests
```ts
// src/entities/user/__mocks__/api.ts
export const fetchUser = vi.fn().mockResolvedValue({ id: '1', name: 'Mock', email: 'mock@example.com' });
```

---

## Best Practices for Entities
- Keep entities pure and domain-focused.
- Use TypeScript types for all entity models and API responses.
- Encapsulate entity logic (validation, transformation) in this layer.
- Use Zustand or another state manager for entity state if needed.
- Mock APIs for isolated entity tests.

### Useful Libraries
- [Zustand](https://github.com/pmndrs/zustand)
- [Vitest](https://vitest.dev/)
- [msw (Mock Service Worker)](https://mswjs.io/)

