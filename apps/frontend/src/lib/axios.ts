import Axios from "axios";

const URL_BASE = process.env.NEXT_PUBLIC_URL_BASE

export const axios = Axios.create({
  baseURL: URL_BASE,
  timeout: 5000,
  params: {
    delay: 1000,
  },
});
