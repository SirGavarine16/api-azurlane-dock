const path = require('path');
const http = require('http');
const express = require('express');
const cors = require('cors');
const { AzurAPI } = require('@azurapi/azurapi');

const rootDir = require('./../utils/path');
const shipgirlsRouter = require('./../routes/shipgirls');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3001;

        this.server = http.createServer(this.app);
    }

    initializeMiddlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static(path.resolve(rootDir, 'public')));
    
        this.app.use('/api/shipgirls', shipgirlsRouter);
    }

    start() {
        this.initializeMiddlewares();

        this.server.listen(this.port, () => {
            console.log(`Server running on Port:${this.port}`);
        });
    }
}

module.exports = Server;