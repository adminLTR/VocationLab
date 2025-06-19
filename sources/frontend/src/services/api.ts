import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

interface ChatApiProps {
    user_message: string,
    user_id?: Number
}
export async function chatApi(data:ChatApiProps) {
    return await axios.post(API_URL+'chat/', data);
}