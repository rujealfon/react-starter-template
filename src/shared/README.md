# shared

Reusable shared code: UI components, libraries, hooks, config, types, etc. Use for code that is not feature- or entity-specific.

## Project Folder Structure

```plaintext
src/
├── app/
├── entities/
├── features/
├── processes/
├── shared/
├── widgets/
├── pages/
├── main.tsx
└── ...
```

## Example: Shared UI Component
```tsx
// src/shared/ui/Button.tsx
export const Button = (props) => <button {...props} />;
```

## Example: Shared Hook
```ts
// src/shared/hooks/useToggle.ts
import { useState } from 'react';
export function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = () => setValue(v => !v);
  return [value, toggle] as const;
}
```

## Example: Shared Config
```ts
// src/shared/config/appConfig.ts
export const appConfig = { apiUrl: 'https://api.example.com' };
```

---

## Advanced/Real-World Code Samples

### API Integration (with fetch, error handling, and typing)
```ts
// src/shared/api/httpClient.ts
import { appConfig } from '../config/appConfig';

export class HttpError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'HttpError';
  }
}

export async function httpGet<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${appConfig.apiUrl}${endpoint}`, options);
  if (!res.ok) throw new HttpError(res.status, await res.text());
  return res.json();
}

// Usage:
// const data = await httpGet<MyType>('/users');
```

### State Management (with Zustand, selector, and persist)
```ts
// src/shared/store/themeStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeState = {
  theme: 'light' | 'dark';
  setTheme: (t: 'light' | 'dark') => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'light',
      setTheme: (theme) => set({ theme })
    }),
    { name: 'theme-storage' }
  )
);

// Usage:
// const theme = useThemeStore(s => s.theme);
```

### Unit Testing (with vitest and React Testing Library)
```ts
// src/shared/ui/Button.spec.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

### Testing Utilities & Mocking APIs
```ts
// src/shared/test/testUtils.ts
import { vi } from 'vitest';

export function mockFetch(data: unknown, ok = true) {
  global.fetch = vi.fn().mockResolvedValue({
    ok,
    json: async () => data,
    text: async () => JSON.stringify(data),
    status: ok ? 200 : 500,
  });
}

// Usage in test:
// import { mockFetch } from '@/shared/test/testUtils';
// mockFetch({ user: 'test' });
```

---

## Best Practices for Shared Code
- Use TypeScript for type safety and maintainability.
- Always handle errors and edge cases in shared utilities.
- Organize by domain (ui, hooks, config, api, store, test, types, etc.).
- Keep shared code pure and dependency-free where possible.
- Prefer composition over inheritance for reusability.

### Useful Libraries
- [Zustand](https://github.com/pmndrs/zustand) for state management
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Vitest](https://vitest.dev/)
- [msw (Mock Service Worker)](https://mswjs.io/) for advanced API mocking

