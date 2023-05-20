/* eslint-disable no-undef */
const app = require('./app');
require('dotenv').config();

const { PORT, SECOND_PORT } = process.env || SECOND_PORT;

app.listen(PORT, () => console.log(`Servidor ${PORT} a todo vapor`));
