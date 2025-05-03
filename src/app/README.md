# app

Application setup: providers, routing, themes, and global configuration. Contains the root setup for the entire app.

## Project Folder Structure

```plaintext
src/
├── app/
│   ├── providers/
│   ├── router/
│   └── styles/
└── ...
```

## Example: App Provider
```tsx
// src/app/providers/ThemeProvider.tsx
import { ReactNode } from 'react';
export const ThemeProvider = ({ children }: { children: ReactNode }) => <div className="theme-light">{children}</div>;
```

## Example: App Router
```tsx
// src/app/router/AppRouter.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
```

