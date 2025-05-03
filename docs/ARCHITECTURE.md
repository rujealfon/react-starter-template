# Project Architecture: Feature-Based & Domain-Driven

This project follows a hybrid of Feature-Sliced Design (FSD) and Domain-Driven Design (DDD):

- **features/**: Each domain (users, auth, etc.) contains its own routes, API, model (state/services), UI, and types. No cross-feature imports.
- **shared/**: Shared utilities, UI, hooks, schemas, and config for use across features.
- **app/**: Application-level setup (router, providers, global styles).
- **assets/**: Static assets (images, fonts, etc.).
- **styles/**: Global styles and font imports.

## Domain Service Example
See `features/users/model/userService.ts` for an aggregate root pattern that encapsulates user business logic and orchestrates API/store calls.

## Folder Conventions
- Only import from `shared/` or within your own feature.
- Do not import from other features directly.
- Place all business logic and state management in `model/` within each feature.

## Extending
- Add new features as new folders in `features/`.
- Compose complex UIs with widgets/processes if needed (optional FSD layer).

---

For questions or to enforce boundaries with lint/TypeScript, see `eslint-plugin-boundaries` or ask the team.
