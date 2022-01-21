import { User } from "@prisma/client";

export type LoginUser = Pick<User, "email" | "password">;

export type UserWithToken = Omit<User, "password"> & { token: string };
