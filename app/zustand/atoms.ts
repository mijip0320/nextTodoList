import { create } from "zustand";

type userState = {
  email: string;
  name: string;
};

interface userStore {
  user: userState;
  setUser: (user: userState) => void;
}

export const useUserState = create<userStore>()((set) => ({
  user: { email: "", name: "" },
  setUser: (user: userState) => {
    set(() => ({
      user: user,
    }));
  },
}));
