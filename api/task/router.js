// build your `/api/tasks` router here
  



//Tasks
  router.get('/api/tasks', (req, res) => {
    res.status(200).send('hello from the GET /users endpoint');
  });
router.get('/api/tasks/:id', (req, res) => {
    res.status(200).send('hello from the GET /users/:id endpoint');
  });
router.post('/api/tasks/', (req, res) => {
    res.status(200).send('hello from the POST /users endpoint');
  });
