export type UserOptions = {
  id: string;
  nickname: string;
  image: string | null;
};

export type UserType = {
  id: string;
  nickname: string;
  email: string;
  roleId: number;
  image: string | null | undefined;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
};

export type UpdateUserImage = {
  id: string;
  image: string;
};
