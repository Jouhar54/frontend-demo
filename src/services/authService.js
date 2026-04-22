import api from './api';

export const authService = {

  signup: async (name, email, password) => {
    try {
      const response = await api.post('/signup', { name, email, password });
      return response.data;
    } catch (error) {
      console.error("Signup service error:", error);
      throw error;
    }
  },

  login: async (email, password) => {
    try {
      const response = await api.post('/login', { email, password });
      return response.data;
    } catch (error) {
      console.error("Login service error:", error);
      throw error;
    }
  },
};

