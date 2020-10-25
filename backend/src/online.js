const localStorage = new require('node-localstorage').LocalStorage('./data');

let onlineUserData = [];

const addOnlineUser = (data) => {
  if (data === JSON.parse(localStorage.getItem(data)).email) {
    onlineUserData.push({
      email: data,
      userName: JSON.parse(localStorage.getItem(data)).userName,
    });
    jsonObject = onlineUserData.map(JSON.stringify);
    uniqueSet = new Set(jsonObject);
    onlineUserData = Array.from(uniqueSet).map(JSON.parse);
  }
};

const removeOnlineUser = (data) => {
  console.log(data);
  onlineUserData.pop({
    email: data,
    userName: JSON.parse(localStorage.getItem(data)).userName,
  });
};

const online = () => {
  return onlineUserData;
};

module.exports = { addOnlineUser, removeOnlineUser, online };
