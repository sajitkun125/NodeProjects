const fs = require('fs');
const book ={
    title: 'Intelligent investor',
    author: 'Benjamen Gram'
}

const bookJson= JSON.stringify(book);
fs.writeFileSync('1-json.json', bookJson);