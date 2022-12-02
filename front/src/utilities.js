import userData from './data/users.json'
import axios from 'axios'

const host = "https://127.0.0.1:8000"


export function addUser(username, password, email){

    axios.post(`${host}/registerUser`, {username: username, password: password, email:email})
        .then(response => {
            if(response.status === 200){
                return true;
            }
            return false;
        });
}

export function checkUser(username, password){
    axios.post(`${host}/auth`, {username: username, password: password})
        .then(response => {
            let data = JSON.parse(response.data);
            if(data.isRegistred === true){
                return true;
            }
            return false
        });
}