import axios from "axios";

// axios calls defined
export default {
    people: function(name) {
        return axios.get('/api/people/'+ name)
    },
    film: function(url) {
        let nbr = url.slice(-2);
        
        return axios.get('/api/films/' +  nbr)
    },
    starShip: function(url) {
        let nbr = url.slice(-3);
  
        return axios.get('/api/starships/' +  nbr)
    },
    species: function(url) {
        let nbr = url[0].slice(29,31);
        return axios.get('/api/species/' +  nbr)
    }

};
