# Client Application (React + Vite)

This is the client-side of the application, built with React, Vite, and TypeScript. It follows the principles of Clean Architecture to ensure a separation of concerns and maintainability.

## Folder Structure

```plaintext
src/
├── application/      # Application layer (use cases)
├── domain/           # Domain layer (models, repositories)
├── infrastructure/   # Infrastructure layer (API services)
└── presentation/     # Presentation layer (UI components, pages, hooks)
```

### `domain`

This is the core of the application. It contains the business models and repository interfaces.

- **`models/user.ts`**: Defines the `User` data structure.
- **`repositories/IUserRepository.ts`**: Defines the interface for the user repository, which dictates how user data should be accessed, regardless of the underlying data source.

### `application`

This layer contains the application-specific business logic.

- **`use-cases/userUseCases.ts`**: Contains the use cases related to users (e.g., getting all users, creating a user). These use cases orchestrate the flow of data between the domain and the infrastructure.

### `infrastructure`

This layer contains the implementation of the repository interfaces defined in the domain layer.

- **`api/userApi.ts`**: Implements the `IUserRepository` interface by making HTTP requests to the server's API using `axios`.

### `presentation`

This is the UI layer of the application.

- **`pages/UserPage.tsx`**: A page component that displays the user management UI.
- **`components/`**: Contains reusable React components, styled with `shadcn/ui`.
- **`hooks/useUser.ts`**: A custom hook that encapsulates the logic for fetching and managing user data, and interacts with the application layer (use cases).
- **`route/index.tsx`**: Defines the application's routes using `react-router-dom`.

## Getting Started

1. **Install dependencies:**

   ```bash
   bun install
   ```

2. **Run the development server:**

   ```bash
   bun run dev
   ```

The application will be available at `http://localhost:5173`.

## File and Folder Naming Conventions

- **Folders:** Use `kebab-case` (e.g., `use-cases`, `presentation-layer`).
- **Components:** Use `PascalCase` for component files (e.g., `UserPage.tsx`, `Button.tsx`).
- **Hooks:** Use the `use` prefix and `camelCase` (e.g., `useUser.ts`).
- **Other Files:** Use `kebab-case` for non-component files (e.g., `user.model.ts`, `vite.config.ts`).
