import axios from "axios";

export default {
  //Returns all events associated with the companyID
  fetchAll: function(companyID) {
    return axios.get(`/api/events/${companyID}`)
  },

  fetchByTitle: function(title) {
    return axios.get("/api/events/title")
  }
};