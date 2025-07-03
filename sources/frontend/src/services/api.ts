import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const chatApi = (payload: {
  message: string;
  history: { role: 'user' | 'assistant'; content: string }[];
}) => {
  console.log(`Enviando ${JSON.stringify(payload)} a ${API_URL + "chat/"}`)
  return axios.post(API_URL + "chat/", payload);
};
