import axios from "axios";
// API ROUTE
const ROUTE = "/api/article"

export default {

    /**
     * CREATE ARTICLE
     * @param {*} article
     */
    create(article) {
        return axios.post(ROUTE, {articleId: article});
    },

    /**
     * READ ARTICLE
     * @param {Number} id 
     */
    getOne(id) {
        return axios.get(`${ROUTE}/${id}`)
    },
    
    /**
     * READ ALL ARTICLES
     */
    getAll() {
        return axios.get(ROUTE)
    },

    /**
     * UPDATE ARTICLE
     * @param {*} id
     * @param {*} article
     */
    update(id, article) {
        return axios.put(`${ROUTE}/${id}`, article);
    },
    
    /**
     * DELETE ARTICLE
     * @param {*} id
     */
    delete(id) {
        return axios.delete(`${ROUTE}/${id}`);
    }

}; // END EXPORT