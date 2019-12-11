import axios from "axios";
const loginApiUrl = "http://localhost:9999/api/user/login";

const userService = {
  login(user) {
    return axios.post(loginApiUrl, user).then(res => {
      return res;
    });
  },
  register(body) {},
  logout() {},
  get() {},
  
};

export default userService;
