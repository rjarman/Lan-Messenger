const http = require('http');
const app = require('./libs/app');
const port = process.env.port || 3000;
const SocketServer = require('ws').Server;

app.set('port', port);
const server = http.createServer(app);
const io = new SocketServer({ server: server });

const eventList = {
  connected_person: (data) => {
    require('./libs/online').addOnlineUser(data);
    console.log(`${data.email} is connected!`);
  },
  disconnected_person: (data) => {
    require('./libs/online').removeOnlineUser(data);
    console.log(`${data.email} is disconnected!`);
  },
  message: (data) => {
    return require('./libs/localStorage').addMessage(data);
  },
};

const socketList = new Set();

io.on('connection', (socket) => {
  socket.onmessage = (event) => {
    const type = JSON.parse(event.data).type;
    const data = JSON.parse(event.data).data;
    const reply = eventList[type](data);
    if (type === 'message') {
      socketList.forEach((_) => {
        if (_.email === JSON.parse(event.data).data.message.email) {
          _.soc.send(JSON.stringify(reply));
        }
      });
    }
    if (type === 'connected_person') {
      const user_details = JSON.parse(event.data).data;
      socketList.add({
        email: user_details.email,
        name: user_details.name,
        soc: socket,
      });

      setInterval(() => {
        socket.send(
          JSON.stringify({
            online: require('./libs/online').online(),
          })
        );
      }, 1000);
    }
  };
});

server.listen(port);
