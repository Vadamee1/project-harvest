import { Faction } from "@/types/home";

export const UNSC: Faction = {
  color: "success",
  image: "/images/Johnson.png",
  name: "UNSC",
  height: 396,
};

export const COVENANT: Faction = {
  color: "secondary",
  image: "/images/Ripa.png",
  name: "Covenant",
  height: 373,
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
  /* {
    href: "today",
    label: "Actualidad",
  }, */
];

export const typeWriterText = [
  "¿Estás",
  "listo",
  "para",
  "formar",
  "parte",
  "del",
  "único",
  "escuadrón",
  "que",
  "luchará",
  "por",
  "Harvest?",
];
export const homeText =
  "¿Estás listo para formar parte del único escuadrón disponible que luchará por Harvest?";
