const http = require('http');
const app = require('./src/app');
const port = process.env.port || 3000;

app.set('port', port);
const server = http.createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('a user is connected!');
  socket.on('connected person', (data) => {
    if (data !== '') {
      require('./src/online').addOnlineUser(data);
    }
  });
  socket.on('disconnected person', (data) => {
    require('./src/online').removeOnlineUser(data);
  });
  socket.on('disconnect', () => {
    console.log('a user is disconnected!');
  });
});

server.listen(port);
