const localStorage = new require('node-localstorage').LocalStorage('./data');

const login = (data) => {
  const _data = JSON.parse(localStorage.getItem(data.email));
  if (_data && data.password === _data.password) {
    return JSON.stringify({
      status: 'ok',
      email: data.email,
      name: JSON.parse(localStorage.getItem(data.email)).name,
    });
  }
  return 'failed';
};

const register = (data) => {
  const _data = {
    name: data.name,
    email: data.email,
    password: data.password,
    messages: [],
  };
  localStorage.setItem(data.email, JSON.stringify(_data));
  if (localStorage.getItem(data.email)) {
    return JSON.stringify({ status: 'ok', email: data.email, name: data.name });
  }
  return 'failed';
};

const userSpecData = (data) => {
  try {
    const _data = JSON.parse(localStorage.getItem(data.userEmail));
    const messages = () => {
      const foundMessage = [];
      _data.messages.forEach((_) => {
        if (_.email === data.messageEmail) {
          foundMessage.push(_);
        }
      });
      return foundMessage;
    };
    return JSON.stringify(messages());
  } catch (e) {
    return 'failed';
  }
};

const userData = (data) => {
  try {
    let listOfUser = [];
    const messages = JSON.parse(localStorage.getItem(data)).messages;
    messages.sort((a, b) => (a.time > b.time ? 1 : -1));
    messages.forEach((message) => {
      if (
        (message.type === 'send' || message.type === 'reply') &&
        message.email !== data
      ) {
        listOfUser.push({
          email: message.email,
          name: message.name,
        });
      }
    });
    jsonObject = listOfUser.map(JSON.stringify);
    uniqueSet = new Set(jsonObject);
    listOfUser = Array.from(uniqueSet).map(JSON.parse);
    listOfUser.forEach((user) => {
      for (let i = messages.length - 1; i >= 0; i--) {
        if (
          (messages[i].type === 'send' || messages[i].type === 'reply') &&
          messages[i].email === user.email
        ) {
          user.message = messages[i].message;
          user.time = messages[i].time;
          break;
        }
      }
    });
    return JSON.stringify(listOfUser);
  } catch (e) {
    return 'failed';
  }
};

const onlineUser = (data) => {
  return require('./online').online(data);
};

const addMessage = (data) => {
  console.log(data);
};

module.exports = {
  login,
  register,
  userSpecData,
  userData,
  onlineUser,
  addMessage,
};
