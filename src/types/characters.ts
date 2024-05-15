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
