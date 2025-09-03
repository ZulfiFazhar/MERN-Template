# Server Application (Express + Mongoose)

This is the server-side of the application, built with Express.js and Mongoose. It follows the principles of Clean Architecture to ensure a separation of concerns and maintainability.

## Folder Structure

```plaintext
src/
├── controllers/    # Presentation layer (request handlers)
├── database/       # Database connection setup
├── models/         # Domain layer (data schemas)
├── repositories/   # Infrastructure layer (data access)
├── routes/         # API endpoint definitions
└── services/       # Application layer (business logic)
```

### `models` (Domain Layer)

This directory contains the Mongoose schemas and interfaces that define the core data structures of the application, such as the `User` model. This is the heart of the server's business logic.

### `services` (Application Layer)

This layer holds the application-specific business logic. Each service encapsulates a set of use cases related to a specific domain entity (e.g., `UserService` handles the logic for creating, reading, updating, and deleting users).

### `repositories` (Infrastructure Layer)

This layer is responsible for all communication with the database. It implements the data access logic using Mongoose models, effectively abstracting the database from the rest of the application.

### `controllers` (Presentation Layer)

Controllers handle the incoming HTTP requests from the client. They parse the request, call the appropriate methods in the `services` layer, and then formulate and send the HTTP response.

### `routes`

This directory defines the API endpoints for the application. Each route maps a specific URL and HTTP method to a handler function in the `controllers`.

### `database`

This directory contains the logic for establishing and managing the connection to the MongoDB database.

## API Endpoints

- `GET /users`: Get all users.
- `GET /users/:id`: Get a user by ID.
- `POST /users`: Create a new user.
- `PUT /users/:id`: Update a user.
- `DELETE /users/:id`: Delete a user.

## Getting Started

1. **Create a `.env` file:**

   Create a `.env` file in the `apps/server` directory by copying the `.env.example` file. Update the `MONGODB_URI` with your MongoDB connection string.

2. **Install dependencies:**

   ```bash
   bun install
   ```

3. **Run the development server:**

   ```bash
   bun run dev
   ```

The server will be running on `http://localhost:3000`.

## File and Folder Naming Conventions

- **Folders:** Use singular nouns for top-level directories (e.g., `controllers`, `services`). For more specific sub-folders, use `kebab-case`.
- **Files:** Use `kebab-case` with a suffix indicating the layer or purpose (e.g., `user.controller.ts`, `user.model.ts`, `user.routes.ts`).
