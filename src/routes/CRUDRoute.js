const express = require('express');
const Project = require('../models/userModel')

const {getUser, updateUser, allUsers, deleteUser} = require('../controllers/CRUDController')
const router = express.Router()


 //get any user by id  
          
 router.get('/user/:id', getUser )   


    // UPDATE by id

router.put('/update/user/:id', updateUser)   


   // Route to list all registered users 
router.get('/allusers', allUsers);   


      // delete a movie

router.delete('/delete/:id', deleteUser )    


module.exports = router;