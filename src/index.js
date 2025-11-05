const express = require('express')
const dotenv = require('dotenv').config();
const dbConnect = require('./config/dbConnect')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const Project = require('./models/userModel')

const app = express();

  dbConnect();

// MIDDLEWARES
  app.use(express.json());

// ROUTES
  app.get('/', (req, res) => {
  res.json({ 
    message: "API is working!",
    endpoints: {
      auth: "/api/auth",
      users: "/api/role", 
      allUsers: "/allusers"
    }
  });
});

  app.use('/api', authRoutes)   //   /api/auth
  app.use('/api/role', userRoutes)


  //get any user by id  
          
 app.get('/user/:id', async(req, res) => {
    try {
      const {id} = req.params
      const auser = await Project.findById(id)
      res.status(200).json(auser);
    } catch (error) {
      res.status(500).json({message: error.message})
    }
 })   


    // UPDATE by id

app.put('/update/user/:id', async(req,res) => {
try {
  const {id} = req.params;
  const user = await Project.findByIdAndUpdate(id, req.body)
       // we cant find movie  
  if (!user) {
      return res.status(400).json({message: `no movie with this id ${id}` })
    }
     const updatedUser = await Project.findById(id);
      res.status(200).json(updatedUser); 
    }
   catch (error) {
      res.status(500).json({message: error.message})
    } 
})   


   // Route to list all registered users 
app.get('/allusers', async (req, res) => {
  try {
    const users = await Project.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});   


      // delete a movie

app.delete('/delete/:id', async(req,res) => {
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
})    



// STARTING THE SERVER

 const port = process.env.PORT || 3000
   app.listen(port, () => {
     console.log(`server is running on port ${port}`);
   })
  


