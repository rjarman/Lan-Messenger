const http = require('http');
const app = require('./src/app');
const _localStorage = require('./models/localStorage');


const port = process.env.port || 3000;

app.set('port', port);

const server = http.createServer(app);
const soc_io = require('socket.io');
const io = soc_io(server);

let regStatus;
let logStatus;

io.on('connection', (socket) => {
    console.log("a user is connected!");
    socket.on('connected person', (data) => {
        if (data !== '') {
            _localStorage.setOnlineUser(data);
        }
    });
    socket.on('disconnected person', (data) => {
        _localStorage.removeOnline(data);
    });
    socket.on('disconnect', () => {
        console.log("a user is disconnected!");
    });
});

server.listen(port);