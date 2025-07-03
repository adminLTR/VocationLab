import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const chatApi = (payload: {
  message: string;
  history: { role: 'user' | 'assistant'; content: string }[];
}) => {
  return axios.post(API_URL + "chat/", payload);
};