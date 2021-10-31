import axios from 'axios';

/**
 * Main service for rest spring boot service.
 */

const USER_API_BASE_URL = "http://localhost:8080/test/service/getInfoUsersAll";
const USER_API_GETUSER_URL ="http://localhost:8080/test/service/getInfoUser/";
const USER_API_ADDUSER_URL ="http://localhost:8080/test/service/addUser";
const USER_API_GETINFO_URL = "http://localhost:8080/test/service/getInfo";



class UserService {

    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }

    createUser(employee){
        return axios.post(USER_API_ADDUSER_URL, employee);
    }

    getUserById(employeeId){
        return axios.get(USER_API_GETUSER_URL + '/' + employeeId);
    }

    getInfoLog(){
        return axios.get(USER_API_GETINFO_URL);
    }

   
}

export default new UserService()