import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
interface RiasecCounter {
  r: number;
  i: number;
  a: number;
  s: number;
  e: number;
  c: number;
}

interface ChatApiProps {
    user_message: string,
    riasec_counter: RiasecCounter,
    user_id?: Number,
}
export async function chatApi(data:ChatApiProps) {
    return await axios.post(API_URL+'chat/', data);
}