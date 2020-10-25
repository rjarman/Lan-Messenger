// import { LocalStorage } from "node-localstorage";

const localStorage = new require('node-localstorage').LocalStorage('./data');
// localStorage = new LocalStorage('./scratch');

let onlineUserData = [];

var storageData = {
    registerData: (data) => {
        return registerData(data);
    },
    loginData: (data) => {
        return loginData(data);
    },
    setOnlineUser: (data) => {
        setOnlineUser(data);
    },
    getOnlineUser: () => {
        return getOnlineUser();
    },
    removeOnline: (data) => {
        removeOnline(data);
    }
}

function registerData(data) {
    localStorage.setItem(data.email, JSON.stringify(data));
    console.log(localStorage.getItem("armanrafsunjany@gmail.com"));
    return true;
}
function loginData(data) {
    let _password = JSON.parse(localStorage.getItem(data.email));
    if (data.password === _password.password) {
        return true;
    }
}

function setOnlineUser(data) {
    if (data === JSON.parse(localStorage.getItem(data)).email) {
        onlineUserData.push({email: data, userName: JSON.parse(localStorage.getItem(data)).userName});
        jsonObject = onlineUserData.map(JSON.stringify);
        uniqueSet = new Set(jsonObject);
        onlineUserData = Array.from(uniqueSet).map(JSON.parse);
    }
}

function getOnlineUser() {
    return onlineUserData;
}

function removeOnline(data){
    console.log(data);
    onlineUserData.pop({email: data, userName: JSON.parse(localStorage.getItem(data)).userName});
}
module.exports = storageData;