import { create } from 'zustand';
import { auth } from '../utils/api';

const useAuthStore = create((set) => ({
  user: null,
  token: null,
  loading: false,
  error: null,

  setUser: (user) => set({ user }),
  setToken: (token) => {
    localStorage.setItem('token', token);
    set({ token });
  },

  register: async (userData) => {
    try {
      set({ loading: true, error: null });
      const { data } = await auth.register(userData);
      set({ user: data.user, token: data.token, loading: false });
      return data;
    } catch (error) {
      set({ error: error.response?.data?.message || 'Registration failed', loading: false });
      throw error;
    }
  },

  login: async (credentials) => {
    try {
      set({ loading: true, error: null });
      const { data } = await auth.login(credentials);
      set({ user: data.user, token: data.token, loading: false });
      return data;
    } catch (error) {
      set({ error: error.response?.data?.message || 'Login failed', loading: false });
      throw error;
    }
  },

  logout: async () => {
    try {
      await auth.logout();
      localStorage.removeItem('token');
      set({ user: null, token: null });
    } catch (error) {
      console.error('Logout failed:', error);
    }
  },
}));

export default useAuthStore;