const express = require('express');
const app = express();
const port = 3000;
const userRouter = require('./routes/userRouter');

app.use('/public', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs")
app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))