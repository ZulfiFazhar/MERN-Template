# MERN (MongoDB + Express + React + NodeJS)

> Instead of using `npm`, I use `bun` for package management

This monorepo integrates a full-stack application with both a **frontend** and a **backend** in a single repository. The architecture is designed for efficient development, easy collaboration, and seamless integration between the client and server.

## Project Structure

```plaintext
monorepo/
├── apps/
│   ├── client/         # Frontend application (React + Vite + Tailwind CSS + ShadCN UI)
│   └── server/         # Backend application (Express + Mongoose + MongoDB)
├── package.json        # Root package.json (managed with Bun and workspaces)
└── README.md           # Project documentation
```

## Technologies Used

- **Frontend (apps/client):**

  - React (with TypeScript)
  - Vite (build tool and development server)
  - Tailwind CSS & ShadCN UI for styling

- **Backend (apps/server):**

  - Express for API development
  - MongoDB `recommended using mongodb atlas`
  - Mongoose as an ODM (Object Data Modeling) library for MongoDB
  - Nodemon/tsx for hot-reloading during development

- **Monorepo Management:**
  - Bun for package management and workspaces
  - Concurrently for running both frontend and backend simultaneously

## Prerequisites

- [Bun](https://bun.sh/) installed
- [Node js](https://nodejs.org/en/download) version 22
- [MongoDB Server](https://www.mongodb.com/try/download/community) and [MongoDB Compass](https://www.mongodb.com/try/download/compass) (Optional)

## Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install Dependencies in root directory

   ```bash
   bun install
   ```

3. Backend configuration

   - navigate to `apps/server` and create `.env` file

     ```bash
     cd apps/server
     cp .env.example .env
     ```

   - configure `.env` file

     ```ini
     MONGO_URI="mongodb://localhost:27017/<yourDB>"
     PORT=<yourBackEndPort>
     ```

   - Install dependencies

     ```bash
     bun install
     ```

   - Test MongoDB Connection

     ```bash
     bunx tsx index.ts
     ```

4. Frontend configuration

   - navigate to `apps/client` and install dependencies

     ```bash
     cd apps/server
     bun install
     ```

## Running the Application

Go to root directory, then run

```bash
bun run dev
```

This command will concurently run:

- The backend server from `apps/server`
- The frontend server from `apps/client`

You will get the following output like this

```bash
$ concurrently "cd apps/server && bun run dev" "cd apps/client && bun run dev"
[0] $ nodemon
[1] $ vite
[0] [nodemon] 3.1.9
[0] [nodemon] reading config ./nodemon.json
[0] [nodemon] to restart at any time, enter `rs`
[0] [nodemon] or send SIGHUP to 643592 to restart
[0] [nodemon] watching path(s): **/*
[0] [nodemon] watching extensions: ts
[0] [nodemon] starting `tsx server.ts`
[0] [nodemon] spawning
[0] [nodemon] child pid: 643621
[0] [nodemon] watching 9 files
[0] Server running on http://localhost:3000
[1]
[1]   VITE v6.1.1  ready in 364 ms
[1]
[1]   ➜  Local:   http://localhost:5173/
[1]   ➜  Network: use --host to expose
```

## Development Workflow

- **Backend**: changes in `apps/server` are monitored by nodemon/tsx, triggering an automatic restart
- **Frontend**: changes in `app/client` are automatically reload via vite
