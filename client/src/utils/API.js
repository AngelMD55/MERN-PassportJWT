import axios from "axios";

export default {
    createUser: function(userData){
        return axios.post("/auth/register", userData)
    },
    getCurrentUser: function(){
        return axios.get("/api/Users/currentUser", {
            headers: {
                Authorization: localStorage.getItem('jwtToken')
            }
        })
    }
}