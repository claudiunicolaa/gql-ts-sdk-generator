const fs = require('fs');
const path = require('path');

module.exports.addBook = fs.readFileSync(path.join(__dirname, 'addBook.gql'), 'utf8');
