export type User = {
  id: string;
  nickname: string;
  email: string;
  password: string;
  roleId: number;
  image: string | null | undefined;
  createdAt: Date;
  updatedAt: Date;
};

export type SessionUserType = {
  id: string;
  nickname: string;
  email: string;
  roleId: number;
  password?: string;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type CreateUserType = {
  nickname: string;
  email: string;
  password: string;
};
