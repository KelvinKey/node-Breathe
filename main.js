'use strict'


const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(8083, () => {
    console.log(`main listening at port 8083`)
});