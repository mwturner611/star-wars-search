import axios from "axios";
const URL = "http://swapi.dev/api/people/?search=";

// axios calls defined
export default {
    people: function(name) {
        return axios.get(URL+name)
    },
    film: function(url) {
        return axios.get(url)
    },
    starShip: function(url) {
        return axios.get(url)
    }

};
