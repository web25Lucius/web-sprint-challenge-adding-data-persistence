// start your server here
const express = require('express');

//needs models!
const resourcesRouter = require('/api/resource/router.js');
const projectsRouter = require('/api/project/router.js');
const tasksRouter = require('/api/task/router.js');

const server = express();
const router = express.Router();




// this file will only be used when the route begins with "/api" so we can remove that from the URLs, so "/api/users" becomes simply "/users"
router.use('/resources', resourcesRouter);
router.use('/projects', projectsRouter);
router.use('/tasks', tasksRouter);



server.use('/api', (req, res) => res.send('API up and running!'));
server.listen(8000, () => console.log('API running on port 8000'))

module.exports = router;