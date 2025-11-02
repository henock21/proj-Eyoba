const express = require('express')
const verifyToken = require('../middlewares/authMiddleware')
const router = express.Router();
const authorizeRole = require('../middlewares/roleMiddleware')

// only admin can access
  router.get('/admin', verifyToken,authorizeRole('admin'), (req, res) => {
    res.json({message: 'admin route'})
  })     

// only admin can access
  router.get('/manager',verifyToken, authorizeRole('admin','manager'),(req, res) => {
    res.json({message: 'manager route'})
  })

 
// all can access
  router.get('/user',verifyToken, authorizeRole('admin','manager','user'), (req, res) => {
    res.json({message: 'user route'})
  })
    

module.exports = router;  