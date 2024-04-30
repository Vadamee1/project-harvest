export type RedirectButtonsType = {
  label: string;
  color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  variant:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost";
  href: string;
};
