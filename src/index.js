const express = require('express')
const dotenv = require('dotenv').config();
const dbConnect = require('./config/dbConnect')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')
const CRUDRoutes = require('./routes/CRUDRoute')

const app = express();

  dbConnect();

// MIDDLEWARES
  app.use(express.json());

// ROUTES
  app.get('/', (req, res) => {
  res.status(200).send('Hey Homie Sup');
});         

  app.use('/api', authRoutes)   //   /api/auth
  app.use('/api/role', userRoutes)
  app.use('/api' , CRUDRoutes) 

 



// STARTING THE SERVER

 const port = process.env.PORT || 3000
   app.listen(port, () => {
     console.log(`server is running on port ${port}`);
   })
  



