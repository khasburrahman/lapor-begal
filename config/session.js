require('dotenv').config({ silent: process.env.NODE_ENV === 'production' })

module.exports = {
  secret: process.env.SESSION_KEY,
  resave: false,
  saveUninitialized: true
}