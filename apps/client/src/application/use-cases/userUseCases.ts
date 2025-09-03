import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { User, NewUser } from "../../domain/models/user";

export const getAllUsersUseCase = (repo: IUserRepository) => {
  return repo.findAll();
};

export const getUserByIdUseCase = (repo: IUserRepository, _id: string) => {
  return repo.findById(_id);
};

export const createUserUseCase = (repo: IUserRepository, data: NewUser) => {
  if (!data.name || !data.email) {
    throw new Error("Nama dan Email tidak boleh kosong.");
  }
  return repo.create(data);
};

export const updateUserUseCase = (
  repo: IUserRepository,
  _id: string,
  data: Partial<User>
) => {
  return repo.update(_id, data);
};

export const deleteUserUseCase = (repo: IUserRepository, _id: string) => {
  return repo.delete(_id);
};
