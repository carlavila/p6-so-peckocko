const http = require('http'); // importer de package http de node
const app = require('./app'); // importer l'application


app.set('port', process.env.PORT || 3000); // sur quel porte l'application express va tourner

const server = http.createServer(app);

server.listen(process.env.PORT || 3000);

