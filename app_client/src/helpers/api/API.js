import axios from "axios";

const APIKEY = "dde781c06452450886e74bef516a660f";
const BASEURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${APIKEY}`;
// PARAM REQUIRMENTS 
const keyWordParam = "&q=";
const idParam = "&fq=_id:"

export default {
    
    searchKeyWord: query => {
        return axios.get(BASEURL + keyWordParam + query);
    },

    serchId: id => {
        let joinedIds = id.join('","');
        return axios.get(BASEURL + idParam + `("${joinedIds}")`);
    }

}; // END EXPORT
