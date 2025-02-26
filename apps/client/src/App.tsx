import { useState } from "react";
import reactLogo from "@/assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@/components/ui/button";
import User from "@/components/user/user";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center space-y-6 p-4">
      <h1 className="text-3xl font-bold">
        Welcome to React + Vite + Shadcn-ui
      </h1>

      <div className="flex space-x-4">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="h-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="h-16" alt="React logo" />
        </a>
      </div>

      <Button onClick={() => setCount(count + 1)} className="px-6 py-3">
        Count is {count}
      </Button>

      <User />

      <p className="text-sm text-gray-500">
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
}

export default App;
