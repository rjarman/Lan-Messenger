const localStorage = new require('node-localstorage').LocalStorage('./data');

const login = (data) => {
  const _password = JSON.parse(localStorage.getItem(data.email));
  if (_password && data.password === _password.password) {
    return 'ok';
  }
  return 'failed';
};

const register = (data) => {
  localStorage.setItem(data.email, JSON.stringify(data));
  if (localStorage.getItem(data.email)) {
    return 'ok';
  }
  return 'failed';
};

const onlineUser = () => {
  return require('./online').online();
}

module.exports = { login, register, onlineUser };
