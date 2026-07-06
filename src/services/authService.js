import api from './api';

export const signup = async (payload) => {
  const { data } = await api.post("/signup", payload);
  return data;
};

export const login = async (payload) => {
  const { data } = await api.post("/login", payload);
  return data;
};
