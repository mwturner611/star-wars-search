import axios from "axios";
const URL = "https://swapi.dev/api/people/?search=";


// axios calls defined
export default {
    people: function(name) {
        return axios.get(URL+name)
    },
    film: function(url) {
        const secure = 's';
        let secureURL = [url.slice(0,4), secure, url.slice(4)].join('');
        return axios.get(secureURL)
    },
    starShip: function(url) {
        const secure = 's';
        let secureURL = [url.slice(0,4), secure, url.slice(4)].join('');
        return axios.get(secureURL)
    }

};
