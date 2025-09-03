import { IUserRepository } from "@/domain/repositories/IUserRepository";
import { User, NewUser } from "@/domain/models/user";
import api from "@/infrastructure/api";

export class UserApi implements IUserRepository {
  async findAll(): Promise<User[]> {
    const response = await api.get("/users");
    return response.data.data;
  }

  async findById(id: string): Promise<User | null> {
    const response = await api.get(`/users/${id}`);
    return response.data.data;
  }

  async create(data: NewUser): Promise<User> {
    const response = await api.post("/users", data);
    return response.data.data;
  }

  async update(id: string, data: Partial<User>): Promise<User | null> {
    const response = await api.put(`/users/${id}`, data);
    return response.data.data;
  }

  async delete(id: string): Promise<void> {
    await api.delete(`/users/${id}`);
  }
}

export const userApi = new UserApi();
