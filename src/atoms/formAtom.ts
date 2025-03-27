import { atom, selector } from "recoil";

export const formState = atom<{
  userName: string;
  language: string;
  country: string;
  interested: number[];
}>({
  key: "formState",
  default: {
    userName: "",
    language: "",
    country: "",
    interested: [],
  },
});

export const validUserName = selector({
  key: "validUserName",
  get: ({ get }) => {
    const form = get(formState);
    const userName = form.userName;
    return userName.trim().length !== 0;
  },
});
export const validRegion = selector({
  key: "validRegion",
  get: ({ get }) => {
    const form = get(formState);
    const language = form.language;
    const country = form.country;

    return language.trim().length !== 0 && country.trim().length !== 0;
  },
});
export const validIntersted = selector({
  key: "validIntersted",
  get: ({ get }) => {
    const form = get(formState);
    const interested = form.interested;
    return interested.length >= 3;
  },
});
export const interstedRemain = selector({
  key: "interstedRemain",
  get: ({ get }) => {
    const form = get(formState);
    const interested = form.interested;
    return 3 - interested.length;
  },
});
