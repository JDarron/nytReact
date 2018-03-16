import axios from "axios";


/*  
    =====================================================================================
    TRIPLY TESTING API 
    ===================================================================================== 
*/


const APIKEY = "&api_key=mm0VlZmyUBOFM415HKtSZdiXhfB27a1ntlZU7ZT4"
    , BASEURL = `https://developer.nps.gov/api/v1`;


// Export an object with a "search" method that searches the Giphy API for the
// passed query

export default {
    search : (query) => {
        const PARKCODE = query.parkCode;
        return axios.get(BASEURL + PARKCODE + APIKEY);
    }
}; // END EXPORT



/*  
    =====================================================================================
    NYT REACT API 
    ===================================================================================== 
*/


// const APIKEY = "dde781c06452450886e74bef516a660f";
// const BASEURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${APIKEY}&q=`;


// // Export an object with a "search" method that searches the Giphy API for the
// // passed query

// export default {
//     search : function (query) {
//         return axios.get(BASEURL + query);
//     }
// };