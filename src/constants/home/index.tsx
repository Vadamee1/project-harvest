import { Faction } from "@/types/home";

export const UNSC: Faction = {
  color: "success",
  image: "/images/Artbook.jpg",
  name: "UNSC",
};

export const COVENANT: Faction = {
  color: "secondary",
  image: "/images/Autumn.jpg",
  name: "Covenant",
};

export const REDIRECT_BUTTONS = [
  {
    href: "/history",
    label: "Trama principal",
  },
  {
    href: "/firstSteps",
    label: "Primeros pasos",
  },
  {
    href: "characters",
    label: "Personajes",
  },
  {
    href: "today",
    label: "Actualidad",
  },
];
