const Project = require('../models/userModel')

const getUser = async(req, res) => {
    try {
      const {id} = req.params
      const auser = await Project.findById(id)
      res.status(200).json(auser);
    } catch (error) {
      res.status(500).json({message: error.message})
    }
 }

const updateUser = async(req,res) => {
try {
  const {id} = req.params;
  const user = await Project.findByIdAndUpdate(id, req.body)
       // we cant find user  
  if (!user) {
      return res.status(400).json({message: `no user with this id ${id}` })
    }
     const updatedUser = await Project.findById(id);
      res.status(200).json(updatedUser); 
    }
   catch (error) {
      res.status(500).json({message: error.message})
    } 
}

const allUsers = async (req, res) => {
  try {
    const users = await Project.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const deleteUser = async(req,res) => {
     try {
       const {id} = req.params;
       const user = await Project.findByIdAndDelete(id)
       if (!user) {
         res.status(400).json({message: `invalid ID ${id}`})
       }
       res.status(200).json(user);
     } catch (error) {
      res.status(500).json({message: error.message});
     }
}



 module.exports = {
    getUser, 
    updateUser,
    allUsers, 
    deleteUser };

