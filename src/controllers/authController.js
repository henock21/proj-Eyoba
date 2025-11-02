 const Project = require('../models/userModel')
 const bcrypt = require('bcryptjs')
 const jwt = require('jsonwebtoken')
 

 const register = async (req, res) => {
    try{
   const {name, password, role} = req.body;
   const hashedpassword = await bcrypt.hash(password, 12)

   const newUser = new Project({name, password: hashedpassword, role})
   await newUser.save();

 res.status(201).json({message: `user is created with name ${name}`})     }
   catch(err) {
    res.status(500).json({message: "Can't create user.....sth went wrong"})     }
   }

 
const login = async(req, res) => {
 
   try {
     const {name, password} = req.body; 
    const user = await Project.findOne({name})
    if (!user) {
      return res.status(400).json({message: `user not found with name ${name}`})  
    }
                       
   const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        return res.status(404).json({message: 'invalid password'})
    }
   const token = jwt.sign({
    id:user._id, role: user.role}, process.env.JWT_SECRET, {expiresIn: '1h'}
   ) 
     
    res.status(200).json({token})
    
   }
    catch (err) {
      res.status(500).json({message: 'something went wrong'})
   }
  

}



module.exports = {
    register, login
}
