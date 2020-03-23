import axios from "axios";

export default {
  fetchAll: function() {

    return axios.get(`/api/employees/${1}`);
  }
};