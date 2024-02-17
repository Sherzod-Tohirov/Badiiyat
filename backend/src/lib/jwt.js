const jwt = require("jsonwebtoken");
const secretKey =process.env.SECRET_KEY;

module.exports = {
    sign: payload => jwt.sign(payload, secretKey),
    verify: token => jwt.verify(token, secretKey)
};