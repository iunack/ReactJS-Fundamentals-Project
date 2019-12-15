import axios from "axios";
const baseApiGameUrl = "http://localhost:9999/api/game";

const gameService = {
  create(game) {
    return axios.post(`${baseApiGameUrl}/create`, game, {
      withCredentials: true
    });
  },

  all() {
    return axios.get(baseApiGameUrl);
  },

  get(id) {
    return axios.get(`${baseApiGameUrl}/${id}`);
  },

  delete(id) {
    return axios.delete(`${baseApiGameUrl}/${id}`, { withCredentials: true });
  },

  purchase(id, uId) {
    return axios.put(
      `${baseApiGameUrl}/purchase/${id}`,
      { userId: uId },
      {
        withCredentials: true
      }
    );
  }
};

export default gameService;
