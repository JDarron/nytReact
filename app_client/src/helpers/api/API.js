import axios from "axios";

const APIKEY = "dde781c06452450886e74bef516a660f";
const BASEURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${APIKEY}&q=`;


// Export an object with a "search" method that searches the Giphy API for the
// passed query

export default {
    search : function (query) {
        return axios.get(BASEURL + query);
    }
};