import axios from "axios";

export function getAPI() {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  });

  return api;
}
