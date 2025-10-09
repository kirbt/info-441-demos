import {promises as fs} from 'fs'
import express from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', async (req, res) => {
  console.log(req.body)

  await fs.writeFile("data/usersData.json", 
    JSON.stringify(req.body))
  
  res.send("success")
})



export default router;
