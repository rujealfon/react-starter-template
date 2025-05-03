# processes

App-wide business processes and flows that orchestrate multiple features/entities. Example: authentication flow, checkout flow.

## Project Folder Structure

```plaintext
src/
├── processes/
│   ├── auth/
│   └── checkout/
└── ...
```

## Example: Process Module (Async Flow)
```ts
// src/processes/auth/initAuth.ts
import { fetchUser } from '@/entities/user/api';
import { useUserStore } from '@/entities/user/store';

export async function initAuth(userId: string) {
  const user = await fetchUser(userId);
  useUserStore.getState().setUser(user);
  // ...additional process logic (e.g., redirect, analytics)
}
```

## Example: Process Component (Integration)
```tsx
// src/processes/auth/AuthGate.tsx
import { useUserStore } from '@/entities/user/store';
export function AuthGate({ children }: { children: React.ReactNode }) {
  const user = useUserStore(s => s.user);
  if (!user) return <div>Please log in</div>;
  return <>{children}</>;
}
```

---

## Advanced/Real-World Process Testing

### Integration Test (with vitest)
```ts
// src/processes/auth/initAuth.spec.ts
import { describe, it, expect, vi } from 'vitest';
import * as userApi from '@/entities/user/api';
import { useUserStore } from '@/entities/user/store';
import { initAuth } from './initAuth';

describe('initAuth', () => {
  it('sets user in store after fetching', async () => {
    vi.spyOn(userApi, 'fetchUser').mockResolvedValue({ id: '1', name: 'Test', email: 'test@example.com' });
    await initAuth('1');
    expect(useUserStore.getState().user?.name).toBe('Test');
  });
});
```

### Mocking API for Process Tests
```ts
// src/processes/auth/__mocks__/initAuth.ts
export const initAuth = vi.fn().mockResolvedValue(undefined);
```

---

## Best Practices for Processes
- Orchestrate cross-feature/entity flows here, not in UI.
- Keep process logic async and testable.
- Use dependency injection or mocking for APIs in tests.
- Use vitest for integration and flow tests.
- Avoid direct UI rendering—compose with components.

### Useful Libraries
- [Vitest](https://vitest.dev/)
- [msw (Mock Service Worker)](https://mswjs.io/)

