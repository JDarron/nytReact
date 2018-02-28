import axios from "axios";
// API ROUTE
const ROUTE = "/api/employee"

// EXPORT THIS OBJECT
export default {
    /**
     * 
     * @param {Number} id 
     */
    getOne(id) {
        return axios.get(`${ROUTE}/${id}`)
    },
    /**
     * getAll Employees
     */
    getAll() {
        return axios.get(ROUTE)
    },
    /**
     * Create Employee
     * @param {*} employee
     */
    create(employee) {
        return axios.post(ROUTE, employee);
    },
    /**
     * update Employee
     * @param {*} id
     * @param {*} employee
     */
    update(id, employee) {
        return axios.put(`${ROUTE}/${id}`, employee);
    },
    /**
     * delete Employee
     * @param {*} id
     */
    delete(id) {
        return axios.delete(`${ROUTE}/${id}`);
    }

}; // END EXPORT OF OBJECT