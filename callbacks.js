const fs = require('fs');

fs.readFile('./README.md', (err, fileContents) => {
    if (err) {
        console.error(err);
        return;
    }
    console.debug(fileContents.toString('utf8'));
});