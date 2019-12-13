import axios from "axios";
import { get } from "http";
const baseApiUserUrl = "http://localhost:9999/api/user";

const userService = {
  async login(user) {
    return await axios.post(`${baseApiUserUrl}/login`, user, {
      withCredentials: true
    });
  },
  async register(user) {
    return await axios.post(`${baseApiUserUrl}/register`, user, {
      withCredentials: true
    });
  },
  async logout() {
    return await axios.post(`${baseApiUserUrl}/logout`);
  },
  async get(id) {
    return await axios.get(`${baseApiUserUrl}/${id}`);
  },
  async getAll() {
    return await axios(baseApiUserUrl);
  }
};

export default userService;
