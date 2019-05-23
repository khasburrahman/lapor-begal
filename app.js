const express = require('express');
const session = require('express-session')
const app = express();
const port = 3000;

const sessionConfig = require('./config/session')
const addStdContext = require('./middlewares/addStdContext')
const userRouter = require('./routes/userRouter');

app.set("view engine", "ejs")
app.use(addStdContext)
app.use(session(sessionConfig))
app.use('/users', userRouter);
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))