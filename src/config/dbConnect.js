const mongoose = require('mongoose');
 require('dotenv').config();
 const dbConnect = async () => {
   try{
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
   console.log(`Project is connected to MongoDB: `);
   }        
  catch (err){
    console.log(err);
    process.exit(1);
  } 
}       
 
module.exports = dbConnect;
           //  OR
//console.log(`Project is connected to MongoDB: ${connect.connection.host}, ${connect.connection.name}`); 