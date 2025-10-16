import express from 'express';
import {promises as fs} from 'fs'
import usersRouter from './users.js';
var router = express.Router();


/* GET users listing. */
router.get('/getPterosaur', async function(req, res) {
  const data = await fs.readFile('data/pterosaur.json')
  let pterosaurInfo = JSON.parse(data)

  // filter our without images

  let filteredPterosaurInfo = pterosaurInfo
    .filter(onePterosaur => onePterosaur.img != "")

  res.json(filteredPterosaurInfo)
});

router.use('/users', usersRouter);

export default router;
