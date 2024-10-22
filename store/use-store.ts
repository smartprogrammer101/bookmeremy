import { create } from "zustand";


type AppStore = {
  user: null
}

export const useAppStore = create<AppStore>((set) => ({
  user: null,
  setUser: (user: null) => set(() => ({ user }))
}));