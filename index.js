require('dotenv').config();

const Server = require("./models/server");

const AzurLaneDockApi = new Server();

AzurLaneDockApi.start();