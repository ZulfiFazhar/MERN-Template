import type { User as PrismaUser } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class UserModel {
  static async createUser(name: string, email: string): Promise<PrismaUser> {
    return await prisma.user.create({
      data: { name, email },
    });
  }

  static async getUsers(): Promise<PrismaUser[]> {
    return await prisma.user.findMany();
  }
}
