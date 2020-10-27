const bodyParser = require('body-parser');
const app = require('express')();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  require('cors')({
    origin: 'http://localhost:4200',
    credentials: true,
  })
);

const route = {
  login: {
    code: 200,
    method: (data) => {
      return require('./routes').login(data);
    },
  },
  register: {
    code: 201,
    method: (data) => {
      return require('./routes').register(data);
    },
  },
  userSpecData: {
    code: 200,
    method: (data) => {
      return require('./routes').userSpecData(data);
    },
  },
  userData: {
    code: 200,
    method: (data) => {
      return require('./routes').userData(data);
    },
  },
  onlineUser: {
    code: 200,
    method: (data) => {
      return require('./routes').onlineUser(data);
    },
  },
  addMessage: {
    code: 201,
    method: (data) => {
      return require('./routes').addMessage(data);
    },
  },
};

app.post('/data', (req, res, next) => {
  res.status(route[req.body.reqType].code).json({
    data: route[req.body.reqType].method(req.body.data),
  });
});

app.post('/', (req, res, next) => {
  console.log(res.method);
});

// app.post('/getOnlineUser', (req, res, next) => {
//     data = _localStorage.getOnlineUser();
//     res.status(200).json({
//         data: data
//     });
// });

module.exports = app;
