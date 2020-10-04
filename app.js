const express = require('express');
const router = require('./router/index');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/', router);

app.listen(port, () => console.log(`Express app listening on port ${port}!`))