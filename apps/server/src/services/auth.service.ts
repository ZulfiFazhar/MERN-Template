import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../lib/auth";
import { Request } from "express";

export class AuthService {
  public async register(name: string, email: string, password: string) {
    const user = await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
    });
    return user;
  }

  public async login(email: string, password: string) {
    const user = await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
    return user;
  }

  public async logout(headers: Request["headers"]) {
    await auth.api.signOut({
      headers: fromNodeHeaders(headers),
    });
  }

  public async getMySession(headers: Request["headers"]) {
    const session = await auth.api.getSession({
      headers: fromNodeHeaders(headers),
    });
    return session;
  }
}
