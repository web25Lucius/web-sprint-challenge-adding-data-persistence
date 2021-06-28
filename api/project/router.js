// build your `/api/projects` router here
const express = require('express')
const project  = express()
const router = express.Router();
const db = require('../data/dbConfig.js');
//const projectsModel = require('/api/project/model.js');  //check this


router.get('/api/', (req, res) => {
    db.select('*').from('projects')
    .from('projects')
    .then()
    .catch( err => console.log(err));

    // res.status(200).send('hello from the GET /users endpoint');
  });

  




// router.get('/api/projects/:id', async (req, res) => {
  // try {
  //     const project = await Projects.findById(req.params.id)
  //     if (!project) {
  //       res.status(404).json({ message: `Project: ${id} can not be found.` });
  //       } else {
  //         const foundProject = await Projects.findProjectById(req.params.id)
  //         res.status(200).json;
  //       }
  //     }
  //     catch (err){
  //       res.status(500).json({ 
  //         message: "Error retrieving the project.",
  //         err: err.message 
  //        });
  //     }
  // });



router.post('/api/projects/', (req, res) => {
    res.status(200).send('hello from the POST /users endpoint');
  });

  

module.exports = router

