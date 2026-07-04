export type CharacterId =
  | "jane"
  | "pip"
  | "finn"
  | "remy"
  | "blu"
  | "prof"
  | "luna"
  | "biscuit"
  | "all";

export const CHARACTERS: Record<
  CharacterId,
  { name: string; color: string; italic?: boolean }
> = {
  jane: { name: "Jane (Narrator)", color: "#E8E8E8", italic: true },
  pip: { name: "Pip", color: "#F2B155" },
  finn: { name: "Finn", color: "#E8591C" },
  remy: { name: "Remy", color: "#C97B3D" },
  blu: { name: "Blu", color: "#4FA8E0" },
  prof: { name: "Prof", color: "#8C7A5B" },
  luna: { name: "Luna", color: "#B9C7E0" },
  biscuit: { name: "Biscuit", color: "#E0B54F" },
  all: { name: "Everyone", color: "#FFFFFF" },
};
