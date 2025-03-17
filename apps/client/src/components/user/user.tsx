import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import api from "@/api/api";

export default function User() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  interface User {
    name: string;
    email: string;
  }

  const [users, setUsers] = useState<User[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await api.post("/add-user", { name, email });
      console.log("User created:", res.data);
      setName("");
      setEmail("");
      alert("User created successfully");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const handleGetUsers = async () => {
    try {
      const res = await api.get("/users");
      setUsers(res.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="w-48 space-y-2">
      <form onSubmit={handleSubmit} className="space-y-2">
        <Input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button type="submit" className="w-full hover:cursor-pointer">
          Test send data to DB
        </Button>
      </form>
      <Button onClick={handleGetUsers} className="w-full hover:cursor-pointer">
        Get Users
      </Button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
