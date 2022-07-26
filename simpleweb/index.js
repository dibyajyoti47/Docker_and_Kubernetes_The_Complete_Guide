const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hi There 2');
});

app.listen(8080, () => {

});