const fs = require('fs');
const path = require('path');

module.exports.books = fs.readFileSync(path.join(__dirname, 'books.gql'), 'utf8');
