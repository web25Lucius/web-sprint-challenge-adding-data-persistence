// build your server here and require it from index.js
const express = require("express")
// const projectsRouter = require('./project/router');
// const resourcesRouter = require('./resource/router');
// const tasksRouter = require('./task/router');

const server = express();


server.get('/',(req, res)=>{
 res.status(200).json({Message: 'Welcome to Sprint server.js'})
});
  



module.exports = server;