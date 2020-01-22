import axios from "axios";

const BASEURL = "/api/search/";

export default {
  search: function () {
      console.log('made it to api')
    return axios.get(BASEURL)
  },
  searchall: function (query) {
    return axios.get(BASEURL + query).then(({ data }) => data).catch(err => { throw err; });
  },
  create: function (hero) {
    return axios.post("/api/create", hero).then(({ data }) => data).catch(err => { throw err; });
  },
  favoriteHero: function (hero) {
    return axios.post("/api/favorite", hero).then(({ data }) => data).catch(err => { throw err; });
  },
  find: function () {
    return axios.get("/api/find").then(console.log("character saved to DB")).catch(err => { throw err; });  
  },
  findFavorites: function () {
    return axios.get("/api/findFavorites").then(({ data }) => data).catch(err => { throw err; });  
  },
  deleteCreation: function (heroname) {
    return axios.delete("/api/deleteCreation", heroname).then(console.log("Deleted from DB", heroname)) 
  }
};