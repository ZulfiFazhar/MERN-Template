export type User = {
  _id: string;
  name: string;
  email: string;
  username: string;
};

export type NewUser = Omit<User, "_id">;
