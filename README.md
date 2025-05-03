# React Starter Template

This project uses a clean, scalable architecture inspired by Feature-Sliced Design (FSD).

## Folder Structure

```plaintext
src/
├── app/         # App setup, providers, routing, themes
├── entities/    # Business domain models (user, product, etc.)
├── features/    # User-facing features (login, search, etc.)
├── processes/   # App-wide flows (auth, checkout, etc.)
├── shared/      # Reusable code (UI, hooks, config, etc.)
├── widgets/     # Complex UI blocks (Header, ProductList, etc.)
├── pages/       # Route entry points (HomePage, etc.)
├── main.tsx     # App entry point
└── ...          # Other files/folders (assets, lib, routes, etc.)
```

## Folder Purpose and Example Usage

### app/
Application setup, providers, routing, and themes.
```tsx
// src/app/providers/ThemeProvider.tsx
import { ReactNode } from 'react';
export const ThemeProvider = ({ children }: { children: ReactNode }) => <div className="theme-light">{children}</div>;
```

### entities/
Business domain models and logic.
```ts
// src/entities/user/model.ts
export interface User { id: string; name: string; }
```

### features/
User-facing features, each isolated with its own state, UI, and API.
```tsx
// src/features/login/LoginForm.tsx
export function LoginForm() { /* ... */ return <form>Login</form>; }
```

### processes/
App-wide business processes and flows that orchestrate multiple features/entities.
```ts
// src/processes/auth/initAuth.ts
import { getUser } from '@/entities/user/model';
export function initAuth() { /* ... */ }
```

### shared/
Reusable shared code: UI components, libraries, hooks, config, types, etc.
```tsx
// src/shared/ui/Button.tsx
export const Button = (props) => <button {...props} />;
```

### widgets/
Complex UI blocks composed from features/entities.
```tsx
// src/widgets/Header.tsx
import { User } from '@/entities/user/model';
export function Header({ user }: { user: User }) { return <header>Welcome, {user.name}!</header>; }
```

### pages/
Page-level components corresponding to routes.
```tsx
// src/pages/HomePage.tsx
export default function HomePage() { return <div>Home</div>; }
```

---

For more on FSD, see: https://feature-sliced.design/
