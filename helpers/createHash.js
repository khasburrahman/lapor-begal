const crypto = require('crypto')
require('dotenv').config()

module.exports = (string) => {
    return crypto.createHmac('sha256', process.env.SECRET_KEY).update(string).digest('hex')
}
