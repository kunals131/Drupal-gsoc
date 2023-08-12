import { create } from 'zustand';

interface AuthStoreState {
  usernamePass: string;
  isAuthenticated: boolean;
  user: any;
  setAuth: (usernamePass: string, user: any, isAuthenticated?: boolean) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthStoreState>((set) => ({
  usernamePass: '',
  isAuthenticated: false,
  user: {},
  setAuth: (usernamePass, user, isAuthenticated = true) =>
    set({ usernamePass, isAuthenticated, user }),
  clearAuth: () => set({ usernamePass: '', isAuthenticated: false, user: {} }),
}));
