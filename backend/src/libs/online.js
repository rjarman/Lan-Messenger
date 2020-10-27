let onlineUserData = [];

const addOnlineUser = (data) => {
  onlineUserData.push({
    email: data.email,
    name: data.name,
  });
  jsonObject = onlineUserData.map(JSON.stringify);
  uniqueSet = new Set(jsonObject);
  onlineUserData = Array.from(uniqueSet).map(JSON.parse);
};

const removeOnlineUser = (data) => {
  let index = -1;
  for (let i = 0; i < onlineUserData.length; i++) {
    if (
      onlineUserData[i].email === data.email &&
      onlineUserData[i].name === data.name
    ) {
      index = i;
      break;
    }
  }
  if (index > -1) {
    onlineUserData.splice(index, 1);
  }
};

const online = () => {
  return onlineUserData;
};

module.exports = { addOnlineUser, removeOnlineUser, online };
