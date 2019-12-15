import axios from "axios";
const baseApiUserUrl = "http://localhost:9999/api/user";

const userService = {
  login(user) {
    return axios.post(`${baseApiUserUrl}/login`, user, {
      withCredentials: true
    });
  },

  register(user) {
    return axios.post(`${baseApiUserUrl}/register`, user, {
      withCredentials: true
    });
  },

  logout() {
    return axios.post(`${baseApiUserUrl}/logout`,{}, {
      withCredentials: true
    });
  },

  get(id) {
    return axios.get(`${baseApiUserUrl}/${id}`);
  },

  addMoney(id, amount) {
    console.log('in service');
    
    console.log(id);
    
    return axios.put(`${baseApiUserUrl}/${id}`, amount, {
      withCredentials: true
    });
  },

  auth() {
    return axios.get(`${baseApiUserUrl}/auth`, {withCredentials:true});
  },

  getAll() {
    return axios(baseApiUserUrl);
  }
};

export default userService;
