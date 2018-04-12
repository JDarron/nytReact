import axios from "axios";

export default {
    
    scrapeArticle: url => {
        return axios.get(url);
    },

    runResultThroughCheerio: res => {
        
    }

}; // END EXPORT