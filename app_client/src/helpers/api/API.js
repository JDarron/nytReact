import axios from "axios";

const APIKEY = "WIATc5qX1AMNsHnHhnmQlzvN0P4KOchn";
const BASEURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${APIKEY}`;
// PARAM REQUIRMENTS 
const queryParam = "&q=";
const idParam = "&fq=_id:"

export default {
    
    searchKeyWord: query => {
        return axios.get(BASEURL + queryParam + query);
    },

    serchId: id => {
        let joinedIds = id.join('","');
        return axios.get(BASEURL + idParam + `("${joinedIds}")`);
    }

}; // END EXPORT
