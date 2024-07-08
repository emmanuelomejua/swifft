import { create } from "zustand";

const initialState = {
    user: null,
    isAuthenticated: false,
    token: null
};

export const useAuth = create((set) => ({
    authentication: initialState,
    setUser: (user) => set((state) => ({
        authentication: {
            ...state.authentication,
            user: user
        }
    })),
    setToken: (token) => set((state) => ({
        authentication: {
            ...state.authentication,
            token
        }
    })),
    unsetToken: () => set((state) => ({
        authentication: {
            ...state.authentication,
            token: null
        }
    })),
    unsetUser: () => set((state) => ({
        authentication: {
            ...state.authentication,
            user: null
        }
    })),
}))