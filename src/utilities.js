import userData from './data/users.json'

const fs = require('fs')


const loadFile = (path) => {

}


const handleSaveToPC = (jsonData,filename) => {
    const fileData = JSON.stringify(jsonData);
    const blob = new Blob([fileData], {type: "text/plain"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = `${filename}.json`;
    link.href = url;
    link.click();
}


export function addUser(username, password, email){
    userData.data.push({
        username: username,
        password: password,
        email: email
    });
    fs.writeFileSync('./data/users.json', JSON.stringify(userData.data));
}

export function checkUser(username, password){
    let isRegistred = false
    userData.data.map((user) => {
        console.log(user.username)
        if (user.username === username && user.password === password){
            isRegistred = true
        }
    })

    if(isRegistred){
        return true;
    }
    return false;

}