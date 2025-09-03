# MERN-Template: Full-Stack Application with Clean Architecture

This is a comprehensive template for building full-stack applications using the MERN stack (MongoDB, Express, React, Node.js), organized as a monorepo and structured with Clean Architecture principles.

## Tech Stack

- **Monorepo Management:**

  - **Bun:** Used for package management, script running, and managing workspaces.

- **Backend (`apps/server`):**

  - **Node.js & Express:** For building the RESTful API.
  - **MongoDB & Mongoose:** As the database and Object Data Modeling (ODM) library.
  - **TypeScript:** For static typing.

- **Frontend (`apps/client`):**
  - **React:** For building the user interface.
  - **Vite:** As the build tool and development server.
  - **TypeScript:** For static typing.
  - **Tailwind CSS & shadcn/ui:** For modern and responsive styling.

## Monorepo Structure

```plaintext
monorepo/
├── apps/
│   ├── client/         # Frontend application (React + Vite + Tailwind CSS + ShadCN UI)
│   └── server/         # Backend application (Express + Mongoose + MongoDB)
├── package.json        # Root package.json (managed with Bun and workspaces)
└── README.md           # Project documentation
```

## Clean Architecture

This project implements Clean Architecture on both the client and server to create a system that is independent of frameworks, UI, and databases, making it more testable and maintainable.

### Server-Side Architecture (`apps/server`)

The server follows a layered architecture inspired by Clean Architecture:

- `src/models`: **Domain Layer**. Defines the Mongoose schemas and interfaces for the core entities (e.g., `User`). This is the core of the application.
- `src/services`: **Application Layer**. Contains the application-specific business logic and use cases.
- `src/repositories`: **Infrastructure Layer**. Implements the data access logic using Mongoose models, abstracting the database from the application layer.
- `src/controllers` & `src/routes`: **Presentation Layer**. Handles incoming HTTP requests, calls the appropriate services, and defines the API endpoints.

### Client-Side Architecture (`apps/client`)

The client also follows a similar layered architecture:

- `src/domain`: **Domain Layer**. Contains the core business logic and type definitions (e.g., `User` model and `IUserRepository` interface).
- `src/application`: **Application Layer**. Contains the application-specific use cases that orchestrate the flow of data.
- `src/infrastructure`: **Infrastructure Layer**. Implements the data access logic by calling the server's API.
- `src/presentation`: **Presentation Layer**. Contains the React components, pages, and hooks responsible for the UI.

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/)
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (or a MongoDB Atlas account)

### Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd MERN-Template
   ```

2. **Install dependencies:**

   Run the following command in the root directory. Bun will automatically install dependencies for all workspaces (`client` and `server`).

   ```bash
   bun install
   ```

3. **Configure the server:**

   - Navigate to the server directory: `cd apps/server`
   - Create a `.env` file by copying the example: `cp .env.example .env`
   - Update the `MONGODB_URI` in your new `.env` file with your MongoDB connection string.

## Running the Application

To run both the client and server concurrently, navigate back to the root directory and run:

```bash
bun run dev
```

This will start:

- The **backend server** on `http://localhost:3000` (or the port you specified in the `.env` file).
- The **frontend development server** on `http://localhost:5173`.

## Naming Conventions

To maintain consistency across the project, we follow these naming conventions:

-   **Folders:** Use `kebab-case` (e.g., `use-cases`, `presentation-layer`).
-   **Files:** Use `kebab-case` for most files, especially in the backend (e.g., `user.controller.ts`). For React components, use `PascalCase` (e.g., `UserPage.tsx`).

See the `README.md` file in each application (`apps/client` and `apps/server`) for more detailed conventions.

## License

This project is licensed under the MIT License. See the [LICENSE](License) file for details.
