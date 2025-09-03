import { useState, useEffect, useCallback } from "react";
import { User, NewUser } from "@/domain/models/user";
import { userApi } from "@/infrastructure/api/userApi";
import * as userUseCases from "@/application/use-cases/userUseCases";

export const useUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const data = await userUseCases.getAllUsersUseCase(userApi);
      setUsers(data);
    } catch (e) {
      setError("Gagal mengambil data users: " + e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const addUser = async (data: NewUser) => {
    try {
      const newUser = await userUseCases.createUserUseCase(userApi, data);
      setUsers((prevUsers) => [...prevUsers, newUser]);
    } catch (e) {
      setError("Gagal menambah user: " + e);
    }
  };

  const updateUser = async (id: string, data: Partial<User>) => {
    try {
      const updatedUser = await userUseCases.updateUserUseCase(
        userApi,
        id,
        data
      );
      if (updatedUser) {
        setUsers((prevUsers) =>
          prevUsers.map((u) => (u._id === id ? { ...u, ...updatedUser } : u))
        );
      }
    } catch (e) {
      setError("Gagal mengupdate user: " + e);
    }
  };

  const removeUser = async (id: string) => {
    try {
      await userUseCases.deleteUserUseCase(userApi, id);
      setUsers((prevUsers) => prevUsers.filter((u) => u._id !== id));
    } catch (e) {
      setError("Gagal menghapus user: " + e);
    }
  };

  return { users, loading, error, fetchUsers, addUser, updateUser, removeUser };
};
