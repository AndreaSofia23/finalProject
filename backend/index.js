const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
/* const jwt = require('express-jwt'); */
const cors = require('cors');


const User = require('./models/userModel');
const Funko = require('./models/funkoModel');
const userRouter = require('./routers/userRouter')(User);
const funkoRouter = require('./routers/funkoRouter')(Funko);

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/* app.use('/api/*', jwt(
    {secret: 'secretKey', algorithms: ['HS256']}).unless(
    {path: ['/api/logIn']}),
);
 */
mongoose.connect('mongodb://127.0.0.1:27017/APIweb');


app.use('/api', userRouter, funkoRouter);
app.listen(8080, ()=> {
  console.log('Server iniciado...');
});
