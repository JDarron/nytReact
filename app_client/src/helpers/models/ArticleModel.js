import axios from "axios";
// API ROUTE
const ROUTE = "/api/article"

export default {
    /**
     * 
     * @param {Number} id 
     */
    getOne(id) {
        return axios.get(`${ROUTE}/${id}`)
    },
    /**
     * getAll articles
     */
    getAll() {
        return axios.get(ROUTE)
    },
    /**
     * Create article
     * @param {*} article
     */
    create(article) {
        return axios.post(ROUTE, article);
    },
    /**
     * update article
     * @param {*} id
     * @param {*} article
     */
    update(id, article) {
        return axios.put(`${ROUTE}/${id}`, article);
    },
    /**
     * delete article
     * @param {*} id
     */
    delete(id) {
        return axios.delete(`${ROUTE}/${id}`);
    }

}; // END EXPORT