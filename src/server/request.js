import axios from "axios";

export const createServerAxios = (req) => axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    cookie: req.get('cookie') || ''
  }
})
