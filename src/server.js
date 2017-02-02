const express = require('express');
const path = require('path');
const PORT_DEFAULT = 3000;

const app = express();

// Connect clientside views
app.use(express.static(path.join(__dirname, '../client/')));

const port = PORT_DEFAULT;

// Using express() tell server to listen to 'port'
const server = app.listen(port, () => {
    console.log('listening to port:', port);
});

// Export server for other models to access
module.exports = server;
