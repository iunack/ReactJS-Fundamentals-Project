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
  }

};

export default gameService;
