const express = require('express');
const app = express();

require('dotenv').config();
require('./config/database');

app.use(express.json());

app.use('/api/users', require('./routes/users'));

app.listen(3001, console.log('express listening from port 3001'));
