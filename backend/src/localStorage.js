const localStorage = new require('node-localstorage').LocalStorage('./data');

const __from = (data) => {
  if (localStorage.getItem(data.email)) {
    const temp_data = JSON.parse(localStorage.getItem(data.email));
    temp_data.messages.push(data.message);
    localStorage.setItem(data.email, JSON.stringify(temp_data));
    return __to(temp_data.name, data)
  }
};

const __to = (name, data) => {
  if (localStorage.getItem(data.message.email)) {
    const temp_data = JSON.parse(localStorage.getItem(data.message.email));
    data.message = {
      type: 'reply',
      email: data.email,
      name: name,
      message: data.message.message,
      date: data.message.date,
      time: data.message.time,
    };
    temp_data.messages.push(data.message);
    localStorage.setItem(temp_data.email, JSON.stringify(temp_data));
    return {
      email: temp_data.email,
      message: data.message,
    };
  }
};

const addMessage = (data) => {
  return __from(data);
};

module.exports = { addMessage };
