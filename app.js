const express = require('express');
const app = express();
const port = 3000;
const userRouter = require('./routes/userRouter');

app.set("view engine", "ejs")
app.use('/users', userRouter);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))