const express = require('express');
const session = require('express-session')
const flash = require('req-flash')
const app = express();
const port = 3000;

const sessionConfig = require('./config/session')
const userRouter = require('./routes/userRouter');

app.set("view engine", "ejs")
app.use(session(sessionConfig))
app.use(flash({ locals: 'msg' }))

app.use('/users', userRouter);
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))