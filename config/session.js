require('dotenv').config()

module.exports = {
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: true
}