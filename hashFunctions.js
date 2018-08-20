const bcrypt = require("bcryptjs");
const { promisify } = require("util");

const genSalt = promisify(bcrypt.genSalt);
const hash = promisify(bcrypt.hash);
const compare = promisify(bcrypt.compare);

module.exports.hashPass = password => {
    return genSalt().then(salt => {
        return hash(password, salt);
    });
};

module.exports.checkPass = (password, hash) => {
    return compare(password, hash);
};
