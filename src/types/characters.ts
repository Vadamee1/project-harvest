import { DateValue } from "@nextui-org/react";

export type CharacterType = {
  id: string;
  name: string;
  image: string;
  faction: string;
  profile: string;
  className?: string;
};

export type CreateCharacterType = {
  name: string;
  faction: string;
  profile: string;
  userId: string;
};

export type CharacterDetailType = {
  id: number;
  name: string;
  faction: string;
  age: string;
  height: string | null;
  weight: string | null;
  position: string | null;
  race: string | null;
  history: string | null;
  birthday: Date | null;
  image: string | null;
  profile: string;
  user: {
    nickname: string;
    id: string;
  };
};

export type CharacterUpdateType = {
  id: number;
  name: string;
  faction: string;
  age: string;
  height: string;
  weight: string;
  position: string;
  race: string;
  history: string;
  birthday: Date | null | undefined;
  profile: string;
};
