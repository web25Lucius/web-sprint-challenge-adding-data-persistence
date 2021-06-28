// build your `/api/resources` router here




//Resources
router.get('/api/resources', (req, res) => {
    res.status(200).send('hello from the GET /users endpoint');
  });
  
router.get('/api/resources/:id', (req, res) => {
    res.status(200).send('hello from the GET /users/:id endpoint');
  });

router.post('/api/resources', (req, res) => {
    res.status(200).send('hello from the POST /users endpoint');
  });
  