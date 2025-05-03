# features

User-facing features, each isolated with its own state, UI, and API. Example: login, search, cart, etc.

## Project Folder Structure

```plaintext
src/
├── features/
│   ├── login/
│   └── search/
└── ...
```

## Example: Feature Component
```tsx
// src/features/login/LoginForm.tsx
import { useState } from 'react';
import { login } from './api';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      setError(null);
    } catch (err) {
      setError((err as Error).message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Login</button>
      {error && <div role="alert">{error}</div>}
    </form>
  );
}
```

## Example: Feature Store (Zustand)
```ts
// src/features/login/store.ts
import { create } from 'zustand';

type LoginState = {
  isLoading: boolean;
  setLoading: (l: boolean) => void;
};

export const useLoginStore = create<LoginState>(set => ({
  isLoading: false,
  setLoading: (isLoading) => set({ isLoading })
}));
```

## Example: Feature API (with error handling)
```ts
// src/features/login/api.ts
import { httpGet } from '@/shared/api/httpClient';

export async function login(email: string, password: string) {
  // Replace with POST in real app
  const data = await httpGet<{ success: boolean }>(`/login?email=${email}&password=${password}`);
  if (!data.success) throw new Error('Login failed');
  return data;
}
```

---

## Advanced/Real-World Feature Testing

### Unit Test (with vitest & React Testing Library)
```ts
// src/features/login/LoginForm.spec.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { LoginForm } from './LoginForm';
import * as api from './api';

describe('LoginForm', () => {
  it('shows error on failed login', async () => {
    vi.spyOn(api, 'login').mockRejectedValueOnce(new Error('fail'));
    render(<LoginForm />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'test' } });
    fireEvent.click(screen.getByRole('button'));
    expect(await screen.findByRole('alert')).toHaveTextContent('fail');
  });
});
```

### Mocking API for Feature Tests
```ts
// src/features/login/__mocks__/api.ts
export const login = vi.fn().mockResolvedValue({ success: true });
```

---

## Best Practices for Features
- Keep feature logic isolated and testable.
- Use dependency injection or mocking for APIs in tests.
- Prefer colocated state and API logic per feature.
- Use TypeScript types for all feature data and props.
- Structure features for easy reuse and composition.

### Useful Libraries
- [Zustand](https://github.com/pmndrs/zustand)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Vitest](https://vitest.dev/)
- [msw (Mock Service Worker)](https://mswjs.io/)

