# widgets

Complex UI blocks composed from features/entities. For example: Header, Sidebar, ProductList, etc. Used to build pages by composing features and entities.

## Project Folder Structure

```plaintext
src/
├── widgets/
│   ├── Header.tsx
│   ├── ProductList.tsx
│   └── ...
```

## Example: Widget Composition
```tsx
// src/widgets/Header.tsx
import { User } from '@/entities/user/model';
import { Button } from '@/shared/ui/Button';

export function Header({ user }: { user: User }) {
  return (
    <header>
      <span>Welcome, {user.name}!</span>
      <Button>Logout</Button>
    </header>
  );
}
```

## Example: Stateful Widget
```tsx
// src/widgets/ProductList.tsx
import { useEffect } from 'react';
import { fetchProducts } from '@/entities/product/api';
import { useProductStore } from '@/entities/product/store';

export function ProductList() {
  const { products, setProducts } = useProductStore();
  useEffect(() => {
    fetchProducts().then(setProducts);
  }, [setProducts]);
  return (
    <ul>
      {products.map(p => <li key={p.id}>{p.name}</li>)}
    </ul>
  );
}
```

---

## Advanced/Real-World Widget Testing

### Unit Test (with vitest & React Testing Library)
```ts
// src/widgets/Header.spec.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Header } from './Header';

describe('Header', () => {
  it('greets the user', () => {
    render(<Header user={{ id: '1', name: 'Ada' }} />);
    expect(screen.getByText(/Ada/)).toBeInTheDocument();
  });
});
```

### Mocking Child Components/APIs for Widget Tests
```ts
// src/widgets/__mocks__/ProductList.tsx
export const ProductList = () => <ul><li>Mock Product</li></ul>;
```

---

## Best Practices for Widgets
- Compose widgets from features and entities, not vice versa.
- Keep widgets reusable and presentation-focused.
- Use prop drilling or context for data, avoid direct API calls where possible.
- Mock child components/APIs for isolated widget tests.
- Use TypeScript for all widget props and state.

### Useful Libraries
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Vitest](https://vitest.dev/)

