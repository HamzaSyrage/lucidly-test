import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: { stage: 0, isOpen: false },
});
