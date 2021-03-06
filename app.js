const express = require('express');
const session = require('express-session')
const flash = require('req-flash')
const app = express();
const port = 3000;

const sessionConfig = require('./config/session');
const userRouter = require('./routes/userRouter');
const reportRouter = require('./routes/reportRouter');
const locationRouter = require('./routes/locationRouter');
const homeController = require('./controllers/homeController');
const authMiddleware = require('./middlewares/authMiddleware')
const viewMiddleware = require('./middlewares/viewFunctionHelper')

app.use('/public', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))
app.use(session(sessionConfig))
app.use(flash({ locals: 'msg' }))

app.use(viewMiddleware)
app.use(authMiddleware)
app.get('/', homeController.show);
app.use('/users', userRouter);
app.use('/reports', reportRouter);
app.use('/locations', locationRouter);

app.listen(process.env.PORT || 5000, () => console.log(`Example app listening on port ${port}!`))