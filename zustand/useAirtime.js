import { create } from 'zustand';

const initialState = {
    user: null,
    error: false,
    status: "idle",
};

export const useAirtime = create((set) => ({
    ...initialState,
    setUser: (user) => set({ user }),
    setError: (error) => set({ error }),
    setStatus: (status) => set({ status }),
}))